import { useState, useEffect } from  'react';
import { useRecoilState } from 'recoil';
import { roomsState } from '../atoms/index';
import SingleCard from '../components/SingleCard';
import Empty from '../components/Empty';
import { find } from 'lodash';


function List() {

	const [rooms, setRooms] = useRecoilState(roomsState);

	async function findAllRooms() {
		const rooms = await window.sdk.rooms.findAll();
		setRooms(rooms);
	} 

	useEffect(() => {
		findAllRooms();
	}, []);

	return (
		rooms && rooms.length ? (
			<div style={{ display: 'flex' }}>
				{
					rooms.map(({ name, id }) => <SingleCard key={id} title={name} />)
				}
			</div>
		) : <Empty />
	)
}

export default List;