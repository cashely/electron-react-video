import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ScreenNameModal from './ScreenNameModal';

function Empty() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <ScreenNameModal>
                <Button title="新建直播间" type="dashed" style={{ width: 200, height: 100 }}>
                    <PlusOutlined style={{ fontSize: 30 }} />
                </Button>
            </ScreenNameModal>
            <p>当前无场景，请新建一个吧</p>
        </div>
    )
}

export default Empty;