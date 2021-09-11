import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../Component/chart/Chart";
import "./product.css";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h3 className="productTitle">Product</h3>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            datakey="Sales Volume"
            title="Sales Perfomance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.unsplash.com/photo-1556977961-1c8d5c4efda6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Air Pods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItems">
              <span className="productInfokey">Id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItems">
              <span className="productInfokey">Sales:</span>
              <span className="productInfoValue">3123</span>
            </div>
            <div className="productInfoItems">
              <span className="productInfokey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItems">
              <span className="productInfokey">In Stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" Apple Pod />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.unsplash.com/photo-1556977961-1c8d5c4efda6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}
