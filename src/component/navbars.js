import { ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import "../styles/navbars.css";
import { Link } from "react-router-dom";


const Navbars = ({ setShow, size }) => {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={() => setShow(true)}>
                    All Products
                </span>
                <div> <Link to="/" style={{
                    fontSize: 30,
                    textDecoration: "none",
                    fontWeight: "bold",
                }}>ISHA.</Link> </div>
                <div className="cart" onClick={() => setShow(false)}>
                    <span>
                        <ShoppingCartOutlined />
                        {/* <i className="fas fa-cart-plus"></i> */}
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbars;