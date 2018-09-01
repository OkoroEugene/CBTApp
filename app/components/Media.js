import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import SideBar from './SideBar';

class Media extends Component {
    constructor() {
        super();
        this.state = {
            media: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/getFile', { params: { fileType: 'music' } })
            .then(res => {
                this.setState({ media: res.data })
            })
    }
    render() {
        let panel = this.state.media.map((items, i) =>
            <div class="col-lg-3 col-md-4 col-sm-12" key={i}>
                <div class="card">
                    <div class="file">
                        <a href="javascript:void(0);">
                            <div class="hover">
                                <button type="button" class="btn btn-icon btn-danger">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                            <div class="icon">
                                <i class="fa fa-image"></i>
                            </div>
                            <div class="file-name">
                                <p class="m-b-5 text-muted">{this.state.media.filename}</p>
                                <small>Size: 720MB <span class="date text-muted">Dec 08, 2017</span></small>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
        return (
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-5 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> File Media</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item">File Manager</li>
                                <li class="breadcrumb-item active">File Media</li>
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
                    {this.state.media ? panel : null}
                </div>
            </div>
        );
    }
}

export default Media;