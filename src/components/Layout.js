// import {} from 'react';
import { Layout as layout } from 'antd';
import Empty from './Empty';

const { Header, Footer, Sider, Content } = layout;

function Layout() {
    return (
        <layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header className="header">Header</Header>
                <Content>
                    <Empty />
                </Content>
                <Footer className='footer'>Footer</Footer>
            </Layout>
        </layout>
    )
}

export default Layout;