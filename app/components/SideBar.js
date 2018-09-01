import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            username: null
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/getUserName')
            .then(res => {
                this.setState({ username: res.data })
            })
    }
    render() {
        return (
            <div id="left-sidebar" class="sidebar">
                <div class="sidebar-scroll">
                    <div class="user-account">
                        <img src="/public/src/assets/img/user.png" class="rounded-circle user-photo" alt="User Profile Picture" />
                        <div class="dropdown">
                            <span>Welcome,</span>
                            <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong>Alizee Thomas</strong></a>
                            <ul class="dropdown-menu dropdown-menu-right account">
                                <li><a href="page-profile2.html"><i class="icon-user"></i>My Profile</a></li>
                                <li><a href="app-inbox.html"><i class="icon-envelope-open"></i>Messages</a></li>
                                <li><a href="javascript:void(0);"><i class="icon-settings"></i>Settings</a></li>
                                <li class="divider"></li>
                                <li><a href="page-login.html"><i class="icon-power"></i>Logout</a></li>
                            </ul>
                        </div>
                        <hr />
                        <ul class="row list-unstyled">
                            <li class="col-4">
                                <small>Sales</small>
                                <h6>456</h6>
                            </li>
                            <li class="col-4">
                                <small>Order</small>
                                <h6>1350</h6>
                            </li>
                            <li class="col-4">
                                <small>Revenue</small>
                                <h6>$2.13B</h6>
                            </li>
                        </ul>
                    </div>
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#menu">Menu</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Chat"><i class="icon-book-open"></i> Chat</a></li>
                    </ul>

                    <div class="tab-content p-l-0 p-r-0">
                        <div class="tab-pane active" id="menu">
                            <nav id="left-sidebar-nav" class="sidebar-nav">
                                <ul id="main-menu" class="metismenu">
                                    {/* <li>
                                        <a href="#Dashboard" class="has-arrow"><i class="icon-home"></i> <span>Dashboard</span></a>
                                        <ul>
                                            <li><a href="index2.html">Demographic</a></li>
                                            <li><a href="index3.html">Hospital</a></li>
                                            <li><a href="index4.html">University</a></li>
                                            <li><a href="index5.html">Real Estate</a></li>
                                            <li><a href="index6.html">Project</a></li>
                                            <li><a href="index7.html">Bitcoin</a></li>
                                            <li><a href="index8.html">eCommerce</a></li>
                                        </ul>
                                    </li> */}
                                    <li>
                                        <Link to="/"><i class="icon-grid"></i> <span>Dashboard</span></Link>
                                    </li>
                                    <li>
                                        <a href="#App" class="has-arrow"><i class="icon-grid"></i> <span>File Manager</span></a>
                                        <ul>
                                            <li><Link to="/Images">Images</Link></li>
                                            <li><Link to="/media">Media</Link></li>
                                            <li><Link to="/document">Documents</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="new-file"><i class="icon-grid"></i> <span>Add File</span></Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="tab-pane p-l-15 p-r-15" id="Chat">
                            <form>
                                <div class="input-group m-b-20">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="icon-magnifier"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Search..." />
                                </div>
                            </form>
                            <ul class="right_chat list-unstyled">
                                <li class="online">
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <img class="media-object " src="/public/src/assets/img/xs/avatar4.jpg" alt="" />
                                            <div class="media-body">
                                                <span class="name">Chris Fox</span>
                                                <span class="message">Designer, Blogger</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="online">
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <img class="media-object " src="/public/src/assets/img/xs/avatar5.jpg" alt="" />
                                            <div class="media-body">
                                                <span class="name">Joge Lucky</span>
                                                <span class="message">Java Developer</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="offline">
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <img class="media-object " src="/public/src/assets/img/xs/avatar2.jpg" alt="" />
                                            <div class="media-body">
                                                <span class="name">Isabella</span>
                                                <span class="message">CEO, Thememakker</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="offline">
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <img class="media-object " src="/public/src/assets/img/xs/avatar1.jpg" alt="" />
                                            <div class="media-body">
                                                <span class="name">Folisise Chosielie</span>
                                                <span class="message">Art director, Movie Cut</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="online">
                                    <a href="javascript:void(0);">
                                        <div class="media">
                                            <img class="media-object " src="/public/src/assets/img/xs/avatar3.jpg" alt="" />
                                            <div class="media-body">
                                                <span class="name">Alexander</span>
                                                <span class="message">Writter, Mag Editor</span>
                                                <span class="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;