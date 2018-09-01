import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import SideBar from './SideBar';

class NewFile extends Component {
    constructor() {
        super();
        this.state = {
            category: [],
            imgSrc: null,
            categoryId: 0
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/category')
            .then(res => {
                this.setState({ category: res.data })
            })
    }
    handleSubmit() {
        var data = new FormData();
        data.append('categoryId', this.state.categoryId);
        data.append('file', this.state.imgSrc);
        axios.post('http://localhost:5000/addImage', data)
            .then(res => { alert(res.data) })
    }
    handleUpload(e) {
        this.setState({ imgSrc: e.target.files[0] })
    }
    selectCategory(e) {
        this.setState({ categoryId: e.target.value })
        e.preventDefault();
    }
    render() {
        let loadCategory = this.state.category.map((item, i) =>
            <option key={i} value={item.id}>{item.categoryName}</option>
        )
        return (
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-5 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Form Validation</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item">Forms</li>
                                <li class="breadcrumb-item active">Form Validation</li>
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
                    <div class="col-md-12">
                        <div class="card">
                            <div class="header">
                                <h2>Basic Validation</h2>
                            </div>
                            <div class="body">
                                <form id="basic-form" method="post" novalidate>
                                    <div className="row">
                                        {/* <div className="col-md-6">
                                            <div class="form-group">
                                                <label>Text Input</label>
                                                <input type="text" placeholder="Enter a valid file name" class="form-control" required />
                                            </div>
                                        </div> */}
                                        <div className="col-md-6">
                                            <div class="form-group">
                                                <select onChange={this.selectCategory.bind(this)} class="form-control">
                                                    <option selected="">Choose a category...</option>
                                                    {loadCategory}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Upload</span>
                                                </div>
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" onChange={this.handleUpload.bind(this)} id="inputGroupFile01" />
                                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col-md-6">
                                            <button onClick={this.handleSubmit.bind(this)} type="button" class="btn btn-primary">Validate</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewFile;