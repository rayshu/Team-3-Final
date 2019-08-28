import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import RequestListView from './RequestListView';
import Download from './myComponents/Download';
import Form from './myComponents/Form';
import Container from './Container';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import AdminPage from './AdminPage';
import Login from './Login';
import App2 from './App2';
import Login2 from './Login2';


const routing = (
    <BrowserRouter>
        <Route exact path="/home" component={ RequestListView } />
        <Route path="/track" component={ App }/>
        <Route path="/newRequest" component={ Download }/>
        <Route path="/form" component={ Form }/>
         <Route exact path="/" component={App2} />
        <Route path="/Signup" component={Signup} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route path="/AdminPage" component={AdminPage} />
        <Route exact path="/Login" component={Login2} />
        <Route path="/Dashboard" component={Container} />
        {/* <Route path="/download_form" component={  } */}
    </BrowserRouter>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
