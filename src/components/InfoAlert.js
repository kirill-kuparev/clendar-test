import React, {Component} from 'react';
import {Alert} from 'react-bootstrap'

export default class InfoAlert extends Component {

    render() {

        return (
            <div>
                <Alert bsStyle="success">
                    <strong>Hello!</strong> Clock button, please
                </Alert>
            </div>
        );
    }
}

