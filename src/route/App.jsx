import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import BookDetails from '../pages/BookDetails'
import Contact from '../pages/Contact'
import CreateAd from '../pages/CreateAd'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import SearchPage from '../pages/SearchPage'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'


import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App() {
    return(
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path = '/'component={Home} />
            <Route path = '/bookdetails'component={BookDetails} />
            <Route path = '/contact'component={Contact} />
            <Route path = '/createad'component={CreateAd} />
            <Route path = '/faq'component={Faq} />
            <Route path = '/profile'component={Profile} />
            <Route path = '/searchpage'component={SearchPage} />
            <Route path = '/signin'component={SignIn} />
            <Route path = '/signup'component={SignUp} />
          </Switch>
        <Footer/>
      </BrowserRouter>
    )
}