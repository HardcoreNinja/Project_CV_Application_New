import React, { Component } from "react";
import './ContactInfo.css'

export default class ContactInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first: '',
            last: '',
            title: '',
            street: '',
            apt: '',
            cityStateZip: '',
            email: '',
            phone: '',
            description: '',
        }
    }
    setFirst = (e) => {
        this.setState(
            {
                first: e.target.value,
            }
        )
    }

    setLast = (e) => {
        this.setState(
            {
                last: e.target.value,
            }
        )
    }

    setTitle = (e) => {
        this.setState(
            {
                title: e.target.value,
            }
        )
    }

    setStreet = (e) => {
        this.setState(
            {
                street: e.target.value,
            }
        )
    }

    setApt = (e) => {
        this.setState(
            {
                apt: e.target.value,
            }
        )
    }

    setCityStateZip = (e) => {
        this.setState(
            {
                cityStateZip: e.target.value,
            }
        )
    }

    setEmail = (e) => {
        this.setState(
            {
                email: e.target.value,
            }
        )
    }

    setPhone = (e) => {
        this.setState(
            {
                phone: e.target.value,
            }
        )
    }

    setDescription = (e) => {
        this.setState(
            {
                description: e.target.value,
            }
        )
    }

    submit = (e) => {
        e.preventDefault();
        this.props.setInfo(
            this.state.first,
            this.state.last,
            this.state.title,
            this.state.street,
            this.state.apt,
            this.state.cityStateZip,
            this.state.email,
            this.state.phone,
            this.state.description
        );
    }

    render() {
        return (
            <form id='contactInfo' onSubmit={this.submit}>
                <h1>Contact Info</h1>

                <label htmlFor='first' id='first'>
                    First:
                    <input
                        type='text'
                        name='first'
                        onChange={this.setFirst}
                        placeholder='John'
                        value={this.state.first}
                    />
                </label>

                <label htmlFor='last' id='last'>
                    Last:
                    <input
                        type='text'
                        name='last'
                        onChange={this.setLast}
                        placeholder='Smith'
                        value={this.state.last}
                    />
                </label>

                <label htmlFor='title' id='title'>
                    Title:
                    <input
                        type='text'
                        name='title'
                        onChange={this.setTitle}
                        placeholder='Project Manager'
                        value={this.state.title}
                    />
                </label>

                <label htmlFor='street' id='street'>
                    Street:
                    <input
                        type='text'
                        name='street'
                        onChange={this.setStreet}
                        placeholder='5555 Madeup Lane'
                        value={this.state.street}
                    />
                </label>

                <label htmlFor='apt' id='apt'>
                    Apt:
                    <input
                        type='text'
                        name='apt'
                        onChange={this.setApt}
                        placeholder='#12'
                        value={this.state.apt}
                    />
                </label>

                <label htmlFor='cityStateZip' id='cityStateZip'>
                    City State Zip:
                    <input
                        type='text'
                        name='cityStateZip'
                        onChange={this.setCityStateZip}
                        placeholder='Boston, MA 02115'
                        value={this.state.cityStateZip}
                    />
                </label>

                <label htmlFor='email' id='email'>
                    Email:
                    <input
                        type='text'
                        name='email'
                        onChange={this.setEmail}
                        placeholder='fakeEmail@email.com'
                        value={this.state.email}
                    />
                </label>

                <label htmlFor='phone' id='phone'>
                    Phone:
                    <input
                        type='text'
                        name='phone'
                        onChange={this.setPhone}
                        placeholder='+1 (555) 555-5555'
                        value={this.state.phone}
                    />
                </label>

                <label htmlFor='description' id='description'>
                    Description:
                    <textarea
                        name='description'
                        onChange={this.setDescription}
                        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        value={this.state.description}
                    />
                </label>

                <button type='submit'>Update</button>
            </form>
        )
    }
}