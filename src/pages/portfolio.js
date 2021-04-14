import React, {Component} from 'react';

class Portfolio extends Component{
    render(){
        return (
            <div class = "default">
                <h1 class = "big">Portfolio</h1>
                <h2>Github: <a href ="https://github.com/SueyGuey">https://github.com/SueyGuey</a></h2>
                <br/>
                <h2 class = "title">Soc!al</h2>
                <h3>Soc!al is an open source game made in the Rensselaer Center for Open Source. 
                    I am a part of the development team where I am currently in charge of front-end
                    development, specifically the survey system where we can get user input.
                </h3>
                <br/>
                <h3>Links: <a href = "https://github.com/omniaquaecumque/social">Github</a></h3>
                <br/>
                <h2 class = "title">RealPolitik</h2>
                <h3>This is a personal project of mine I have been working on since last summer. 
                    It news aggregator web-scraper that pulls foreign affairs news from several external
                     websites. Functionalities include: keyword searching, account creation, and commenting.
                      Made with Django, BS4, HTML, and CSS</h3>
                <br/>
                <h3>Links: <a href ="https://therealpolitik.herokuapp.com">Website (undergoing bug fixes)</a>, 
                <a href = "https://github.com/SueyGuey/RealPolitik"> Github</a></h3>

                <br/>
                <h2 class = "title">Skills</h2>
                <h3>Languages: C++, C, Python, Java</h3>
                <h3>Frameworks: Django, React.js, JQuery</h3>
                <h3>Technologies: Git, Github, HTML, CSS, Eclipse, Xcode</h3>
                <h3>Other: Fluent in Chinese, Proficient in Spanish</h3>
            </div>
        );
    }
}

export default Portfolio;