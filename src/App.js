import React, {Fragment, useState,useEffect}  from 'react';
import { BrowserRouter as Router,Switch,Route,Redirect}  from 'react-router-dom';
import {
   CSSTransition,
   TransitionGroup,
 } from 'react-transition-group';
import './App.scss';
import lazyComponentLoader from './HOC/LazyLoader';

import Navbar from './components/layout/navbar.jsx';
// import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Dashboard from "./components/dashboard/dashboard.jsx";
import Event from './components/event/event.jsx';
import Booking from './components/booking/booking.jsx';
import NotFound from './components/layout/notFound.jsx';
import PrivateRoute from './components/routing/privateRouteComponent';
import Modal from './components/modal/modal';
import Loader from './components/layout/loader';

const Login = lazyComponentLoader(() => import('./components/auth/login.jsx'));






const App = () => {   

   const [authIsReady,setAuthIsReady] = useState(false);

   useEffect(() => {
      setAuthIsReady(true);
      //eslint-disable-next-line
   },[]);

  
  if(authIsReady) {
      return (
            <Fragment>
                  <div className="container">
                     <Router>
                        <Navbar />
                        <Route render={({location}) => ( 
                              <TransitionGroup>
                              <CSSTransition key={location.key}
                                       timeout={300}
                                       className="fade" >
                                          <Switch>
                                             <Redirect from="/" to="/login" exact />
                                             <PrivateRoute exact path="/events" component={Event} /> 
                                             <PrivateRoute exact path="/bookings" component={Booking} /> 
                                             <PrivateRoute exact path="/dashboard" component={Dashboard} /> 
                                             <Route exact path="/register" component={Register} /> 
                                             <Route exact path="/login" component={Login} /> 
                                             <Route exact path="/modal" component={Modal} /> 
                                             <Route component={NotFound} />
                                          </Switch>
                              </CSSTransition>
                              </TransitionGroup> 
                        )} />                  
                     </Router>
               </div>
            </Fragment>
      );
  }else {
      return (
         <Fragment>
            <Loader />
         </Fragment>
      );
  }
}

export default App;
