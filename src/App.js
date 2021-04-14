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
                <a href = "/PersonalWebsite/"><h1>Suhan Gui</h1></a>
              </div>
              <ul class = "nav">
                <a href = "/PersonalWebsite/resume"><li>Resume</li></a>
                <a href = "/PersonalWebsite/about"><li>About</li></a>
                <a href = "/PersonalWebsite/education"><li>Education</li></a>
                <a href = "/PersonalWebsite/portfolio"><li>Portfolio</li></a>
                <a href = "/PersonalWebsite/contact"><li>Contact</li></a>
              </ul>
            </div>
          </div>
        </body>
      </html>
      <Switch>
        <Route path = "/PersonalWebsite/" exact component = {Home}/>
        <Route path = "/PersonalWebsite/resume" exact component = {Resume}/>
        <Route path = "/PersonalWebsite/about" exact component = {About}/>
        <Route path = "/PersonalWebsite/education" exact component = {Education}/>
        <Route path = "/PersonalWebsite/portfolio" exact component = {Portfolio}/>
        <Route path = "/PersonalWebsite/contact" exact component = {Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
