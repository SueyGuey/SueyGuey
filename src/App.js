import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
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
                <Link to = '/'><h1>Suhan Gui</h1></Link>
              </div>
              <ul class = "nav">
                <Link to = '/resume'><li>Resume</li></Link>
                <Link to = '/about'><li>About</li></Link>
                <Link to = '/education'><li>Education</li></Link>
                <Link to = '/portfolio'><li>Portfolio</li></Link>
                <Link to = '/contact'><li>Contact</li></Link>
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
