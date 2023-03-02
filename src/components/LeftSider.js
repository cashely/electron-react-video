import { Collapse, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { sourcesState, source, mp3sState, mp4sState } from '../atoms/index';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useEffect } from 'react';

const { Panel } = Collapse;

function SourceList({ id, list }) {

	

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

	const setSourcesState = useSetRecoilState(sourcesState);

	const mp3s = useRecoilValue(mp3sState);
	const mp4s = useRecoilValue(mp4sState);


	async function findAllSources() {
		const sources = await window.sdk.sources.findAll();
		setSourcesState(sources)
	}

	useEffect(() => {
		findAllSources();
	}, []);

	const onChange = (key) => {
		console.log(key)
	}

	const setSourceState = useSetRecoilState(source);

	const onSourceChange = (type) => (e) => {
		console.log(e)
		setSourceState(d => {
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
						mp3s.map(item => {
							return (
								<div
									key={item.id}
									onClick={() => onSourceChange('mp3')(item)}
								>
									{item.name}
								</div>
							)
						})
					}
				</Panel>
				<Panel header="视频" key="mp4">
					{
						mp4s.map(item => {
							return (
								<div
									key={item.id}
									onClick={() => onSourceChange('mp4')(item)}
								>
									{item.name}
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