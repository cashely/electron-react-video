import { Modal, Input, message } from 'antd';
import { useState } from 'react';
function ScreenNameModal({ children }) {
    const [visable, setVisible] = useState(false);

    const [name, setName] = useState('');

    const onChange = (e) => {
        setName(() => e.target.value);
    }

    const onOk = () => {
        if (!name) {
            message.error('直播间名称不能为空');
            return;
        }
        setVisible(false);
        window.location.href = `/#/create/${name}`
    }

    const onCancel = () => {
        setVisible(false);
    }

    return (
        <>
            <Modal
                title="请输入直播间名称"
                open={visable}
                onOk={onOk}
                onCancel={onCancel}
                okText="确认"
                cancelText="取消"
            >
                <div>
                    <Input
                        value={name}
                        onChange={onChange}
                    />
                </div>
            </Modal>
            <div
                onClick={() => setVisible(true)}
            >
                {children}
            </div>
        </>
    )
}

export default ScreenNameModal;