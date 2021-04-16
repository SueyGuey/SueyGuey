import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Education from './pages/education';
import About from './pages/about';
import Resume from './pages/resume';

function App() {
  return (
    <BrowserRouter>
      <html>
        <head>
          <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
        </head>
        <body>
          <div class = "header">
            <div class = "inside_header">
              <div class = "name">
                <a href = {process.env.PUBLIC_URL + '/PersonalWebsite/'}><h1>Suhan Gui</h1></a>
              </div>
              <ul class = "nav">
                <a href = {process.env.PUBLIC_URL + '/PersonalWebsite/resume'}><li>Resume</li></a>
                <a href = {process.env.PUBLIC_URL + '/PersonalWebsite/about'}><li>About</li></a>
                <a href = {process.env.PUBLIC_URL + '/PersonalWebsite/education'}><li>Education</li></a>
                <a href = {process.env.PUBLIC_URL + '/PersonalWebsite/portfolio'}><li>Portfolio</li></a>
                <a href = {process.env.PUBLIC_URL + '/PersonalWebsite/contact'}><li>Contact</li></a>
              </ul>
            </div>
          </div>
        </body>
      </html>
      <Switch>
        <Route path = {process.env.PUBLIC_URL + '/PersonalWebsite/'} exact component = {Home}/>
        <Route path = {process.env.PUBLIC_URL + '/PersonalWebsite/resume'} exact component = {Resume}/>
        <Route path = {process.env.PUBLIC_URL + '/PersonalWebsite/about'} exact component = {About}/>
        <Route path = {process.env.PUBLIC_URL + '/PersonalWebsite/education'} exact component = {Education}/>
        <Route path = {process.env.PUBLIC_URL + '/PersonalWebsite/portfolio'} exact component = {Portfolio}/>
        <Route path = {process.env.PUBLIC_URL + '/PersonalWebsite/contact'} exact component = {Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
