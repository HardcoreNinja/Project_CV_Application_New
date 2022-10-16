import React, { Component } from 'react';
import './WorkSpace.css';
import Input from './Input';
import Preview from './Preview'
import Image from '../resources/images/avatar.svg'

export default class WorkSpace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {
                first: 'John',
                last: 'Smith',
                title: 'Project Manager',
                photoURL: Image,
                street: '5555 Madeup Lane',
                apt: '#12',
                cityStateZip: 'Boston, MA 02115',
                email: 'fakeEmail@email.com',
                phone: '+1 (555) 555-5555',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            work: [[<div id='item' key='0'>
                <p id='startDate'>Sept 2020</p>
                <p id='companySchool'>Company, LLC</p>
                <p id='endDate'>March 2024</p>
                <p id='majorPosition'>PM</p>
                <br />
            </div>]],
            education: [[<div id='item' key='0'>
                <p id='startDate'>Jan 2020</p>
                <p id='companySchool'>Northeastern</p>
                <p id='endDate'>Feb 2024</p>
                <p id='majorPosition'>BA in Music</p>
                <br />
            </div>]],
        }
    }

    setInfo = (
        first,
        last,
        title,
        photoURL,
        street,
        apt,
        cityStateZip,
        email,
        phone,
        description) => {
        this.setState(
            {
                info: {
                    first: first,
                    last: last,
                    title: title,
                    photoURL: photoURL,
                    street: street,
                    apt: apt,
                    cityStateZip: cityStateZip,
                    email: email,
                    phone: phone,
                    description: description,
                }
            }
        )

    }

    setWork = (
        company,
        position,
        start,
        end
    ) => {
        this.setState(
            {
                work: this.state.work.concat([
                    <div id='item'>
                        <p id='startDate'>{start}</p>
                        <p id='companySchool'>{company}</p>
                        <p id='endDate'>{end}</p>
                        <p id='majorPosition'>{position}</p>
                        <br />
                    </div>
                ]),
            }
        )

    }

    popWork = () => {
        this.setState(
            {
                work: this.state.work.splice(0, this.state.work.length - 1)
            }
        );
    }

    setEducation = (
        school,
        major,
        start,
        end
    ) => {
        this.setState(
            {
                education: this.state.education.concat([
                    <div id='item'>
                        <p id='startDate'>{start}</p>
                        <p id='companySchool'>{school}</p>
                        <p id='endDate'>{end}</p>
                        <p id='majorPosition'>{major}</p>
                        <br />
                    </div>
                ]),
            }
        )

    }

    popEducation = () => {
        this.setState(
            {
                education: this.state.education.splice(0, this.state.education.length - 1)
            }
        );
    }

    render() {
        return (
            <div id='workspace'>
                <Input
                    setInfo={this.setInfo}
                    setWork={this.setWork}
                    popWork={this.popWork}
                    setEducation={this.setEducation}
                    popEducation={this.popEducation}
                />
                <Preview object={this.state} />
            </div>
        );
    }
}