import React, {useEffect} from 'react';
import {
    BackMenu, Block,
    BlockSendMessage,
    HeaderChat, Input,
    ItemsContainer,
    Message,
    WrapperChat
} from "../../DialogsStyles/CahtStyled";
import {InputMailPass, Line} from "../../../Login/LoginStyle/LoginStyled";
import {ButtonPost} from "../../../ProfilePage/ProfileBlock/styles/ProfileStyled";


const Chat = (props) => {
    let nameUsers = props.messagesUsers;
    console.log(nameUsers);
    let {messagesUsers, getMessages, match} = props;
    useEffect(() => getMessages(match.params.id), []);
    let messages = React.createRef();

    return (
        <WrapperChat>

            <HeaderChat>

                <BackMenu>&#9668;</BackMenu>


                {/*{nameUsers.length===0?'':nameUsers.filter(el=>  <Message>  {  el.senderName}</Message>)}*/}
            </HeaderChat>
            <Line/>

                <ItemsContainer>
                    {messagesUsers.length === 0 ? '' : messagesUsers.map(el => <Message>
                            <span> {el.senderName}</span>
                            <span>{el.body}</span>
                        </Message>
                    )}
                </ItemsContainer>

            <BlockSendMessage>
                <Input
                    placeholder='введите сообщение'
                    type='text'
                    value={props.sendMessages}

                    ref={messages}
                />
                <ButtonPost onClick={() => {
                    props.sendButtonMessages(match.params.id, messages.current.value)

                }}
                        type='submit'>
                    send
                </ButtonPost>
            </BlockSendMessage>

        </WrapperChat>
    );
};

export default Chat;
