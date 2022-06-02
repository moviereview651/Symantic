import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Category from './containers/Category';
import Search from './components/common/Search';
import Favourites from './containers/Favourites';
import Header from './components/common/Header';
import PageNotFound from './containers/PageNotFound';
import './assets/style.css';
function App() {
      return (
        <>
        {/* <Header/> */}
            <Switch>            
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/favourites'} component={Favourites} />
                <Route exact path={'/search'} component={Search} />
                <Route exact path={'/category'} component={Category} />
                <Route component={PageNotFound}/>
            </Switch>
        </>
    );
    
}

export default App;
 