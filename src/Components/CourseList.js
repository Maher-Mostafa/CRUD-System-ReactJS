import React, { Component, Fragment } from 'react'


class CourseList extends Component {

    state = { 
        isEdit : false 
    }

    toggleState = () => { 
        let {isEdit} = this.state ;
        this.setState({
            isEdit : !isEdit 
        })
    }

    renderCourse = () => {
        <li>
            <span>{this.props.details.name}</span>
            {/* Make Invoke to Function */}
            <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            <button onClick={this.toggleState}>Edit Course</button>
        </li>
    }

    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value ) ; // Take input.value from ref = {(v)=>{this.inputs=v}}
        this.toggleState();
    }
    // الدالتين مرتبطين ببعضهم البعض 
    renderUpdateForm = () =>  {
        return(
            <form>
                <input type='text' ref={(v) => {this.input=v}} ></input>
                <button onClick={this.props.addCourse()}></button>
            </form>
        )
}

render(){
    let {isEdit} = this.state;
    return (
        <Fragment>

            { isEdit ? this.renderUpdateForm : this.renderCourse }

        </Fragment >
    );
}

}


export default CourseList