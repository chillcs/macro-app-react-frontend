import React from 'react';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

const App = () => {
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
	const mainHeight = {
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
			<div className="app" style={maxHeight}>
				<div className="header" style={headerHeight}>
					<div className="logo">New App</div>
					<div className="profile btn" id={0} onClick={openTab}>
						P
					</div>
				</div>
				<div className="main" style={mainHeight}>
					{parseInt(active) === 0 && <Profile />}
					{parseInt(active) === 1 && <Dashboard />}
					{parseInt(active) === 2 && <Settings />}
				</div>
				<div className="footer" style={footerHeight}>
					<div className="tab btn" id={1} onClick={openTab}>
						Dashboard
					</div>
					<div className="tab btn" id={2} onClick={openTab}>
						Settings
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
