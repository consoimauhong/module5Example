import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PRODUCT_API } from "../constant/appConstant";

function NewProduct() {
  
    const [newProduct, setNewProduct] = useState({})

    function handleChange(event) {
        setNewProduct({
            ...newProduct,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post(`${PRODUCT_API}/products`, newProduct)
            .then(res => {
                console.log(res.data);
                window.location.href = "/";
            })
            .catch(err => {
                throw err;
            });
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>               
                <h1>Thêm sản phẩm</h1> */}
                <form className="edit-form">
                <h1 id="heading-edit">Thêm sản phẩm</h1>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Tên sảm phẩm</label>
                    <input className="form-control" id="name" name="name" value={newProduct.name || ""} 
                    onChange={handleChange} placeholder="Nhập tên sản phẩm"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="price">Giá(đ)</label>
                    <input className="form-control" id="price" name="price" type="number" value={newProduct.price || ""} 
                    onChange={handleChange} placeholder="Nhập giá tiền"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="stock">Tồn kho</label>
                    <input className="form-control" id="stock" name="stock" type="number" value={newProduct.stock || ""} 
                    onChange={handleChange} placeholder="Nhập số lượng tồn kho"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="description">Mô tả</label>
                    <textarea className="form-control" id="description" name="description" value={newProduct.description || ""} onChange={handleChange} />
                    {/* <input className="form-control" id="description" name="description" value={newProduct.description || ""} onChange={handleChange} /> */}
                </div>

                <Link to="/">
                    <button type="button" className="btn btn-secondary">
                        Back
                    </button>
                </Link>
                &nbsp;
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewProduct;