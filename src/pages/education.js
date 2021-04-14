import React, {Component} from 'react';

class Education extends Component{
    render(){
        return (
            <div class = "default">
                <h1 class = "big">Education</h1>
                <h1>Rensselaer Polytechnic Instute | Troy, NY</h1>
                <h3>Bachelor's of Science in Mathmatics and Computer Science</h3>
                <h3>August 2019 - May 2023 (Projected)</h3>
                <h3>GPA: 3.88</h3>
                <br/>
                <h2 class = "underline">Selected Coursework</h2>
                <div class = "classes">
                    <div class = "cs">
                        <h3 class = "underline">Computer Science</h3>
                        <h3>Introduction to Algorithms</h3>
                        <h3>Principles of Software</h3>
                        <h3>Foundations of Computer Science</h3>
                        <h3>Computer Organization</h3>
                        <h3>Data Structures</h3>
                        <h3>Computer Science 1</h3>
                    </div>
                    <div class = "math">
                        <h3 class = "underline">Mathematics</h3>
                        <h3>Graph Theory</h3>
                        <h3>Introduction to Differential Equations</h3>
                        <h3>Multivariable Calculus and Matrix Algebra</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;