import React, {Component} from 'react';
import {Button} from 'react-bootstrap'
import './App.css';
import $ from 'jquery';
import moment from 'moment';
import WeekCalendar from './components/WeekCalendar';
import ReqError from './components/ReqError';
import InfoAlert from './components/InfoAlert';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error:null
        };
        this.getData = this.getData.bind(this)
    }


    getData() {
        const self = this;

        const dateNow = moment().format('YYYY-MM-DD');

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange =  function () {

            if (this.readyState === 4 && this.status === 200) {

                self.setState({data :JSON.parse(this.response)})
            }
        };

        xmlhttp.open("GET", "http://localhost:3030/public/schedule.php?date="+dateNow, true);
        xmlhttp.send();
    }

    render() {

        const dateNow = moment().format('YYYY-MM-DD');
        return (
            <div className='App'>
                <div className='buttons-container'>
                    <Button bsStyle="success" onClick={this.getData}>Open Calendar</Button>
                </div>

                <div className='table-content'>
                    {this.state.data.length ? <WeekCalendar dateNow={dateNow} data={this.state.data}/> : (this.state.error ? <ReqError/> : <InfoAlert/>)}
                </div>
            </div>
        );
    }
}

export default App;
