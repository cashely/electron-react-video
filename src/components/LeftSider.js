import { Collapse, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSetRecoilState } from 'recoil';
import { source } from '../atoms/index';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const { Panel } = Collapse;

function SourceList({ id, list }) {

	const setSourceState = useSetRecoilState(source);

	const onSourceChange = (type) => (e) => {
		console.log(type, e)
		setSourceState(d => d[type] = e);
	}

	return (
		// <Droppable droppableId={id} isDragDisabled={true} isDropDisabled={true}>
		// 	{
		// 		(provided, snapshot) => (
		// 			<div
		// 				ref={provided.innerRef}
		// 			>
		// 				{
		// 					list.map((item, index) => {
		// 						return (
		// 							<Draggable
		// 								key={item.title}
		// 								draggableId={item.title}
		// 								index={index}
		// 							>
		// 								{
		// 									(provided, snapshot) => (
		// 										<>
													<div
														// ref={provided.innerRef}
														// {...provided.draggableProps}
														// {...provided.dragHandleProps}
														// style={provided.draggableProps.style}
													>
														{/* <span
															onClick={() => onSourceChange(id)(item.title)}
														>
															{item.title}
														</span> */}
													</div>
													// {snapshot.isDragging && <div className="drag-placeholder">{item.title}</div>}
		// 										</>
		// 									)
		// 								}
		// 							</Draggable>
		// 						)
		// 					})
		// 				}
		// 			</div>
		// 		)
		// 	}
		// </Droppable>
	)
}


function LeftSider() {

	const onChange = (key) => {
		console.log(key)
	}

	const setSourceState = useSetRecoilState(source);

	const onSourceChange = (type) => (e) => {
		console.log(type, e)
		setSourceState(d => {
			console.log(d[type], e)
			return {...d, [type]: e };
		});
	}

	return (
		<div className="" style={{ color: '#fff' }}>
			<Collapse defaultActiveKey={'me'} style={{ backgroundColor: '#d3d3d3', borderRadius: 0 }} size="small" bordered onChange={onChange}>
				<Panel header="我的场景" key="me">
					mp3
					<div style={{ textAlign: 'center', marginTop: 10 }}>
						<Button size="small">
							<PlusOutlined />
							新建场景
						</Button>
					</div>
				</Panel>
				<Panel header="音频" key="mp3">
					{
						[{ title: '15420.mp3' }, { title: '15409.mp3' }].map(item => {
							return (
								<div
									key={item.title}
									onClick={() => onSourceChange('mp3')(item.title)}
								>
									{item.title}
								</div>
							)
						})
					}
				</Panel>
				<Panel header="视频" key="mp4">
					{
						[{ title: '1676862209517.mp4' }, { title: '1676859029900.mp4' }].map(item => {
							return (
								<div
									key={item.title}
									onClick={() => onSourceChange('mp4')(item.title)}
								>
									{item.title}
								</div>
							)
						})
					}
				</Panel>
			</Collapse>
		</div>
	)
}

export default LeftSider;