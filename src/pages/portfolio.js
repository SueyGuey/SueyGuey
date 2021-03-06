import React, {Component} from 'react';

class Portfolio extends Component{
    render(){
        return (
            <div class = "default">
                <h2 class = "big">Portfolio</h2>
                <h3>Github: <a href ="https://github.com/SueyGuey">https://github.com/SueyGuey</a></h3>
                <br/>
                <h3 class = "title">Soc!al</h3>
                <h4>Soc!al is an open source game made in the Rensselaer Center for Open Source. 
                    I am a part of the development team where I am currently in charge of front-end
                    development, specifically the survey system where we can get user input.
                </h4>
                <br/>
                <h4>Links: <a href = "https://github.com/omniaquaecumque/social">Github</a></h4>
                <br/>
                <h3 class = "title">RealPolitik</h3>
                <h4>This is a personal project of mine I have been working on since last summer. 
                    It news aggregator web-scraper that pulls foreign affairs news from several external
                     websites. Functionalities include: keyword searching, account creation, and commenting.
                      Made with Django, BS4, HTML, and CSS.</h4>
                <br/>
                <h4>Links: <a href ="https://therealpolitik.herokuapp.com">Website (undergoing bug fixes)</a>, 
                <a href = "https://github.com/SueyGuey/RealPolitik"> Github</a></h4>

                <br/>
                <h3 class = "title">Skills</h3>
                <h4>Languages: C++, C, Python, Java, JavaScript</h4>
                <h4>Frameworks: Django, React.js, JQuery</h4>
                <h4>Technologies: Git, Github, HTML, CSS, Eclipse, Xcode</h4>
                <h4>Other: Fluent in Chinese, Proficient in Spanish</h4>
            </div>
        );
    }
}

export default Portfolio;