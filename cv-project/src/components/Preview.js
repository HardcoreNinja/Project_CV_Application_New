import React, { Component } from 'react';
import './Preview.css';

export default class Preview extends Component {

    getListItems = (array) => {
        const listItems = array.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );

        return listItems;
    }
    render() {
        const {
            first,
            last,
            title,
            street,
            photoURL,
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
                            <ul name='experience'>{this.getListItems(work)}</ul>
                        </label>

                        <label htmlFor='education'>
                            Education:
                            <hr />
                            <br />
                            <ul name='education'>{this.getListItems(education)}</ul>
                        </label>
                    </div>

                    <div id='personal'>
                        <img src={photoURL} />

                        <div id="personalInfo">
                            <hr />
                            <label htmlFor='address'>
                                Address:
                                <ul>
                                    <li name='address' key='street'>{street}</li >
                                    <li name='address' key='apt'>{apt}</li >
                                    <li name='address' key='cityStateZip'>{cityStateZip}</li>
                                </ul>
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