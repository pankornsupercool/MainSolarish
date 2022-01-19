import styled from "styled-components";


export const ContentContainer = styled.div`
    display:flex;
    justify-content: space-between;
    max-width: 1900px;
    margin: 0 auto;
    padding: 0 30px;

`
export const ContentBox = styled.div`
    flex: 1;
    background: #fff;
    color: #434343;
    border-radius: 10px;
    margin: 20px 10px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
    padding: 15px 20px;
    self-align : center;
    cursor : pointer;
    transition: all 0.3s ease 0s;
    
&:hover{
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: translateY(-7px);
    
}
`

export const ContentI = styled.i`
    margin-right: 10px;
`

export const ContentSection = styled.div`
background: linear-gradient(to right, #8e2de2, #4a00e0);
color: #fff;
min-height: 600px;
`
