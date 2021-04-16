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
                <a href = {process.env.PUBLIC_URL + '/'}><h1>BIG CHUNGUS</h1></a>
              </div>
              <ul class = "nav">
                <a href = {process.env.PUBLIC_URL + '/resume'}><li>Resume</li></a>
                <a href = {process.env.PUBLIC_URL + '/about'}><li>About</li></a>
                <a href = {process.env.PUBLIC_URL + '/education'}><li>Education</li></a>
                <a href = {process.env.PUBLIC_URL + '/portfolio'}><li>Portfolio</li></a>
                <a href = {process.env.PUBLIC_URL + '/contact'}><li>Contact</li></a>
              </ul>
            </div>
          </div>
        </body>
      </html>
      <Switch>
        <Route path = {process.env.PUBLIC_URL + '/'} exact component = {Home}/>
        <Route path = {process.env.PUBLIC_URL + '/resume'} exact component = {Resume}/>
        <Route path = {process.env.PUBLIC_URL + '/about'} exact component = {About}/>
        <Route path = {process.env.PUBLIC_URL + '/education'} exact component = {Education}/>
        <Route path = {process.env.PUBLIC_URL + '/portfolio'} exact component = {Portfolio}/>
        <Route path = {process.env.PUBLIC_URL + '/contact'} exact component = {Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
