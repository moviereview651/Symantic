

import React, { useEffect, useState } from 'react';

import API from '../API';
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Movie from '../components/common/Movie';
const api = new API();
const Category = () => {
      const [categoryAction, setCategoryAction] = useState(null);
    const [categoryComedy, setCategoryComedy] = useState(null);
    const [categoryDrama, setCategoryDrama] = useState(null);
    const [categoryHorror, setCategoryHorror] = useState(null);
    useEffect(() => {
      
        api.getMovies({ category_id: '1' })
            .then(movies => {
                setCategoryAction(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
            api.getMovies({ category_id: '3' })
            .then(movies => {
                setCategoryDrama(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ category_id: '2' })
            .then(movies => {
                setCategoryComedy(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });        
        api.getMovies({ category_id: '4' })
            .then(movies => {
                setCategoryHorror(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    }, []);

  return (
    <>
    <Header/>
        <div class="feature">
      <div class="heading">
        <h2>Action</h2></div>
        
          {categoryAction && categoryAction.results.length >0 ?
          (<section class="coming-soon">
            {categoryAction.results.map(movie =>(<Movie movie={movie}/>))}
            </section> 
          ):(
            <p>No movies here yet...</p>
          )}


           
      </div>
        <div class="feature">
      <hr class="line" />
      <div class="heading"><h2>Comedy</h2></div>
      {categoryComedy && categoryComedy.results.length >0 ?
          (<section class="coming-soon">
            {categoryComedy.results.map(movie =>(<Movie movie={movie}/>))}
            </section> 
          ):(
            <p className='no_favourite'>No movies here yet...</p>
          )}
      </div>
       <div class="feature">
      <hr class="line" />
      <div class="heading"><h2>Drama</h2></div>
      {categoryDrama && categoryDrama.results.length >0 ?
          (<section class="coming-soon">
            {categoryDrama.results.map(movie =>(<Movie movie={movie}/>))}
            </section> 
          ):(
            <p className='no_favourite'>No movies here yet...</p>
          )}</div>
          <div class="feature">
      <hr class="line" />
      <div class="heading"><h2>Horror</h2></div>
      {categoryHorror && categoryHorror.results.length >0 ?
          (<section class="coming-soon">
            {categoryHorror.results.map(movie =>(<Movie movie={movie}/>))}
            </section> 
          ):(
            <div ><p className='no_favourite'>No movies here yet...</p></div>
          )}</div>

    <Footer/>
    
    </>
  )
}

export default Category
