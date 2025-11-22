import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ShopCartItem from './ShopCartItem';
import * as userService from '../../services/userService';
import '@testing-library/jest-dom';

// Mock react-redux
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
}));

// Mock services
jest.mock('../../services/userService');

// Mock child components to simplify test
jest.mock('../../container/ShopCart/DeleteShopCartModal', () => (props) => (
    <div data-testid="delete-modal">
        <button onClick={props.handleDeleteShopCart}>Confirm Delete</button>
        <button onClick={props.closeModal}>Cancel</button>
    </div>
));

describe('ShopCartItem Component', () => {
    const mockProps = {
        isOrder: false,
        id: 1,
        userId: 10,
        productdetailsizeId: 5,
        name: 'Test Product',
        price: 100000,
        quantity: 2,
        image: 'test-image.jpg',
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders product information correctly', () => {
        render(<ShopCartItem {...mockProps} />);

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        // Check if price is formatted (CommonUtils is used inside)
        // 100,000 VND
        expect(screen.getByText(/100,000/)).toBeInTheDocument();
        // Check quantity input
        expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    });

    test('calls addShopCartService when quantity changes', async () => {
        userService.addShopCartService.mockResolvedValue({ errCode: 0 });

        render(<ShopCartItem {...mockProps} />);
        const input = screen.getByDisplayValue('2');

        fireEvent.change(input, { target: { value: '3' } });

        await waitFor(() => {
            expect(userService.addShopCartService).toHaveBeenCalledWith(expect.objectContaining({
                type: 'UPDATE_QUANTITY',
                userId: mockProps.userId,
                productdetailsizeId: mockProps.productdetailsizeId,
                quantity: '3',
            }));
        });

        expect(mockDispatch).toHaveBeenCalled();
    });

    test('opens delete modal when delete button is clicked', () => {
        render(<ShopCartItem {...mockProps} />);

        const deleteBtn = screen.getByText('Xóa');
        fireEvent.click(deleteBtn);

        expect(screen.getByTestId('delete-modal')).toBeInTheDocument();
    });
});
