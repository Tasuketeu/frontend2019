import * as axios from "axios";

const API_KEY="37662c76ffc19e5cd1b95f37d77155fc";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/search/"
}
);

export const moviesAPI={
    getMovies(searchInput) {

        return instance.get(`movie?api_key=${API_KEY}&language=ru-RU&query=${searchInput}&page=1&include_adult=false`)
            .then(response=>{
                return response.data;
            })
            .catch((error) => {
             console.log('Что-то пошло не так, а именно ' + error.message);
         });
    }
}

// axios.get(`https://api.themoviedb.org/3/search/`)
// // В then передаём функцию, которую необходимо выполнить после того, как сервер вернёт ответ.    
// .then((response) => {
//     this.setState({
//         result: response.data.results
//     });
// })


