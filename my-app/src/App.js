import React,{Component} from 'react';
import './App.css';
import {BrowserRouter,Route,withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from 'react-redux';
import store from './redux/redux-store';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import MovieContainer from './components/MainContainer/MovieContainer/MovieContainer';
import Footer from './Footer/Footer';

class App extends Component {

  render(){
  return (
    <div className="app-wrapper">
<HeaderContainer/>
<MovieContainer/>
<Footer/>
    </div>
  );
         }
}


export default App;
