import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 66px;
    width: 1250px;
    background-color: #023885;
    min-height: auto;
    border: 2px solid #B3CB03;
    box-shadow: 0 2px 5px rgba(0,0,0,.29);
    border-radius: 5px;
    margin: 0px 10px 10px 10px;
    position: fixed;
    top: 0px;
`;
export const Button = styled.button`
    position: fixed;
    right: 50px;
    align-self: center;
    background-color: #00224241;
    border-radius: 5px;
    border-color: #B3CB03;
    color: #B3CB03;
    // width: 60px;
    // height: 30px;
    font-size: 15px;
    &:hover{
    background: #021365;
    font-size: 20px;
    }
`;

export const Logo = styled.img`
    width: 65px;
    height: 65px;
    padding: 0px 10px 5px 5px;
    border-radius: 50px;
`;
export const SearchBar = styled.input`

`;
