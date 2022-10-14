import React, { Component } from 'react'
import './Input.css'
import ContactInfo from './ContactInfo'
import WorkInfo from './WorkInfo'
import EducationInfo from './EducationInfo'

export default class Input extends Component {
    render() {

        return (
            <div id='input'>
                <ContactInfo setInfo={this.props.setInfo} />
                <WorkInfo setWork={this.props.setWork} popWork={this.props.popWork} />
                <EducationInfo setEducation={this.props.setEducation} popEducation={this.props.popEducation} />
            </div>
        )
    }
}