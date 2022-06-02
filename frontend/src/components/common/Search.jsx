import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { getMovies } from '../../reducks/movies/selectors';
import { fetchMovies } from '../../reducks/movies/operations';
import Header from './Header';
import Footer from './Footer';
import Movie from './Movie';

const Search = () => {
    const parsed = queryString.parse(window.location.search);
    console.log('the parsed value is :', parsed);
    const [search, setSearch] = useState(null);

    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const movies = getMovies(selector);
    console.log('the parsed search is :', parsed.search);

    useEffect(() => {
        if (parsed.search !== undefined) {
            setSearch(parsed.search);
        }

        if (search != null) {
            let params = { search: search };
            console.log('after parsed search is :', parsed.search);

            console.log('the params is : ', params);
            dispatch(fetchMovies(params));
        }
    }, [search]);

    return (
        <>
            <Header />
            <div class=" search">
            <div class="feature">
                <div class="heading">
                    <h2>Search</h2>
                </div>
                <section class="coming-soon">
                    {movies.results.map(movie => (
                        <Movie movie={movie} />
                    ))}
                </section>
            </div></div>
            <Footer />
        </>
    );
};

export default Search;
