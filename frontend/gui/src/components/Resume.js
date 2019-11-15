import React from 'react';
import { Card, Avatar, List } from 'antd';

const Resume = (props) => {
    return (
        <div>
            <Avatar shape="square" size={64} icon="user" />

            <Card title={props.user.first_name} extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>{props.user.phone_number}</p>
                <p>{props.user.email}</p>
                <p>{props.user.address}</p>
            </Card>
        </div>
    );
}

export default Resume;