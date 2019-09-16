import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import './App.css';

import Search from "./component/Search"
import PriceStorage from "./component/PriceStorage"
import BestTipset from "./component/BestTipset"
import StorageCapacity from "./component/StorageCapacity"
import NetworkUtilization from "./component/NetworkUtilization"
import Charts from "./component/Charts"
import Detail from "./Detail"


export default class index extends React.Component{

    render() {
        const { Header, Content, Footer } = Layout;
        return (
            <Layout className="layout">
                <Header>
                    <Row>
                        <Col lg={12}>
                            <div className="gutter-box">
                                <div className="logo" ></div>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['2']}
                                    style={{ lineHeight: '64px' }}
                                >
                                    <Menu.Item key="1">Chain</Menu.Item>
                                    <Menu.Item key="2">Best Block</Menu.Item>
                                    <Menu.Item key="3">Actors</Menu.Item>
                                </Menu>
                            </div>
                        </Col>
                        <Col lg={12} style={{marginTop:'12px'}}>
                            <Search />
                        </Col>
                    </Row>


                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0',display:"none" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280,marginTop:20 }}>
                        <div>
                            <div className="gutter-row">
                                <Row gutter={16}>
                                    <Col className="gutter-row" lg={6} md={8} sm={12} xs={24}>
                                        <div className="gutter-box">
                                            <BestTipset/>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" lg={6} md={8} sm={12} xs={24}>
                                        <div className="gutter-box">
                                            <PriceStorage/>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" lg={6} md={8} sm={12} xs={24}>
                                        <div className="gutter-box">
                                            <StorageCapacity/>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" lg={6} md={8} sm={12} xs={24}>
                                        <div className="gutter-box">
                                            <NetworkUtilization/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Detail />
                        </div>
                    </div>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280,marginTop:20 }}>
                        <Charts/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        );
    }
}





