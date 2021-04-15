import React, {Component} from 'react';

class Education extends Component{
    render(){
        return (
            <div class = "default">
                <h1 class = "big">Education</h1>
                <h2>Rensselaer Polytechnic Instute | Troy, NY</h2>
                <h4>Bachelor's of Science in Mathmatics and Computer Science</h4>
                <h4>August 2019 - May 2023 (Projected)</h4>
                <h4>GPA: 3.88</h4>
                <br/>
                <h3 class = "underline">Selected Coursework</h3>
                <div class = "classes">
                    <div class = "cs">
                        <h4 class = "underline">Computer Science</h4>
                        <h4>Introduction to Algorithms</h4>
                        <h4>Principles of Software</h4>
                        <h4>Foundations of Computer Science</h4>
                        <h4>Computer Organization</h4>
                        <h4>Data Structures</h4>
                        <h4>Computer Science 1</h4>
                    </div>
                    <div class = "math">
                        <h4 class = "underline">Mathematics</h4>
                        <h4>Graph Theory</h4>
                        <h4>Introduction to Differential Equations</h4>
                        <h4>Multivariable Calculus and Matrix Algebra</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;