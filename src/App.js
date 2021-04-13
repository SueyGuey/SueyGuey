import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';

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
                <a href = "/"><h1>Suhan Gui</h1></a>
              </div>
              <ul class = "nav">
                <a><li>Resume</li></a>
                <a><li>About</li></a>
                <a><li>Education</li></a>
                <a><li>Portfolio</li></a>
                <a><li>Contact</li></a>
              </ul>
            </div>
          </div>
        </body>
      </html>
      <Switch>
        <Route path = "/" exact component = {Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
