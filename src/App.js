import Layout from './components/Layout';
import { RecoilRoot } from 'recoil';
import { DragDropContext } from 'react-beautiful-dnd';
import './less/index.scss';

function App() {

  return (
    <div className="content">
      {/* <DragDropContext onDragEnd={(e) => { console.log(e)}}> */}
        <RecoilRoot>
          <Layout />
        </RecoilRoot>
      {/* </DragDropContext> */}
    </div>
  );
}

export default App;
