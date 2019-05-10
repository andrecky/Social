import styled from 'styled-components'



export const Background = styled.div`
background-image: url('https://cnet3.cbsistatic.com/img/CQF3TxjTa8W4gwARLL78UKRPvis=/1600x900/2018/05/30/e0e1f7f6-0dbf-493c-86d7-df4d31541e5e/screen-shot-2018-05-29-at-11-18-30-pm.png');
background-size: cover;
 height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   width: 100%;
 
`;
export const Wrapper = styled.div`
   
 
   border-radius: 10px;
    display: flex;
    flex-direction: column;;
    align-items: center;
    border: 5px solid #B3CB03;
    width: 300px;
    height: 500px;
    background-color:#023885;
    background-opacity: 0,5;
    box-shadow: 10px 5px 50px 10px;
    
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin: 20px;
`;

export const Line = styled.div`
    border-bottom: 3px #A52A2A solid;
    border-radius: 10px;

`;

export const InputMailPass = styled.input`
    width: 200px;
    height: 20px;
    margin: 5px;
    text-align: center;
    border-radius: 5px;
    background-color: #031361;
    color: #B3CB03;
    border: 3px solid #B3CB03;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
    line-height: 27px;
    
`;

export const ImgCaptcha = styled.img`
    border: solid 2px #A52A2A;
    margin-left: 48px;
    width: 200px;
    height: 40px;
`;

export const CaptchaInput = styled.div`
    color: #13CE66;
    padding-right: 15px;
`;
export const RememberMe = styled.div`
    color: #B3CB03;

`;

export const RememberInput = styled.input`
  
    
    `;
export const ButtonLogin = styled.button`
    background-color: #031361;
    border-radius: 50px;  
    border: 3px solid #B3CB03;  
    color: #B3CB03;
    margin: 15px;
    outline: none;
    &:active{
    #5C83FA;
    }
`;

export const Auntification = styled.div`
    margin-bottom: 100px;
    font-size: 15px;
    color: #B3CB03;
    margin-top 10px;
    padding: 5px;
    border: 2px solid ;
    width: 90px;
    height: 40px;
    align-items: end;
    border-radius: 10px;
    
`;
