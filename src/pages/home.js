import React, {Component} from 'react';
import Picture from '../pic.jpg'

class Home extends Component{
    render(){
        return (
            <div class = "default">
                <div class = "profile">
                    <img src = {Picture}/>
                    <h4>Suhan Gui 桂素涵 (left)</h4>
                </div>
                <div class = "desc">
                    <h1>Introduction</h1>
                    <h3>Hello! I am a sophomore dual majoring in 
                        math and computer science. I am very passionate 
                        about working in computer science and have pursued 
                        projects outside of class both working alone and
                        in a group setting. I hope to turn my passion into
                        a profession.</h3>
                    <br/>
                    <h3>I am very excited to announce
                        that I will be a Engineering Development Group Intern
                        at MathWorks for the fall of 2021.</h3>
                </div>
            </div>
        );
    }
}

export default Home;