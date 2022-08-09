import React from 'react';
import { useEffect, useState } from 'react';

const Dashboard = () => {
	const [height, setHeight] = useState(window.innerHeight);
	const updateHeight = () => {
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', updateHeight);
		return () => window.removeEventListener('resize', updateHeight);
	}, []);

	const maxHeight = {
		height: height,
	};

	const bodyHeight = {
		height: maxHeight.height - 125,
	};

	console.log(maxHeight.height);

	return (
		<>
			<div className="dashboard" style={maxHeight}>
				<div className="header">Macro</div>
				<div className="main" style={bodyHeight}>
					<div className="test">test</div>
				</div>
				<div className="footer">
					<div className="tab">Tracker</div>
					<div className="tab">Library</div>
					<div className="tab">Settings</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
