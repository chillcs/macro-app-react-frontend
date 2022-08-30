import React from 'react';
import { useEffect, useState } from 'react';
import Tracker from '../Dashboard/Tracker/index';
import Library from '../Dashboard/Library/index';
import Settings from '../Dashboard/Settings/index';

const Dashboard = () => {
	// Set heights ---
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
	const headerHeight = {
		height: 75,
	};
	const footerHeight = {
		height: 50,
	};
	const bodyHeight = {
		height: maxHeight.height - headerHeight.height - footerHeight.height,
	};

	// Toggle tabs ---
	const [active, setActive] = useState(0);
	function openTab(event) {
		const target = event.currentTarget.id;
		setActive((active) => (active === target ? active : target));
	}

	return (
		<>
			<div className="dashboard" style={maxHeight}>
				<div className="header" style={headerHeight}>
					Macro
				</div>
				<div className="main" style={bodyHeight}>
					{parseInt(active) === 0 && <Tracker />}
					{parseInt(active) === 1 && <Library />}
					{parseInt(active) === 2 && <Settings />}
				</div>
				<div className="footer" style={footerHeight}>
					<div className="btn tab" id={0} onClick={openTab}>
						Tracker
					</div>
					<div className="btn tab" id={1} onClick={openTab}>
						Library
					</div>
					<div className="btn tab" id={2} onClick={openTab}>
						Settings
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
