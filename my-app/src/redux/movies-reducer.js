import {moviesAPI} from "../api/api";

const SET_MOVIES = 'SET_MOVIES';

let initialState={
  format: null,               // Начальное состояние для фильтра 'Формат'.
  genre: null,                // Начальное состояние для фильтра 'Жанр'.
  year: null,                 // Начальное состояние для фильтра 'Год'.
  searchInput: null,          // Начальное состояние для фильтра 'Поиск по названию фильму'.
  result: []                  // Список отображаемых фильмов.
};

const moviesReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SET_MOVIES: {
         console.log(action.result);
            return {
                ...state,
                result:action.result,
            };
        }
        default:
            return state;
    }
    }

    export const setMovies = (result)=> ({ type: SET_MOVIES,result});


    export const getAllMovies = (searchInput)=> {
     return (dispatch)=> {

      moviesAPI.getMovies(searchInput)
      .then(data => {
          dispatch(setMovies(data.results));
      });
  }

    }

    export default moviesReducer;