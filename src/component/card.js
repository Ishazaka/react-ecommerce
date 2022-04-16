import React from "react";
import styled from 'styled-components';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'


const Info = styled.div`
opacity:0;
width: 100%;
height:100%;
position: absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;

`;

const Container = styled.div`
flex:1;
margin:5px;
min-width: 280px;
height: 350px;
display:flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
    opacity: 1;
}

`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 75%;
z-index: 2;
`;


const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display:flex;
align-items: center;
justify-content: center;
margin:10px;
transition: all 0.5s ease;

&:hover{
    background-color:#d3f2f2;
    transform: scale(1.1);
}
`;

const Cards = ({ item, handleClick }) => {
    const { title, price, img } = item;
    return (
        <div>
            <Container>
                <Circle />
                {/* <div className="cards"> */}
                {/* <div className="image_box"> */}
                <Image src={img} alt="" />
                {/* </div> */}
                <Info>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </Container>
            <div className="details">
                <p>{title}</p>
                <p>Price - ${price}.00</p>
                <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
        </div>
        // </div>
    );
};

export default Cards;