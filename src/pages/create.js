import { Layout, Affix, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useRef, useState, useEffect, useCallback } from 'react';
import { source, mp3TotalTimeState } from '../atoms/index';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const { Content, Footer } = Layout;
function Create() {
	const params = useParams();
	const sourceState = useRecoilValue(source);

	const [currentTime, setCurrentTime] = useState(0);

	const [totalTime, setTotalTime] = useState(0);

	const videoRef = useRef();
	const audioRef = useRef();

	function play() {
		videoRef.current.play();
		audioRef.current.play();
	}

	function stop() {
		videoRef.current.pause();
		audioRef.current.pause();
		videoRef.current.currentTime = 0;
		audioRef.current.currentTime = 0;
	}

	const getAudioTime = useCallback((e) => {
		setTotalTime(e.target.duration);
	}, []);



	useEffect(() => {
		audioRef.current.addEventListener('loadedmetadata', getAudioTime, false);
		return () => audioRef.current.removeEventListener('loadedmetadata', getAudioTime, false);
	}, []);

	return (
		<Layout style={{ height: '100%', display: 'flex' }}>
			<Content>
				<div className="video">
					<div className="mask">
						<video ref={videoRef} muted loop src={`http://localhost:9012/sources/${sourceState.mp4}`} />
					</div>
				</div>
				<Affix offsetBottom={200} style={{ position: 'absolute', right: 20 }}>
					<div>
						<Button onClick={play}>播放</Button>
						<Button onClick={stop}>重置</Button>
						<Button>保存</Button>
					</div>
				</Affix>
				<div>{sourceState.mp3}</div>
				<div>{sourceState.mp4}</div>
			</Content>
			<Footer style={{ height: 150, backgroundColor: '#666' }}>
				<div className="audio">
					<div className="mask">
						<audio ref={audioRef} loop src={`http://localhost:9012/sources/${sourceState.mp3}`} />
					</div>
					{totalTime}
				</div>
			</Footer>
		</Layout>
	)
}

export default Create;