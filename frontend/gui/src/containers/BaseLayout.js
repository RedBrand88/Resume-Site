import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {

    return (
        <Layout className="layout">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Login</Menu.Item>
                    {/* <Menu.Item key="2">nav 2</Menu.Item> */}
                    {/* <Menu.Item key="3">nav 3</Menu.Item> */}
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px 50px 50px', background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    {/* <Breadcrumb.Item>List</Breadcrumb.Item> */}
                    <Breadcrumb.Item>Resume</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#111', opacity: 1, padding: 24, minHeight: 880 }}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default CustomLayout;