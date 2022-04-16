import React from 'react'
import { useState } from "react"
import Amazon from "../component/amazon";
import Navbars from "../component/navbars";
import Cart from "../component/cart";
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const MainCart = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
    };

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;

        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
    };

    // useEffect(() => {
    //   console.log("cart change");
    // }, [cart]);


    return (
        <>

            <div style={{
                minHeight: "80vh",
            }}>
                <Navbars setShow={setShow} size={cart.length} />
                <Announcement />
                {show ? (
                    <Amazon handleClick={handleClick} />
                ) : (
                    <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
                )}
            </div>
            <Newsletter />
            <Footer />

        </>
    )
}

export default MainCart