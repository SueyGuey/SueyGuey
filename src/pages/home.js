import React, {Component} from 'react';
import Picture from '../pic.jpg'

class Home extends Component{
    render(){
        return (
            <div class = "home">
                <div class = "profile">
                    <img src = {Picture}/>
                    <h3>Suhan Gui 桂素涵 (left)</h3>
                </div>
                <div class = "desc">
                    <h1>Introduction</h1>
                    <h2>Hello! I am a sophomore dual majoring in 
                        math and computer science. I am very passionate 
                        about working on computer science and have pursued 
                        projects outside of class both working alone and
                        in a group setting. I hope to turn my passion into
                        a profession eventually. Right now on my journey, 
                        I am looking for opportunities where I can apply
                         my wide range of skills and experiences.</h2>
                </div>
            </div>
        );
    }
}

export default Home;