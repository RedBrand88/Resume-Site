import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const Resume = (props) => {
    return (
        <div>
            <Card title={props.user.first_name + " " + props.user.last_name} extra={<a href="#">More</a>}>
                <Meta
                    avatar={<Avatar shape="square" size={64} icon="user" src="https://thefoodtruckleague.com/wp-content/uploads/2015/10/Food-truck-league-logo-01.png" />}
                />
                <p>{props.user.phone_number}</p>
                <p>{props.user.email}</p>
                <p>{props.user.address}</p>
            </Card>
        </div>
    );
}

export default Resume;