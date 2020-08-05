import React ,{Fragment} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route }  from 'react-router-dom';

import NotFound from './components/layout/notFound';
import Home from './components/pages/home';
import Select from './components/pages/select';
import Login from './components/pages/login';
import Grant from './components/pages/grant';
import Success from './components/pages/success';

const App =() => {


return (
  	     <Fragment>
              <Router>
                     <Switch>  
                            <Route exact path="/" component={Home} /> 
                            <Route exact path="/select" component={Select} /> 
                            <Route exact path="/login" component={Login} /> 
                            <Route exact path="/grant" component={Grant} /> 
                            <Route exact path="/success" component={Success} /> 
                            <Route component={NotFound} />
                       </Switch>            
              </Router>
          </Fragment>
);
}

export default App;
