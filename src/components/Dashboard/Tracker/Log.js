import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import API_ROOT from '../../../api/root';

const Log = () => {
	// Get log data ---
	const [logData, setLogData] = useState([]);
	useEffect(() => {
		Axios.get(`${API_ROOT}/log`).then((res) => {
			setLogData(res.data);
		});
	}, []);
	// // Delete Log ---
	// const deleteLog = (id) => {
	// 	fetch('http://localhost:3500/api/log/delete', {
	// 		method: 'DELETE',
	// 	}).then(() => {
	// 		setLogData(
	// 			logData.filter((log) => {
	// 				return log.id !== id;
	// 			})
	// 		);
	// 	});
	// };
	return (
		<>
			<div className="log">
				<div className="log--title">FOOD LOG</div>
				{logData.length > 0 ? (
					<div className="log--column">
						{logData.map((log, index) => {
							return (
								<div
									className="log--row"
									key={index}
									style={
										index % 2 === 0
											? { background: 'var(--medium)' }
											: { background: 'var(--light)' }
									}
								>
									<div className="log--cell" style={{ width: '5%' }}>
										{log.quantity}
									</div>
									<div className="log--cell" style={{ width: '15%' }}>
										{log.unit}
									</div>
									<div className="log--cell" style={{ width: '35%' }}>
										{log.name}
									</div>
									<div className="log--cell" style={{ width: '15%' }}>
										F: {log.fat} g
									</div>
									<div className="log--cell" style={{ width: '15%' }}>
										C: {log.carb} g
									</div>
									<div className="log--cell" style={{ width: '15%' }}>
										P: {log.protein} g
									</div>
									{/* <div
										className="log--button"
										onClick={() => {
											deleteLog(log.id);
										}}
									>
										☓
									</div> */}
								</div>
							);
						})}
					</div>
				) : (
					<div className="log--empty">Nothing logged yet</div>
				)}
			</div>
		</>
	);
};

export default Log;
