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

	const [transX, setTransX] = useState(0);

	const videoRef = useRef();
	const audioRef = useRef();
	const totalTimeRef = useRef();

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

	function save() {
		console.log(sourceState, '资源情况')
	}

	function updateTime(e) {

		console.log(e.target.currentTime)
		console.dir(totalTimeRef.current.clientWidth)

		const ratio = e.target.currentTime / e.target.duration;
		console.log(ratio, '比例')
		setTransX(ratio * totalTimeRef.current.clientWidth);
	}

	const getAudioTime = useCallback((e) => {
		setTotalTime(e.target.duration);
	}, []);



	useEffect(() => {
		audioRef.current.addEventListener('loadedmetadata', getAudioTime, false);
		audioRef.current.addEventListener('timeupdate', updateTime, false);
		console.log('change')
		return () => {
			audioRef.current.removeEventListener('loadedmetadata', getAudioTime, false);
			audioRef.current.removeEventListener('timeupdate', updateTime, false)
		};
	}, []);


	useEffect(() => {
		audioRef.current.currentTime = 0;
		videoRef.current.currentTime = 0;
		audioRef.current.pause();
		videoRef.current.pause();
	}, [sourceState.mp3, sourceState.mp4])

	return (
		<Layout style={{ height: '100%', display: 'flex' }}>
			<Content>
				<div className="video">
					<div className="mask">
						<video ref={videoRef} muted src={`http://localhost:9012/sources/${sourceState.mp4}`} />
					</div>
				</div>
				<Affix offsetBottom={200} style={{ position: 'absolute', right: 20 }}>
					<div>
						<Button onClick={play}>播放</Button>
						<Button onClick={stop}>重置</Button>
						<Button onClick={save}>保存</Button>
					</div>
				</Affix>
				<div>{sourceState.mp3}</div>
				<div>{sourceState.mp4}</div>
			</Content>
			<Footer style={{ height: 150, padding: 0, backgroundColor: '#666' }}>
				<div className="audio">
					<div className="mask">
						<audio ref={audioRef} src={`http://localhost:9012/sources/${sourceState.mp3}`} />
						<div className="totalTime" ref={totalTimeRef}></div>
						<span className="line" style={{ transform: `translate3d(${transX}px, 0, 0)`, transition: `transform ${transX === 0 ? 0 : 0.3}s`}}></span>
					</div>
				</div>
			</Footer>
		</Layout>
	)
}

export default Create;