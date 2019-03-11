import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';
import {HashRouter as Router, Link, Route} from "react-router-dom";

import CRQueryPage from './pages/CRQueryPage';
import CreateCRPage from './pages/CreateCRPage';
import ReleaseQueuePage from './pages/ReleaseQueuePage';
import CRTemplatePage from './pages/CRTemplatePage';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content, } = Layout;

// import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
        <Layout>
            <Header><div className="logo" /></Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />CR Management</span>}>
                            <Menu.Item key="1"><Link to="/CRQueryPage">Query CR</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/CreateCRPage">Create CR</Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" title={<span><Icon type="laptop" />Configuration</span>}>
                            <Menu.Item key="3"><Link to="/CRTemplatePage">CR Template</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/ReleaseQueuePage">Release Queue</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                {/*<Content> <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div></Content>*/}
                <Content>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <Route exact path="/" component={CreateCRPage} />
                            <Route path='/CRQueryPage' component={CRQueryPage} />
                            <Route path='/CreateCRPage' component={CreateCRPage} />
                            <Route path='/CRTemplatePage' component={CRTemplatePage} />
                            <Route path='/ReleaseQueuePage' component={ReleaseQueuePage} />
                        </div>
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
        </Router>
    );
  }
}

export default App;
