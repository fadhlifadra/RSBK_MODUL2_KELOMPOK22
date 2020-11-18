import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import style from './style.css';
import { Row, Col } from 'antd';
import Cards from './components/Cards';
import Button from './elements/Button';

const { Header, Content, Footer } = Layout;

const Tampilan = () => {
    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Kelompok 22</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Button href="/signin">Sign In</Button>
                                <Button href="/signup">Sign Up</Button>
                            </div>
                        </Col>
                    </Row>
                </Menu>

            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Praktikum RSBK</Breadcrumb.Item>
                    <Breadcrumb.Item>Modul 2</Breadcrumb.Item>
                    <Breadcrumb.Item>Tugas</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <div className="Components">
                        <Cards />;
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default Tampilan;