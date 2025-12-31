import React from 'react';

function Pagination(props) {
    var item = [];
    for (let i = 0; i < props.amountPage; i++) {
        // Assuming onPageChange will handle the page number (1-based)
        item.push(<li className="page-item" key={i + 1}><button className="page-link" onClick={() => props.onPageChange(i + 1)}>{i + 1}</button></li>);
    }
    return (
        <nav aria-label="Page navigation example" style={{ marginTop: '50px', }}>
            <ul className="pagination justify-content-center" style={{ marginLeft: '70%', }}>
                <li className="page-item">
                    <button className="page-link" onClick={() => props.onPageChange('prev')} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {item}
                <li className="page-item">
                    <button className="page-link" onClick={() => props.onPageChange('next')} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;