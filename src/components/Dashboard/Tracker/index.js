import React from 'react';
import { useState } from 'react';
import Goal from '../Tracker/Goal';
import Graph from '../Tracker/Graph';
import Log from '../Tracker/Log';

const Tracker = () => {
	const [data, setData] = useState(true);
	const updateData = () => {
		setData(!data);
	};
	return (
		<>
			<Goal data={data} updateData={updateData} />
			<Graph data={data} updateData={updateData} />
			<Log data={data} updateData={updateData} />
		</>
	);
};

export default Tracker;
