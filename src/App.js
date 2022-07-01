import React, { Component } from 'react'
import CourseForm from './Components/CourseForm'
import CourseList from './Components/CourseList'

class App extends Component() {

  state = {
    Courses: [
      { name: 'JavaScript' }, 
      { name: 'Python' },
      { name: 'Django' }
    ],
    current: '',
// هذا المتغير ال هنقوم بحفظ القيمة التى سيتم ادخالها من طرف ال input
    
  }
  // UpdateCourse
  updateCourse = (e) => {
    e.preventDefault();
    this.setState({
      current: e.target.value

    })
  }

  //deleteCourse
  deleteCourse = (index) => {
    let Courses = this.state.Courses;
    Courses.splice(index, 1);
    this.setState({
      Courses: Courses
    })

  }

  editCourse = (index, value) => {
    const Courses = this.state.Courses;
    let Course = Courses[index];
    Course.name = value;
    this.setState({
      Courses: Courses
    })

  }
  // AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = e.target.value;
    let Courses = this.state.Courses;
    Courses.push({ name: current });
    this.setState({
      Courses: Courses,
      current: ''
    })
  }


  render() {
    const { Courses } = this.state;
    const Courselist = Courses.map((Course, index) => {
      return <CourseList details={Course} key={index} index={index} deleteCourse={this.deleteCourse} />
    })
    return (
      <div>
        <h2>Curd App Maher Mostafa</h2>

        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} editCourse={this.editCourse} />
        <ul>{Courselist}</ul>


      </div>
    );
  }
}

export default App;
