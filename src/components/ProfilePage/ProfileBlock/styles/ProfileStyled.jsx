import styled from 'styled-components'

export const Wrapper = styled.div`
  flex-direction: column;
  margin: 85px 180px;
  width: 90%;
`;

export const UserBlock = styled.div`
  display: flex;
  font-size: 16px;
  color: #000000;
  margin: 10px;
`;

export const AvatarBlock = styled.div`
    display: flex;
    box-shadow:1px 1px 1px 1px #000000;
    flex-direction: column;
    width: 210px;
    border-radius: 10px ;
    margin-right: 10px;
    margin-left: 10px;
    align-items: center;
    border: 2px solid #B3CB03;
    background-color:#D9DBF2    ;
    
    border-radius: 10px;
`;


export const Avatar = styled.div`
    border-bottom: 3px #A52A2A solid;
`;
export const ImgAvatar = styled.img`
    margin-top: 5px;
    width: 200px;
    height: 250px;
`;
export const Likes = styled.button`
    margin-top: 10px;
    border-radius: 5px;
    background-color: #D9DBF2;
    color: #B3CB03;
    border: 2px solid #B3CB03;
    outline: none;
`;

export const InfoBlock = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 10px;
  height: 300px;
  width: 500px;
  flex-direction: column;
  padding: 5px;
  box-shadow:1px 1px 1px 1px #000000;
  border-radius: 10px;
  border: 2px solid #B3CB03;
   background-color:#D9DBF2;
`;

export const TitleName = styled.span`
  font-size: 25px;
`;

export const InpuStatus = styled.span`
  margin-right: 50px;
  color: #879198;
`;

export const Contacts = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  height: 200px;
  margin: 5px;
`;
export const Organizer = styled.div`
    height: auto;
    width: 300px;
    outline: none;
    text-align:center; 
    color: #B3CB03;
    // border: 2px solid #B3CB03;
    overflow: hidden;
    text-overflow: ellipsis;
    // box-shadow: 1px 1px 1px 1px #000000;
    // background-color: #D9DBF2;
    // border-radius: 5px;
    position: fixed;
    right: 20px;
    
`;
export const SideBarOrganizer = styled.div`
 padding-bottom: 5px;
  height: auto;
    width: auto;
    outline: none;
    text-align:center; 
    color: #B3CB03;
    border: 2px solid #B3CB03;
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: 1px 1px 1px 1px #000000;
    background-color: #D9DBF2;
    border-radius: 5px;
    margin: 0px 3px 3px 0px;
    
 `;
export const OrganizerContent = styled.div`
height: auto;
    width: auto;
    outline: none;
    text-align:center; 
    color: #B3CB03;
    border: 2px solid #B3CB03;
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: 1px 1px 1px 1px #000000;
    background-color: #D9DBF2;
    border-radius: 5px;
  margin: 10px 3px 3px 0px;
`;


export const ButtonOrganizer = styled.button`
   cursor: pointer;
   margin: 10px 5px 5px 5px  ;
    outline: none;
    font-size: 20px;
    color: #B3CB03;
     border: 2px solid #B3CB03; 
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: 1px 1px 1px 1px #000000;
    background-color: #023885;
    border-radius: 5px;
    &:hover{
    font-size: 25px;
    background: #D9DBF2;
    }
`;

export const Span = styled.span`

`;
export const ContentBlockDown = styled.div`
  display: flex;
 `;
export const ItemLeftBlock = styled.div`
  flex-direction: column;
  width: 200px;
  height: 290px;
  box-shadow:1px 1px 1px 1px #000000;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 20px;
  margin-top: 10px;
  padding: 5px;
  border: 2px solid #B3CB03;
  background-color:#D9DBF2;
 `;
export const ItemRightBlock = styled.div`
  width: 70%;
  border-radius: 10px;
  margin-right: 5px;
  margin-left: 10px;
 `;

export const ComentsBlocks = styled.div`
 border: 3px solid #B3CB03;
  background-color:#D9DBF2;
  flex-direction: column;
  width: 515px;
  border-radius: 10px;
 `;
export const PostBlock = styled.div`
 
 display: flex;
 background-color:#C5C6DD;
 `;
export const ButtonPost = styled.button`
   cursor: pointer;
    outline: none;
    font-size: 10px;
    color: #B3CB03;
     border: 2px solid #B3CB03; 
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: 1px 1px 1px 1px #000000;
    background-color: #023885;
    border-radius: 5px;
    &:hover{
    font-size: 11px;
    background: #023885;
    }
`;

