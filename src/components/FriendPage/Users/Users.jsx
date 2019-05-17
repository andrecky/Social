import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    BlockName, Button,
    ButtonBlock,
    FotoAllUsers,
    FriendsActive,
    FriendsAllBlock,
    LineVertical,
    NameSpan,
    OnlineFriendsHead,
    StatusSpan,
    UserBlock,
    WrapperFriends
} from "../styles/styleFrirends";
import style from "../../news/styleNews/NewsStyle.module.css";

export const UrlImg = 'https://executivecareerbrand.com/wp-content/uploads/2015/07/No_person-1.jpg'

const Users = (props) => {
    useEffect(
        () => {

            return props.getUsers()
        }, []);

    return <WrapperFriends>
        <InfiniteScroll
            className={style.scrollBlock}
            dataLength={props.users.length}
            loader={<div className={style.loader}>Loading...</div>}
            next={() => props.getUsers()}
            hasMore={true}
        >

            {console.log(props)}
            {props.page === 1 ? <span>users not found</span> :
                props.users.map((us, index) => <FriendsAllBlock>
                        <>
                            <NavLink className='link'
                                     to={`/social/users/profile/${us.id}`}>
                                <FotoAllUsers
                                    src={us.photos.small === null ? UrlImg : us.photos.small}/>
                            </NavLink>
                            <UserBlock>
                                <BlockName>
                                    <NavLink className='link'
                                             to={`/social/users/profile/${us.id}`}
                                             activeClassName="">
                                        <NameSpan>
                                            {us.name}
                                        </NameSpan>
                                    </NavLink>
                                    <StatusSpan>
                                        {us.status === null ? 'no status' : us.status}
                                    </StatusSpan>
                                </BlockName>
                                <ButtonBlock>
                                    <Button onClick={() => !us.followed ? props.follow(us.id, index)
                                        : props.unFollow(us.id, index)}>
                                        {!us.followed ? 'подписаться' : 'отписаться'}
                                    </Button>
                                    <NavLink to={`/social/chat/${us.id}`}>

                                        <Button>
                                            написать сообщение
                                        </Button>
                                    </NavLink>
                                </ButtonBlock>
                            </UserBlock>
                        </>

                    </FriendsAllBlock>
                )
            }
        </InfiniteScroll>
        <LineVertical/>
    </WrapperFriends>
};


export default Users;
