import React from 'react';
import { useState } from 'react';

const Dashboard = () => {
	const [data, setData] = useState(true);
	const updateData = () => {
		setData(!data);
	};
	return (
		<>
			<div>Dashboard</div>
		</>
	);
};

export default Dashboard;
