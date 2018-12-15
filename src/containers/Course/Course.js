import React, { Component } from 'react';

class Course extends Component {
    render () {
        console.log(this.props.match.params);
        return (
            <div>
                <h1>COURSE_TITLE: {this.props.match.params.title}</h1>
                <p>You selected the Course with ID:  {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;