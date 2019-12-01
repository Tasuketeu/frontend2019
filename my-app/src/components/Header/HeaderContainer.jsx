import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{


    render() {
        return <Header {...this.props}/>
    }
}

export default HeaderContainer;