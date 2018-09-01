import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            description: '',
            file: null
        }
    }

    render() {
        // const { pathname } = this.props.location;
        return (
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-5 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> File Images</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item">File Manager</li>
                                <li class="breadcrumb-item active">File Images</li>
                            </ul>
                        </div>
                        <div class="col-lg-7 col-md-4 col-sm-12 text-right">
                            <div class="inlineblock text-center m-r-15 m-l-15 hidden-sm">
                                <div class="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1" data-line-Color="#00c5dc"
                                    data-fill-Color="transparent">3,5,1,6,5,4,8,3</div>
                                <span>Visitors</span>
                            </div>
                            <div class="inlineblock text-center m-r-15 m-l-15 hidden-sm">
                                <div class="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-Width="1" data-line-Color="#f4516c"
                                    data-fill-Color="transparent">4,6,3,2,5,6,5,4</div>
                                <span>Visits</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-lg-3 col-md-6">
                        <div class="card info-box-2">
                            <div class="body">
                                <div class="icon">
                                    <div class="chart chart-bar">6,4,8,6,8,10,5,6,7,9,5</div>
                                </div>
                                <div class="content">
                                    <div class="text">Population</div>
                                    <div class="number">4,254</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card info-box-2">
                            <div class="body">
                                <div class="icon">
                                    <div class="chart chart-pie">30, 35, 25, 8</div>
                                </div>
                                <div class="content">
                                    <div class="text">Usage</div>
                                    <div class="number">98%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card info-box-2">
                            <div class="body">
                                <div class="icon">
                                    <div class="chart chart-bar">4,6,-3,-1,2,-2,4,3,6,7,-2,3</div>
                                </div>
                                <div class="content">
                                    <div class="text">Page Views</div>
                                    <div class="number">1,195</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card info-box-2">
                            <div class="body">
                                <div class="icon">
                                    <span class="chart chart-line">9,4,6,5,6,4,7,3</span>
                                </div>
                                <div class="content">
                                    <div class="text">Growth</div>
                                    <div class="number">$1,243</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;