import React from 'react'
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from "../responsive";
import { Link } from "react-router-dom";




const Container = styled.div`
height: 80px;
${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
align-items: center;
justify-content: space-between 
${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
flex:1;
display: flex; `

const Language = styled.span`
font-size:16px;
cursor: pointer;
${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display:flex;
align-items:center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
border:none;
${mobile({ width: "50px" })}
`

const Center = styled.div`
flex:1;
text-align: center;`

const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
flex:1 ;
display:flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        < Input placeholder='search' />
                        < Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>  <Link to="/" style={{ color: "black", textDecoration: 'none' }} > ISHA.</Link> </Logo>  </Center>
                <Right>
                    <MenuItem>   <Link to="/register" style={{ color: "black", textDecoration: 'none' }} >REGISTER</Link> </MenuItem>
                    <MenuItem> <Link to="/login" style={{ color: "black", textDecoration: 'none' }} >SIGN IN</Link></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={1} color="primary">
                            <Link to="/mainCart">
                                <ShoppingCartOutlined />
                            </Link>

                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar