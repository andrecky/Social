import styled from 'styled-components'

export const WrapperChat = styled.div`
  // display: flex;
    margin: 85px 220px;
    width: 800px;
    height: 100%;
    border: solid 2px #B3CB03;
    border-radius: 10px
    background-color:#D9DBF2;
    // justify-content: column;
    
`;

export const Input = styled.input`
border: solid 2px #B3CB03;
    border-radius: 10px
    width: 200px;
    height: 80;
    opacity: 1;

`;

// export const Button
 export const HeaderChat = styled.div`
  
 `;


 export const BackMenu = styled.div`
 padding: 5px;
 font-size 40px;
 
 `;

export const Message = styled.div`
 border: solid 2px #B3CB03;
    border-radius: 200px
    background-color:white;
    margin: 5px;  
       display: flex;
       max-width: 200px
       
    padding: 10px;
    margin-left: 50px;
     font-size: 12px;
     flex-direction: column;
     text-align: center
`;

export const ItemsContainer = styled.div`
padding-left: 45px;
    width: 70%;
    
    overflow: hidden;
    overflow-y: scroll;
    background-color: #D9DBF2;
`;

export const BlockSendMessage = styled.div`
display: flex;
// align-self: flex-end
// justify-content: flex-end;
margin-left: 100px;
// position 
`;
