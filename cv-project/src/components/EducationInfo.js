import React, { Component } from 'react';
import './EducationInfo.css'

export default class EducationInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            school: '',
            major: '',
            start: '',
            end: '',
        }
    }

    setSchool = (e) => {
        this.setState(
            {
                school: e.target.value,
            }
        )
    }

    setMajor = (e) => {
        this.setState(
            {
                major: e.target.value,
            }
        )
    }

    setStart = (e) => {
        this.setState(
            {
                start: e.target.value,
            }
        )
    }

    setEnd = (e) => {
        this.setState(
            {
                end: e.target.value,
            }
        )
    }

    submit = (e) => {
        e.preventDefault();

        this.props.setEducation(
            this.state.school,
            this.state.major,
            this.state.start,
            this.state.end,
        );
    }

    pop = (e) => {
        e.preventDefault();
        this.props.popEducation();
    }

    render() {
        return (
            <form id='educationInfo' onSubmit={this.submit}>
                <h1>Education Info</h1>
                <label htmlFor='school' id='school'>
                    School:
                    <input
                        type='text'
                        name='school'
                        onChange={this.setSchool}
                        placeholder='University of Chicago'
                        value={this.state.school}
                    />
                </label>

                <label htmlFor='major' id='major'>
                    Major:
                    <input
                        type='text'
                        name='major'
                        onChange={this.setMajor}
                        placeholder='BS in Computer Science'
                        value={this.state.major}
                    />
                </label>

                <label htmlFor='start' id='start'>
                    Start:
                    <input
                        type='text'
                        name='start'
                        onChange={this.setStart}
                        placeholder='Jan 2020'
                        value={this.state.start}
                    />
                </label>

                <label htmlFor='end' id='end'>
                    End:
                    <input
                        name='end'
                        onChange={this.setEnd}
                        placeholder='Feb 2024'
                        value={this.state.end}
                    />
                </label>
                <button type='submit'>Add</button>
                <button type='button' onClick={this.pop}>Pop</button>
            </form>
        );
    }
}