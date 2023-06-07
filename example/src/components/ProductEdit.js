import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../css/productEdit.css"

function ProductEdit() {
    const PRODUCT_API = "http://localhost:3001";
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (productId) {
            axios
                .get(`${PRODUCT_API}/products/${productId}`)
                .then(res => {
                    setProduct(res.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [productId]);

    function handleChange(event) {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit() {
        axios
            .put(`${PRODUCT_API}/products/${productId}`, product)
            .then(res => {
                alert(
                    `${JSON.stringify(
                        res.data
                    )} successfully!!!`
                );
                window.location.href = "/";
            })
            .catch(err => {
                throw err;
            });
    }

    return (
        <div>
            <form className="edit-form">
                <h1 id="heading-edit">Cập nhật</h1>
                <div className="mb-3">
                    <label className="form-label">Id</label>
                    <input className="form-control" readOnly name="id" value={product.id || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Tên sản phẩm</label>
                    <input className="form-control" id="name" name="name" value={product.name || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="price">Giá(đ)</label>
                    <input className="form-control" type="number" id="price" name="price" value={product.price || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="stock">Tồn kho</label>
                    <input className="form-control" type="number" id="stock" name="stock" value={product.stock || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="description">Mô tả</label>
                    <textarea className="form-control" id="description" name="description" value={product.description || ""} onChange={handleChange} />
                    {/* <input className="form-control" id="description" name="description" value={product.description || ""} onChange={handleChange} /> */}
                </div>
                <Link to="/">
                    <button type="button" className="btn btn-secondary">
                        Back
                    </button>
                </Link>
                &nbsp;
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    Edit
                </button>
            </form>
        </div>
    );
}

export default ProductEdit;