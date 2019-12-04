import moviesReducer from "./movies-reducer";



let store={
    _state:{
        movies:{
            format: null,               // Начальное состояние для фильтра 'Формат'.
            genre: null,                // Начальное состояние для фильтра 'Жанр'.
            year: null,                 // Начальное состояние для фильтра 'Год'.
            searchInput: null,          // Начальное состояние для фильтра 'Поиск по названию фильму'.
            result: []                  // Список отображаемых фильмов.
        }
    },
    getState(){
      return this._state;
    },
    _rerenderEntireTree(){

    },

    subscribe(observer) {
        this._rerenderEntireTree=observer;
    },
    dispatch(action) {

        this._state.movies=moviesReducer(this._state.movies,action);

        this._rerenderEntireTree(this._state);

    }

};



window.store=store;

export default store;