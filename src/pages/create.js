import { Layout, Affix, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { source } from '../atoms/index';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const { Content, Footer } = Layout;
function Create() {
	const params = useParams();
	const sourceState = useRecoilValue(source);
	console.log(sourceState, 'ssss')
	console.log(params)
	return (
		<Layout style={{ height: '100%', display: 'flex' }}>
			<Content>
				<Affix offsetBottom={200} style={{ position: 'absolute', right: 20 }}>
					<Button>保存</Button>
				</Affix>
				<div>{sourceState.mp3}</div>
			</Content>
			<Footer style={{ height: 150, backgroundColor: '#666' }}>Footer</Footer>
		</Layout>
	)
}

export default Create;