import React, {Component} from 'react';
import moment from 'moment';
import {Grid, Row, Col} from 'react-bootstrap'

export default class WeekCalendar extends Component {

    render() {

        return (
            <Grid>
                <Row className="show-grid">
                    {this.props.data.map((item, i) => {
                        return (
                            <Col sm={12} md={2} className='calendar-column'>

                                <div className='table-header'> {moment().add(i, 'days').format('dddd')}</div>
                                <div className={"day-info " + (item.status.active === 1 ? 'active-day' : '')}>
                                    <p>{item.date}</p>
                                    {item.status.active ? <a>{item.status.description}</a> :
                                        <p>{item.status.description}</p>}
                                </div>

                            </Col>
                        )
                    })}
                </Row>

            </Grid>
        );
    }
}


