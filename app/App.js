import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            firstPage: true
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5002/questions')
            .then(res => { this.setState({ questions: res.data }) })
    }

    render() {
        let questionList = this.state.questions.map((item, i) =>
            <div class="step" style={{ display: 'none' }}>
                <div key={i} class="form-group radio_input">
                    <h3>Question {i + 1}</h3>
                    <p>{item.question}</p>
                    {
                        item.options.map((r, k) =>
                            <label><input key={k} type="radio" value={r} checked name="gender" class="icheck" /></label>
                        )
                    }
                </div>
            </div>
        )
        return (
            <div id="form_container" class="clearfix">
                <figure>
                    <a href="index.html"><img src="./app/public/content/img/logo.png" width="149" height="42" data-retina="true" alt="" /></a>
                </figure>
                <div id="wizard_container">
                    <div id="top-wizard">
                        <div id="progressbar"></div>
                    </div>
                    <form name="example-1" id="wrapped" method="POST">
                        <input id="website" name="website" type="text" value="" />
                        <div id="middle-wizard">
                            <div class="step">
                                <div id="intro">
                                    <figure><img src="./app/public/content/img/wizard_intro_icon.svg" alt="" /></figure>
                                    <h1>Admission Apply</h1>
                                    <p>Exerci tibique eum cu, paulo appellantur et mei, ea partem urbanitas vim. His ei iusto nonumes atomorum. Mentitum pericula in nec. In eos habemus tibique. </p>
                                    <p><strong>Mel erant legere iuvaret ea. At eum doctus voluptatibus, has id veritus constituam.</strong></p>
                                </div>
                            </div>
                            {questionList}
                        </div>
                        <div id="bottom-wizard">
                            <button type="button" name="backward" class="backward">Backward </button>
                            {this.state.firstPage === true ? <button type="button" name="forward" disabled={false} class="forward">Forward</button> : ''}
                            <button type="submit" name="process" class="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default App;