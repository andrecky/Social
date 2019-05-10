import React from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';
import style from "../../App.module.css";
import Header from "../Header/HeaderContainer";
import SideBar from "../SideBar/SideBar";

const AppCalculator = () => (
    <NumberProvider>
        <div className={style.header}>
            <Header />
            <div className={style.wrapper}>
                <SideBar />
                <Calculator />
            </div>
        </div>
    </NumberProvider>
);

export default AppCalculator;

