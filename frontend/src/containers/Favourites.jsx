import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../reducks/favourites/selectors';
import { fetchFromLocalStorage } from '../reducks/favourites/operations';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FavCard from '../components/common/FavCard';
import Movie from '../components/common/Movie';

const Favourites = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const favourites = getFavourites(selector);
    console.log(favourites);
    useEffect(() => {
        dispatch(fetchFromLocalStorage());
    }, []);

    return (
        <>
            <Header />

            <div class="feature">
                <div className="heading">
                    <h2>Favorites</h2>
                </div>
                <div calss="favourite">
                    {favourites.length >0 && true? (<section class="coming-soon">
          
           { favourites.map(favourite =>(<FavCard favourite={favourite}/>))}
            </section> 
          ):(
            <p className='no_favourite'>No Favourite movies here yet...</p>
          )}      

                    {/* {favourites && favourites.map(favourite => <FavCard favourite={favourite} />)} */}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Favourites;
