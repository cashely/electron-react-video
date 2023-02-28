// import {} from 'react';
import { Layout as Zayout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Empty from './Empty';
import List from '../pages/list';
import GroupCard from '../pages/list';
import Create from '../pages/create';
import LeftSider from './LeftSider';

const { Header, Footer, Sider, Content } = Zayout;

function Layout() {
    return (
        <Zayout>
            <Sider>
                <LeftSider />
            </Sider>
            <Zayout>
                <Header className="header">Header</Header>
                <Content>
                    {/*<Empty />*/}
                    
                    <Routes>
                        <Route path="/">
                            <Route index element={<List />} />
                            <Route path="create/:name" element={<Create />}/>
                        </Route>
                    </Routes>
                </Content>
            </Zayout>
        </Zayout>
    )
}

export default Layout;