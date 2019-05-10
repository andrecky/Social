import styled from 'styled-components'

export const WrapperSideBar = styled.div`
    width: 149px;
    padding: 1px;
    // text-align: center;
    height: 538px;
    position: fixed;
    left: 0px;
    margin: 30px 10px ;
`;

export const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    margin-top: 50px;
    
`;

export const SpanIco = styled.i`
    margin-right: 5px;
    outline: none;
    font-size: 15px;
    color: #B3CB03;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #023885;
    
    position: fixed;
    left: 20px;
    `;

export const Span = styled.div`
cursor: pointer;
margin: 5px 5px 5px 5px; 
text-align:center;
padding: 5px 0px 0px 0px ;
     height: 20px;
    width: 150px;
    outline: none;
    font-size: 12px;
    color: #B3CB03;
     border: 2px solid #B3CB03; 
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: 1px 1px 1px 1px #000000;
    background-color: #023885;
    border-radius: 5px;
    &:hover{
    font-size: 15px;
    background: #023885;
    }
`;


export const Line = styled.div`
 border-bottom: 1px solid #E9E9EC;
`;
