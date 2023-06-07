import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../css/productDetail.css'
import { PRODUCT_API } from "../constant/appConstant";


function ProductDetail() {
    // const PRODUCT_API = "http://localhost:3001";
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect((() => {
        axios
            .get(`${PRODUCT_API}/products/${productId}`)
            .then(res => setProduct(res.data))
            .catch(err => { throw err })
    }), [productId])

    return (
        <div>
            <h1 id="heading-detail">Chi tiết sản phẩm</h1>
            <table id="product-detail">
                <tr>
                    <td className="label-style">Tên sản phẩm</td>
                    <td className="detail">{product.name}</td>
                </tr>
                <tr>
                    <td className="label-style">Giá(đ)</td>
                    <td className="detail">{product.price}</td>
                </tr>
                <tr>
                    <td className="label-style">Tồn kho</td>
                    <td className="detail">{product.stock}</td>
                </tr>
                <tr>
                    <td className="label-style">Mô tả</td>
                    <td className="detail">{product.description}</td>
                </tr>
            </table>

            <Link to="/">
                <button type="button" className="btn btn-secondary">
                    Xem danh sách
                </button>
            </Link>

        </div>
    )
}

export default ProductDetail;