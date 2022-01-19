import styled from "styled-components";

export const Navbar = styled.nav`
    background: #fff;
    color : #434343 ;
    height: 90px;
`
export const NavbarLogo = styled.div`
    font-size : x-large;
`

export const NavbarA = styled.a`
    color : #434343 ;
    text-decoration : none;
    font-size: 18px;
    font-weight: medium;
    margin-left: 40px;
    cursor : pointer;

&:hover{
    color :#0063FC;
}
`

export const NavBarContainer = styled.div`
    max-width: 1800px;
    margin: 0 auto;
    padding: 0 30px;
    display : flex;
    justify-content : space-between;
    align-items: center;
    height : 100%
`

export const NavBarUl = styled.ul`
    display : flex;
    margin-left: 20px;
`
