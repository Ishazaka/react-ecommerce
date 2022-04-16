import React from "react";
import { ShopProducts } from "../data";
import Cards from "./card";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
    return (
        <section>
            {ShopProducts.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
    );
};

export default Amazon;
