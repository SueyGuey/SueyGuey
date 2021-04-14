import React, {Component} from 'react';
import resume from '../resume.pdf';

class Resume extends Component{
    render(){
        return (
            <embed src = {resume} type = "application/pdf" class = "resume"/>
        );
    }
}

export default Resume;