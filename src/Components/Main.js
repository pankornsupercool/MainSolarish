import styled from "styled-components";


export const MainHeader = styled.header`
background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: #fff;
    min-height: 600px;
`


export const MainHead1 = styled.h1`
    font-size:4rem;
    font-weight : 700;
    line-height: 1.1;
    letter-spacing: 0rem;
    text-transform : capitalize;
    text-shadow: rgb(1 1 1) 0px 0px 0.5rem;
`

export const MainImage = styled.img`
`

export const MainContainer = styled.div`
    max-width: 1500px;
    margin-top: 0;
    margin : auto;
    padding: 0 ;
    display: flex;
    align-items : center;
    justify-content : space-between;

`
export const MainPara = styled.p`
    font-size: 25px;
    line-height : 1.3;
    letter-spacing: 1.1;
    text-shadow: rgb(1 1 1) 0px 0px 0.5rem;
`


export const MainButton = styled.button`
box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
background: #fff;
border : none;
width : 230px;
height : 50px;
border-radius : 25px;
color : #434343 ;
font-size : large;
letter-spacing: 1.2px;
margin-top :25px;
cursor : pointer;
transition: all 0.3s ease 0s;
&:hover{
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: translateY(-7px);
}
`
export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  text-align: center;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;

export const TooltipCard = styled.div`
  position: relative;
  & ${MainButton}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;




export const MainA = styled.a`
    color : #fff ;
    text-decoration : none;
    font-size: 18px;
    font-weight: medium;
    margin-left: 5px;
    margin-right: 10px;
    cursor : pointer;
    text-shadow: rgb(1 1 1) 0px 0px 0.5rem;
&:hover {
    opacity : 0.5;

}
`

export const MainUl = styled.ul`
    display : flex;
    margin-top : 50px;
    padding :0;
`