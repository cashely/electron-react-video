import { Card } from 'antd';
import { PlayCircleOutlined, EditOutlined } from '@ant-design/icons';

import defaultImage from '../imgs/VYrcYCSDck.png';

const { Meta } = Card;


function SingleCard({ img = defaultImage, title }) {
	return (
		<Card
			style={{ margin: 10, }}
			bodyStyle={{ padding: 10 }}
			cover={<div style={{ width: 250, height:70, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${img})` }} />}
			actions={[
				<PlayCircleOutlined style={{ fontSize: 25}} />,
				// <EditOutlined />
			]}
		>
			<Meta title={title} />
		</Card>
	)
}

export default SingleCard;