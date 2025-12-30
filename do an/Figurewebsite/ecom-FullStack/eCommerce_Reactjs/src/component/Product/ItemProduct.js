import React from 'react';

import { Link } from 'react-router-dom';

import CommonUtils from '../../utils/CommonUtils';
import './ItemProduct.scss';
// độ phân giải ảnh có thể làm vỡ layout
function ItemProduct(props) {


    return (
        <div className={props.type}>
            <div style={{ cursor: 'pointer' }} className="single-product">
                <Link to={`/detail-product/${props.id}`}>
                    <div style={{ width: props.width, height: props.height }} className="product-img">
                        <img className="img-fluid w-100" src={props.img} alt="" />
                        <div className="p_icon">
                            <button>
                                <i className="ti-eye" />
                            </button>
                            <button>
                                <i className="ti-shopping-cart" />
                            </button>
                        </div>
                    </div>
                    <div style={{ width: props.width, height: '99px' }} className="product-btm">
                        <div className="d-block">
                            <h4 >{props.name}</h4>
                        </div>
                        <div className="mt-3">
                            <span className="mr-4">{CommonUtils.formatter.format(props.discountPrice)}</span>
                            <del>{CommonUtils.formatter.format(props.price)}</del>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default ItemProduct;