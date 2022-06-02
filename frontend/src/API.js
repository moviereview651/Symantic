import axios from 'axios';

var baseURL;
 baseURL = 'http://127.0.0.1:8000';
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = 'https://movie-review1-backend.herokuapp.com';
// }
// baseURL = 'https://sajid-symantic-backend.herokuapp.com/'; https://movie-review1-backend.herokuapp.com/
//http://127.0.0.1:8000
const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default class API {
    getMovies = async params => {
        // the params is {release_type: 'Coming Soon'}
        
        let url = '/movies/'; //   the urls is : /movies/
        let query = new URLSearchParams(); //the query is an object of URLSearchParams {} that has the method of append

        for (const key in params) {
            //the key is : release_type
            if (params[key] != null) {
                query.append(key, params[key]); // the query is append : release_type=Coming Soon
            }
        }

        if (query.toString() != '') {
            // the url is release_type=Coming+Soon
            //the urls is : /movies/

            url += '?' + query.toString(); //the url is /movies/?release_type=Coming+Soon
        }
        const places = await api
            .get(url)
            .then(response => {
                console.log(response.data);
                //the url is   /movies/?release_type=Coming+Soon
                console.log('what is response :', response.data);

                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
             // places = responss.data it has all the info of object. id , name , image
        return places;
    };
}
