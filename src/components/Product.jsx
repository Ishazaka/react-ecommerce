import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`

`


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

// const Title = styled.span`
// `
// const Price = styled.span`

// `;

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
// const Div = styled.div`
// `

// const Button = styled.button`
// `;

const Product = ({ item }) => {
    return (
        <MainContainer>
            <Container>
                <Circle />
                <Image src={item.img} />

                <Info>
                    <Icon>
                        <Link to="/mainCart"> <ShoppingCartOutlined /> </Link>
                    </Icon>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </Container>
            {/* <Div>
                <Title style={{ fontSize: 20 }}>{item.title}</Title>
                <Price style={{ marginLeft: 15 }}>${item.price}</Price>
            </Div> */}
            {/* <Button style={{
                marginTop: 10,
                marginBottom: 15,
                padding: 10,
                backgroundColor: "teal",
                color: "white",
            }}>Add To Cart</Button> */}
        </MainContainer>
    )
}

export default Product