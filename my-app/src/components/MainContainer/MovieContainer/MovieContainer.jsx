import React from 'react';
import ReactDOM from 'react-dom';

import Select from 'react-select';
import { Navbar, Nav, NavItem, Container, Row, Col, FormGroup, InputGroup, FormControl, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAllMovies} from "../../../redux/movies-reducer";
import  {Movie}  from './Movie';
import { moviesAPI } from '../../../api/api';

const API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";
let formatSelectedOption;
let genreSelectedOption;
let yearSelectedOption;

class MovieContainer extends React.Component {

    componentDidMount() {
    }

    constructor(props) {
        super(props);
        this.state = {
            format: null,               // Начальное состояние для фильтра 'Формат'.
            genre: null,                // Начальное состояние для фильтра 'Жанр'.
            year: null,                 // Начальное состояние для фильтра 'Год'.
            searchInput: null,          // Начальное состояние для фильтра 'Поиск по названию фильму'.
            result: []                  // Список отображаемых фильмов.
        }
        /**
         * Делаем привязку контекста для обработчиков событий.
         * "Зашиваем" в методы ссылку на текущий объект, чтобы в теле метода this ссылался на объект.
         */
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    }

    /**
     * Обработчик изменения значения в фильтре 'Формат'.
     */
    handleFormatChange(selectedOption) {
        // Фильтруем по формату.
        const resultArray = this.props.result.filter(
            (item) => item.format.indexOf(selectedOption.value) !== -1
        );
        formatSelectedOption=selectedOption;
        this.setState({
            format: selectedOption,
            result: resultArray
        });
    }

    /**
     * Обработчик изменения значения в фильтре 'Жанр'.
     */
    handleGenreChange(selectedOption) {
        // Фильтруем по жанрам. Не забываем при этом, что жанров может быть много, они лежат в массиве.
        // Это не сильно усложняет условие фильтрации, ведь indexOf метод прекрасно работает как со строкой так и с массивом.
        const resultArray = this.props.result.filter(
            (item) => item.genre_ids.indexOf(selectedOption.value) !== -1
        );

        genreSelectedOption=selectedOption;
        this.setState({
            genre: selectedOption,
            result: resultArray
        });
    }

    /**
     * Обработчик изменения значения в фильтре 'Год'.
     */
    handleYearChange(selectedOption) {

        yearSelectedOption=selectedOption;
        // Фильтруем по году.
        const resultArray = this.props.result.filter(
            (item) => item.release_date.indexOf(selectedOption.value) !== -1
        );

        this.setState({
            year: selectedOption,
            result: resultArray
        });
    }

    /**
     * Обработчик изменения значения в поле 'Название фильма для поиска'.
     */
    handleSearchInputChange(event) {
        this.setState({
            searchInput: event.target.value
        });
    }

    /**
     * Обработчик нажатия на кнопку 'Поиск'.
     */
    handleSearchButtonClick() {
        // Для удобства выносим из стейта в отдельную переменную...
        //const searchInput = this.state.searchInput;


        //Решение

        // const resultArray = this.props.result.filter(
        //     (item) => ((item) => item.format.indexOf(formatSelectedOption.value) !== -1)&&
        //     (item.genre_ids.indexOf(genreSelectedOption.value) !== -1)&&
        //     (item.release_date.indexOf(yearSelectedOption.value) !== -1)
        // );

        // ...В ES6 появился специальный синтаксис: деструктуризация. Делаем тоже самое, что закоментированная строка выше.
        const  {searchInput}  = this.state;

        

        // Ajax запрос.

        this.props.getAllMovies(searchInput);
    }


    render() {
        return <Movie
        {...this.props}
        handleFormatChange={this.handleFormatChange}
        handleGenreChange={this.handleGenreChange}
        handleYearChange={this.handleYearChange}
        handleSearchInputChange={this.handleSearchInputChange}
        handleSearchButtonClick={this.handleSearchButtonClick}
    />
    }

}

let mapStateToProps=(state)=>{
     return{
        // format:state.movies.format,
        // genre:state.movies.genre,
        // year:state.movies.year,
        searchInput:state.movies.searchInput,
        result:state.movies.result
    }
};

export default compose(connect(mapStateToProps, {getAllMovies}
    ),
    withRouter
    )
    (MovieContainer);