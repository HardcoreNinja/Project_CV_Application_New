import React, { Component } from 'react';
import './Preview.css';

export default class Preview extends Component {
    render() {
        const {
            first,
            last,
            title,
            street,
            apt,
            cityStateZip,
            email,
            phone,
            description,
        } = this.props.object.info;

        const work = this.props.object.work;
        const education = this.props.object.education;

        return (
            <div id='previewArea'>
                <div id='preview'>
                    <div id='header'>
                        <h1>{`${first} ${last}`}</h1>
                        <h2>{title}</h2>
                    </div>

                    <div id='body'>
                        <label htmlFor='description'>
                            Description:
                            <hr />
                            <br />
                            <p name='description'>{description}</p>
                        </label>

                        <label htmlFor='experience'>
                            Experience:
                            <hr />
                            <br />
                            <p name='experience'>{work}</p>
                        </label>

                        <label htmlFor='education'>
                            Education:
                            <hr />
                            <br />
                            <p name='education'>{education}</p>
                        </label>
                    </div>

                    <div id='personal'>
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>


                        <div id="personalInfo">
                            <hr />
                            <label htmlFor='address'>
                                Address:
                                <p name='address'>{street}</p>
                                <p name='address'>{apt}</p>
                                <p name='address'>{cityStateZip}</p>
                            </label>

                            <label htmlFor='email'>
                                Email:
                                <p name='email'>{email}</p>
                            </label>

                            <label htmlFor='phon'>
                                Phone:
                                <p name='phone'>{phone}</p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}