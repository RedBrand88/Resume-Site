import React from 'react';
import { Route } from 'react-router-dom';
import ResumeView from './containers/ResumeView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ResumeView}/>
    </div>
);

export default BaseRouter;