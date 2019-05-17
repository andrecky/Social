import styled from "styled-components";

//USER COMPONENT
export const WrapperFriends = styled.div`
    display: flex;
    margin: 80px 160px;
    width: 100%;
    height: 500px;
    
    // overflow: hidden;
    // overflow-y: scroll; 
`;

export const FriendsAllBlock = styled.div`
    border: solid 2px #B3CB03;
    border-radius: 10px
    background-color:#D9DBF2;
    margin: 5px;  
    display: flex;
    padding-top: 10px;
    margin-left: 50px;
    width: 400px;
    height: 80px; 
      
`;

export const FotoAllUsers = styled.img`
     width: 60px;
     height: 60px;
     border-radius: 100px;
     box-shadow: 0 0 0 3px #282c34, 0 0 13px;
     margin-top: 10px;
     margin-bottom: 20px;
     margin-right: 40px;
     margin-left: 25px;
`;

export const UserBlock = styled.div`
     display: flex;
    width:100%;
     
`;

export const BlockName = styled.div`
     display: flex;
    flex-direction: column;
    width: 100%;
     font-size: 10px;
`;

export const LineVertical = styled.div`
     border-right: 2px #A52A2A solid;
     border-radius: 20px;
     margin 10px 10px 10px 10px;
`;

export const NameSpan = styled.span`
     top: 20px;
     margin-left: -20px;
     margin-top: -15px;
     font-size: 18px;
     color: black;
     font-size: 12px;
     // align-items: center;
`;
export const StatusSpan = styled.span`
     margin-top: 30px;
`;

export const FriendsActive = styled.div`
    border: solid 2px #B3CB03;
    background-color:#D9DBF2;
    border-radius: 10px
    margin: 5px;  
    display: flex;
    padding-top: 10px;
    margin-left: 50px;
    width: 300px;
    height: 80px;  
`;

export const ButtonBlock = styled.div`

flex-direction: column;
display: flex;
width: 100%;
// margin: 5px 10px 10px 10px ;

`;

export const OnlineFriendsHead = styled.div``;

 export const Button =styled.span`
 text-align: center;
padding: 5px;
  cursor: pointer;
  width: 80px;
  height: 10px;
   margin: 10px;
    outline: none;
    font-size: 9px;
    color: #B3CB03;
     border: 2px solid #B3CB03; 
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: 1px 1px 1px 1px #000000;
    background-color: #023885;
    border-radius: 5px;
    &:hover{
    font-size: 8px;
    background: #023885;
    }
 `;
