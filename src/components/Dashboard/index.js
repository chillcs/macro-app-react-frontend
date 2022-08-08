import React from 'react';

const Dashboard = () => {
	const customStyles = {
		height: 'calc(var(--vh, 1vh) * 100)',
	};

	return (
		<>
			<div className="dashboard" style={customStyles}>
				Dashboard
			</div>
		</>
	);
};

export default Dashboard;
