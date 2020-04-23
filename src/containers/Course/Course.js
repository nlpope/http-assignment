import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: "",
  };

  componentDidMount() {
    this.setTitle();
  }

  //source of infinite loop
  //on mount it updates, then it checks for update, then it checks f...
  componentDidUpdate() {
    this.setTitle();
  }

  //query params
  setTitle() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (this.state.courseTitle !== param[1]) {
        this.setState({ courseTitle: param[1] });
      }
      //   console.log(param);
    }
  }

  render() {
    return (
      <div>
        {console.log(this.props.match)}
        <h1>{this.state.courseTitle}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
