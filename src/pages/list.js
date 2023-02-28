import { useState, useEffect } from  'react';
import SingleCard from '../components/SingleCard';
import Empty from '../components/Empty';


function List() {
	const [screens, setScreens] = useState([]);
	return (
		screens && screens.length ? (
			<div style={{ display: 'flex' }}>
				{
					screens.map(({ title, img }) => <SingleCard key={title} img={img} title={title} />)
				}
			</div>
		) : <Empty />
	)
}

export default List;