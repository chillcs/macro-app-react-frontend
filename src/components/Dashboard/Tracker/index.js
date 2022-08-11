import React from 'react';
import { useState } from 'react';
import Goal from '../Tracker/Goal';
import Graph from '../Tracker/Graph';

const Tracker = () => {
	const [data, setData] = useState(true);
	const updateData = () => {
		setData(!data);
	};
	return (
		<>
			<Goal updateData={updateData} />
			<Graph data={data} />
		</>
	);
};

export default Tracker;
