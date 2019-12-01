import React from 'react';
import Movie from "./Movie";
import {connect} from "react-redux";

class MovieContainer extends React.Component{


    render() {
        return <Movie {...this.props}/>
    }
}

export default MovieContainer;

