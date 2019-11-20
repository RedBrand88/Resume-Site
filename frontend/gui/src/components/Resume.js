import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const column1 = {
    width: '25%'
};

const column2 = {
    width: '75%',
    textAlign: 'left'
};

const Resume = (props) => {
    return (
        <Card title={props.user.first_name + " " + props.user.last_name} extra={<a href="#">More</a>} >
            <Card.Grid hoverable={false} style={column1}>
                <Avatar shape="square" size="large" icon="user" src="https://thefoodtruckleague.com/wp-content/uploads/2015/10/Food-truck-league-logo-01.png" />
            </Card.Grid>
            <Card.Grid hoverable={false} style={column2}>
                <p>{props.user.phone_number}</p>
                <p>{props.user.email}</p>
                <p>{props.user.address}</p>
            </Card.Grid>
        </Card>
    );
}

export default Resume;