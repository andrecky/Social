import React, {useState} from 'react';
import ComentsBlock from '../Coments/ComentsBlock';
import style from './styles/ProfileBlock.module.css';
import avatar_min from '../../../images/nice_fallout.jpeg';
import Likes from '../Likes/likes';
import ContactForm from '../../redux-Forms/ContactsForm'
import {
    Avatar,
    AvatarBlock, ButtonOrganizer, ButtonPost, ComentsBlocks,
    Contacts, ContentBlockDown, ImgAvatar,
    InfoBlock,
    InpuStatus, ItemLeftBlock, ItemRightBlock, Organizer, OrganizerContent, PostBlock, SideBarOrganizer, Span,
    TitleName,
    UserBlock,
    Wrapper
} from "./styles/ProfileStyled";
import {Line} from "../../Login/LoginStyle/LoginStyled";
import {FaCalculator, FaCalendarAlt, FaClipboardList, FaCloudSun, FaMap, FaSearchDollar} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {useEffect} from "react-with-hooks";
import SimpleSlider from "../Slider/Slider";
import {Calendar} from "react-calendar";


const ProfileBlock = (props) => {

    let [toggle, setToggle] = useState(false);
    let toggleOn = (bool = !toggle) => setToggle(bool);
    let [date, setState] = useState(new Date());
    let onChange = (date) => setState(date);


    useEffect(() => {
        return props.getProfileThunk(props.match.params.id)
    }, []);
    useEffect(() => {
        return props.getProfileStatus(props.match.params.id)
    }, []);
    let submit = (values) => {
        props.OnChangeStatus(values);
        props.toggleStatusSwitch();
    };

    let ProfileProps = props;
    let PostssTags = ProfileProps.posts.map((el) => {
            return (
                <ComentsBlock text={el.text} name={el.name}/>
            );
        }
    );
    let imgUrls = ProfileProps.imgUrls.map((elem) => {
        return (
            <div className={style.img}>
                <img src={elem}/>
            </div>
        );
    });

    let photo = ProfileProps.informationProfileBlock.photos && ProfileProps.informationProfileBlock.photos.large;
    let contacts = {...ProfileProps.informationProfileBlock.contacts};
    let SwitcherToggleStatus = ProfileProps.toggle ?
        <ContactForm initialValues={ProfileProps.status} onSubmit={submit}/> :
        <InpuStatus onClick={ProfileProps.toggleStatusSwitch}>
            {ProfileProps.status}
        </InpuStatus>;

    if (props.informationProfileBlock)

        return (
            <Wrapper>
                <UserBlock>
                    <AvatarBlock>
                        <Avatar>
                            <ImgAvatar src={photo}/>
                        </Avatar>
                        <Likes/>
                    </AvatarBlock>
                    <InfoBlock>
                        <TitleName>
                            {ProfileProps.informationProfileBlock.fullName}
                        </TitleName>
                        {SwitcherToggleStatus}
                        <Line/>
                        <Contacts>
                            {Object.keys(contacts).map(keys => (<Span>
                                <b>{keys}</b>: {contacts[keys]}
                            </Span>))}
                        </Contacts>
                    </InfoBlock>
                    <Organizer>
                        <SideBarOrganizer>
                            <ButtonOrganizer>
                                <FaCalendarAlt data='calcul' onClick={() => toggleOn()}/>
                            </ButtonOrganizer>
                            <NavLink to='/social/Calculator'>
                                <ButtonOrganizer>
                                    <FaClipboardList/>
                                </ButtonOrganizer>
                            </NavLink>
                            <NavLink to='/social/Calculator'>
                                <ButtonOrganizer>
                                    <FaCalculator/>
                                </ButtonOrganizer>
                            </NavLink>
                            <NavLink to='/social/Calculator'>
                                <ButtonOrganizer>
                                    <FaSearchDollar/>
                                </ButtonOrganizer>
                            </NavLink>
                            <NavLink to='/social/Calculator'>
                                <ButtonOrganizer>
                                    <FaCloudSun/>
                                </ButtonOrganizer>
                            </NavLink>
                            <NavLink to='/social/calculator'>
                                <ButtonOrganizer>
                                    <FaMap/>
                                </ButtonOrganizer>
                            </NavLink>
                        </SideBarOrganizer>

                        {toggle ? <OrganizerContent>
                            <Calendar
                                onChange={onChange}
                                value={date}
                            />
                        </OrganizerContent> : null}
                    </Organizer>
                </UserBlock>

                <ContentBlockDown>
                    <ItemLeftBlock>

                    </ItemLeftBlock>
                    <ItemRightBlock>
                        <>
                            <ComentsBlocks>
                                <PostBlock>
                                    <div className={style.blokComents}>

                                        <img
                                            className={style.ava}
                                            src={avatar_min}/>

                                        <input
                                            className={style.comentsSend}
                                            type="text"
                                            value={ProfileProps.textAreaPostsValue}
                                            onChange={(e) => {
                                                ProfileProps.onChangePostsArea(e);
                                            }}
                                            placeholder={`...`}
                                        />
                                    </div>

                                    <div>
                                        <ButtonPost onClick={() => ProfileProps.onButtonClickPosts('text')}>
                                            {`send Text`}
                                        </ButtonPost>
                                        <ButtonPost onClick={() => ProfileProps.onButtonClickPosts('url')}>
                                            {`send IMG`}
                                        </ButtonPost>
                                    </div>
                                </PostBlock>
                            </ComentsBlocks>
                        </>
                        <div className={style.tags}>
                            {PostssTags}
                            {imgUrls}
                        </div>
                    </ItemRightBlock>
                </ContentBlockDown>
            </Wrapper>
        );

};

export default ProfileBlock;
