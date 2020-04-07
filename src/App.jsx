import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import { ProtectedRoute } from "./auth/ProtectedRoute";


import Home from './views/Home'
import GenConditions from './views/GenConditions'

import SignIn from './views/admin/SignIn'
import SignUp from './views/admin/SignUp'
import AdminHome from './views/admin/AdminHome'
import AdminListContacts from './views/admin/AdminListContacts'
import AdminCreateContact from './views/admin/AdminCreateContact'
import AdminEditContact from './views/admin/AdminEditContact'
import AdminListLanguages from './views/admin/AdminListLanguages'
import AdminCreateLanguage from './views/admin/AdminCreateLanguage'
import AdminEditLanguage from './views/admin/AdminEditLanguage'


import NotFound from "./views/notFound"; 

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route path="/general-conditions/:id" component={GenConditions}/>
        <Route exact path="/home/:id" component={Home} />

        <Route path='/signin' component={SignIn}/>
        {/* <Route path='/signup' component={SignUp}/> */}
        <ProtectedRoute exact path='/admin' component={AdminHome}/>
        <ProtectedRoute path='/admin/list-contacts' component={AdminListContacts}/>
        <ProtectedRoute path='/admin/create-contact' component={AdminCreateContact}/>
        <ProtectedRoute path='/admin/edit-contact/:id' component={AdminEditContact}/>
        <ProtectedRoute path='/admin/list-languages' component={AdminListLanguages}/>
        <ProtectedRoute path='/admin/create-language' component={AdminCreateLanguage}/>
        <ProtectedRoute path='/admin/edit-language/:id' component={AdminEditLanguage}/>

        <Route path="*" component={NotFound} />

      </Switch>
    </React.Fragment>
  );
}

export default App;
