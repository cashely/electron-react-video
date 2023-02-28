import { Button } from 'antd';
import Layout from './components/Layout';
import { DragDropContext } from 'react-beautiful-dnd';
import './less/index.scss';

function App() {
  return (
    <div className="content">
      <DragDropContext onDragEnd={() => {}}>
        <Layout />
      </DragDropContext>
    </div>
  );
}

export default App;
