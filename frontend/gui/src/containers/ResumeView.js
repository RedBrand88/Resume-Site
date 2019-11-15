import React from 'react';
import Resume from '../components/Resume';
import axios from 'axios';

const test = []
test.push({
    first_name: 'Brandon',
    last_name: 'Bashein',
    email: 'b2randon@gmail.com',
    title: 'Developer'
});

class ResumeView extends React.Component {

    state = {
        resume: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/1')
            .then(res => {
                this.setState({
                    resume: res.data
                });
            })
    }

    render() {
        return (
            <Resume user={this.state.resume} />
        )
    }
}

export default ResumeView;