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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <html>
        <head>
          <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
        </head>
        <body>
          <div class = "header">
            <div class = "inside_header">
              <div class = "name">
                <a href = '/'><h1>Suhan Gui</h1></a>
              </div>
              <ul class = "nav">
                <a href = '/resume'><li>Resume</li></a>
                <a href = '/about'><li>About</li></a>
                <a href = '/education'><li>Education</li></a>
                <a href = '/portfolio'><li>Portfolio</li></a>
                <a href = '/contact'><li>Contact</li></a>
              </ul>
            </div>
          </div>
        </body>
      </html>
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/resume' exact component = {Resume}/>
        <Route path = '/about' exact component = {About}/>
        <Route path = '/education' exact component = {Education}/>
        <Route path = '/portfolio' exact component = {Portfolio}/>
        <Route path = '/contact' exact component = {Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
