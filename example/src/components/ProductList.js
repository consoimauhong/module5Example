import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/product.css"

function ProductList() {
    const PRODUCT_API = "http://localhost:3001";
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${PRODUCT_API}/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    function handleClickNewProduct() {
        return navigate("/products");
    }

    return (
        <div >
            
            <h1 id="heading-list" className="text-center">Danh sách sản phẩm</h1>
            
            <button id="btnNewProduct" className="btn btn-outline-primary" onClick={handleClickNewProduct}>Thêm sản phẩm</button>
            <table id="table-product" className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá(đ)</th>
                        <th>Tồn kho</th>
                        <th>Xem Chi tiết</th>
                        <th>Cập nhật</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link to={`/products/${product.id}`}>
                                        <button className="btn btn-outline-success">Xem chi tiết</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/products/edit/${product.id}`}>
                                        <button className="btn btn-outline-info">Cập nhật</button>
                                    </Link>
                                </td>

                                <td>
                                    <Link to={`/products/delete/${product.id}`}>
                                        <button className="btn btn-outline-danger">Xóa</button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;