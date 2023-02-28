import { Layout } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const { Content, Footer } = Layout;
function Create() {
	return (
		<Layout style={{ height: '100%', display: 'flex' }}>
			<Content>
				<div>
					{/*<DragDropContext
						onDragEnd={() => {}}
					>*/}
						<Droppable droppableId="canvas">
							{
								(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										style={{ width: 200, height: 300, backgroundColor: snapshot.isDraggingOver ? 'blue' : 'green' }}
									>
										{
											!provided.placeholder && (
                                                  <div>
                                                      Drop items here
                                                  </div>)
										}
										{provided.placeholder}
									</div>
								)
							}
						</Droppable>
					{/*</DragDropContext>*/}
				</div>
			</Content>
			<Footer style={{ height: 150, backgroundColor: '#666' }}>Footer</Footer>
		</Layout>
	)
}

export default Create;