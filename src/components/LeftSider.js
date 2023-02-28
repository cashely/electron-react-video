import { Collapse, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const { Panel } = Collapse;


function Group({ children, ...other }) {
	return (
		<div {...other}>
			{children}
		</div>
	)
}

function Item({ children, ...other }) {
	return (
		<div {...other}>
			{children}
		</div>
	)
}


function SourceList({ id, list }) {
	return (
		<Droppable droppableId={id} isDropDisabled={true}>
			{
				(provided, snapshot) => (
					<div
						ref={provided.innerRef}
					>
						{
							list.map((item, index) => {
								return (
									<Draggable
										key={item.title}
										draggableId={item.title}
										index={index}
									>
										{
											(provided, snapshot) => (
												<>
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														style={provided.draggableProps.style}
													>
														{item.title}
													</div>
													{snapshot.isDragging && <div className="drag-placeholder">{item.title}</div>}
												</>
											)
										}
									</Draggable>
								)
							})
						}
					</div>
				)
			}
		</Droppable>
	)
}


function LeftSider() {

	const onChange = (key) => {
		console.log(key)
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
					<SourceList
						list={[{ title: 'aaaa' }, { title: 'bbbb' }]}
						id="mp3"
					/>
				</Panel>
				<Panel header="视频" key="mp4">
					mp4
				</Panel>
			</Collapse>
		</div>
	)
}

export default LeftSider;