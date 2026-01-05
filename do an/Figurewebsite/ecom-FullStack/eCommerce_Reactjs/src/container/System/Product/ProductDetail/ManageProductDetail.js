import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAllProductDetailByIdService, DeleteProductDetailService } from '../../../../services/userService';
import { toast } from 'react-toastify';
import { PAGINATION } from '../../../../utils/constant';
import ReactPaginate from 'react-paginate';
import CommonUtils from '../../../../utils/CommonUtils';

const ManageProductDetail = () => {
    const { id } = useParams(); // This is the Product ID
    const [dataProductDetail, setDataProductDetail] = useState([]);
    const [count, setCount] = useState(0);
    const [numberPage, setNumberPage] = useState(0);

    useEffect(() => {
        loadProductDetail();
    }, [numberPage]);

    const loadProductDetail = async () => {
        let res = await getAllProductDetailByIdService({
            id: id,
            limit: PAGINATION.pagerow,
            offset: PAGINATION.pagerow * numberPage
        });
        if (res && res.errCode === 0) {
            setDataProductDetail(res.data);
            setCount(Math.ceil(res.count / PAGINATION.pagerow));
        }
    };

    const handleDeleteProductDetail = async (detailId) => {
        let res = await DeleteProductDetailService({
            id: detailId
        });
        if (res && res.errCode === 0) {
            toast.success("Xóa chi tiết sản phẩm thành công!");
            loadProductDetail();
        } else {
            toast.error("Xóa chi tiết sản phẩm thất bại!");
        }
    };

    const handleChangePage = (number) => {
        setNumberPage(number.selected);
    };

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Quản lý chi tiết sản phẩm</h1>
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1" />
                    Danh sách chi tiết sản phẩm
                    <div className="float-right">
                        <Link to={`/admin/add-product-detail/${id}`} className="btn btn-primary">
                            <i className="fas fa-plus" /> Thêm mới
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên chi tiết</th>
                                    <th>Giá gốc</th>
                                    <th>Giá khuyến mãi</th>
                                    <th>Size</th>
                                    <th>Chiều rộng</th>
                                    <th>Chiều dài</th>
                                    <th>Khối lượng</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataProductDetail && dataProductDetail.length > 0 ? (
                                    dataProductDetail.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1 + numberPage * PAGINATION.pagerow}</td>
                                            <td>{item.nameDetail}</td>
                                            <td>{CommonUtils.formatter.format(item.originalPrice)}</td>
                                            <td>{CommonUtils.formatter.format(item.discountPrice)}</td>
                                            <td>{item.sizeData?.value}</td>
                                            <td>{item.width}</td>
                                            <td>{item.height}</td>
                                            <td>{item.weight}</td>
                                            <td>
                                                <Link to={`/admin/update-product-detail/${item.id}`} className="btn btn-warning btn-sm mr-2">
                                                    <i className="fas fa-edit" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDeleteProductDetail(item.id)}
                                                    className="btn btn-danger btn-sm"
                                                >
                                                    <i className="fas fa-trash" />
                                                </button>
                                                <Link to={`/admin/list-product-detail-image/${item.id}`} className="btn btn-info btn-sm ml-2">
                                                    <i className="fas fa-images" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="9" className="text-center">Không có dữ liệu</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ReactPaginate
                previousLabel={'Quay lại'}
                nextLabel={'Tiếp'}
                breakLabel={'...'}
                pageCount={count}
                marginPagesDisplayed={3}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakLinkClassName={"page-link"}
                breakClassName={"page-item"}
                activeClassName={"active"}
                onPageChange={handleChangePage}
            />
        </div>
    );
};

export default ManageProductDetail;
