import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: null,
            password: null,
            error: null
        }
    }
    handleSubmit() {
        let data = {
            'username': this.state.userName,
            'password': this.state.password
        }
        axios.post('http://localhost:5000/login', data)
            .then(res => { res.data === 0 ? this.setState({ error: res.data }) : this.props.history.push('/') })
    }
    handleUserName(e) {
        this.setState({ userName: e.target.value })
        e.preventDefault();
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
        e.preventDefault();
    }
    componentDidUpdate() {
        { this.state.error ? alert('Error') : null }
    }
    render() {
        return (
            <div role="tabpanel" class="tab-pane fade active show" id="ms-login-tab">
                <form>
                    <fieldset>
                        <div class="form-group label-floating">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="zmdi zmdi-account"></i>
                                </span>
                                <label class="control-label" for="ms-form-user">Username</label>
                                <input type="text" id="ms-form-user" class="form-control" /> </div>
                        </div>
                        <div class="form-group label-floating">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="zmdi zmdi-lock"></i>
                                </span>
                                <label class="control-label" for="ms-form-pass">Password</label>
                                <input type="password" id="ms-form-pass" class="form-control" /> </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-5">
                                <div class="form-group mt-1">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" /> Remember </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-7">
                                <button class="btn btn-raised btn-primary pull-right">Login</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <div class="text-center">
                    <h3>Login with</h3>
                    <a href="javascript:void(0)" class="wave-effect-light btn btn-raised btn-facebook">
                        <i class="zmdi zmdi-facebook"></i> Facebook</a>
                    <a href="javascript:void(0)" class="wave-effect-light btn btn-raised btn-twitter">
                        <i class="zmdi zmdi-twitter"></i> Twitter</a>
                    <a href="javascript:void(0)" class="wave-effect-light btn btn-raised btn-google">
                        <i class="zmdi zmdi-google"></i> Google</a>
                </div>
            </div>
        );
    }
}

export default Login;