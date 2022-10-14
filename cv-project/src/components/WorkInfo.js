import React, { Component } from "react";
import './WorkInfo.css'

export default class WorkInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: '',
            company: '',
            end: '',
            position: '',
        }
    }

    setCompany = (e) => {
        this.setState(
            {
                company: e.target.value,
            }
        );
    }

    setPosition = (e) => {
        this.setState(
            {
                position: e.target.value,
            }
        );
    }

    setStart = (e) => {
        this.setState(
            {
                start: e.target.value,
            }
        );
    }

    setEnd = (e) => {
        this.setState(
            {
                end: e.target.value,
            }
        );
    }

    submit = (e) => {
        e.preventDefault();
        this.props.setWork(
            this.state.company,
            this.state.position,
            this.state.start,
            this.state.end
        )
    }

    pop = (e) => {
        e.preventDefault();
        this.props.popWork();
    }

    render() {
        return (
            <form id='workInfo' onSubmit={this.submit}>
                <h1>Work Info</h1>

                <label htmlFor='company' id='company'>
                    Company:
                    <input
                        type='text'
                        name='company'
                        onChange={this.setCompany}
                        placeholder='Company LLC'
                        value={this.state.company}
                    />
                </label>

                <label htmlFor='position' id='position'>
                    Position:
                    <input
                        type='text'
                        name='position'
                        onChange={this.setPosition}
                        placeholder='Project Manager'
                        value={this.state.position}
                    />
                </label>

                <label htmlFor='start' id='start'>
                    Start:
                    <input
                        type='text'
                        name='start'
                        onChange={this.setStart}
                        placeholder='Sept 2020'
                        value={this.state.start}
                    />
                </label>

                <label htmlFor='end' id='end'>
                    End:
                    <input
                        name='end'
                        onChange={this.setEnd}
                        placeholder='March 2024'
                        value={this.state.end}
                    />
                </label>
                <button type='submit'>Add</button>
                <button type='button' onClick={this.pop}>Pop</button>
            </form>
        );
    }
}