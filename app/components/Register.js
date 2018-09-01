import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import SideBar from './SideBar';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            userName: null,
            password: null,
            confirmpassword: null,
            error: null
        }
    }
    handleSubmit() {
        if (this.state.password !== this.state.confirmpassword) {
            alert('Passwords do not match!')
            return;
        }
        let data = {
            'username': this.state.userName,
            'email': this.state.userName,
            'password': this.state.password
        }
        axios.post('http://localhost:5000/register', data)
            .then(res => { res.data === 0 ? this.setState({ error: 'User already exists.' }) : this.props.push('/') })
    }
    handleUserName(e) {
        this.errorHandler.bind(this);
        this.setState({ userName: e.target.value })
        e.preventDefault();
    }
    handlePassword(e) {
        this.errorHandler.bind(this);
        this.setState({ password: e.target.value })
        e.preventDefault();
    }
    handleConfirmPassword(e) {
        this.errorHandler.bind(this);
        this.setState({ confirmpassword: e.target.value })
        e.preventDefault();
    }
    errorHandler() {
        this.setState({ error: null });
    }
    componentDidUpdate() {
        { this.state.error ? alert(this.state.error) : null }
    }
    render() {
        return (
            <div role="tabpanel" class="tab-pane fade" id="ms-register-tab">
                <form>
                    <fieldset>
                        <div class="form-group label-floating">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="zmdi zmdi-account"></i>
                                </span>
                                <label class="control-label" for="ms-form-user-r">Username</label>
                                <input type="text" id="ms-form-user-r" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group label-floating">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="zmdi zmdi-email"></i>
                                </span>
                                <label class="control-label" for="ms-form-email-r">Email</label>
                                <input type="email" id="ms-form-email-r" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group label-floating">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="zmdi zmdi-lock"></i>
                                </span>
                                <label class="control-label" for="ms-form-pass-r">Password</label>
                                <input type="password" id="ms-form-pass-r" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group label-floating">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="zmdi zmdi-lock"></i>
                                </span>
                                <label class="control-label" for="ms-form-pass-retype">Re-type Password</label>
                                <input type="password" id="ms-form-pass-retype" class="form-control" />
                            </div>
                        </div>
                        <button class="btn btn-raised btn-block btn-primary">Register Now</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Register;