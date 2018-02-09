import React, {Component} from 'react';
import {Alert} from 'react-bootstrap'

export default class ReqError extends Component {

    render() {

        return (
            <div>
                <Alert bsStyle="danger">
                    <strong>Wow!</strong> problems connecting to the server
                </Alert>
            </div>
        );
    }
}


