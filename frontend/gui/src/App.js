import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/BaseLayout';
import ResumeView from './containers/ResumeView';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <ResumeView />
      </CustomLayout>
    </div>
      );
    }

    export default App;
