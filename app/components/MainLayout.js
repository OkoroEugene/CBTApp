import React, { Component } from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';

const MainLayout = props => (
    <div>
        <Navbar />
        <SideBar />
        <div id="main-content" class="file_manager">
            {props.children}
        </div>
    </div>
)

export default MainLayout;