import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { API_GET_LOG } from '../../../api/routes';

const Graph = (props) => {
	// Get macro goal data from local storage ---
	const [fatGoal, setFatGoal] = useState(0);
	const [carbGoal, setCarbGoal] = useState(0);
	const [proteinGoal, setProteinGoal] = useState(0);
	useEffect(() => {
		const fatGoal = parseInt(JSON.parse(localStorage.getItem('fatGoal')));
		if (fatGoal) {
			setFatGoal(fatGoal);
		}
		const carbGoal = parseInt(JSON.parse(localStorage.getItem('carbGoal')));
		if (carbGoal) {
			setCarbGoal(carbGoal);
		}
		const proteinGoal = parseInt(
			JSON.parse(localStorage.getItem('proteinGoal'))
		);
		if (proteinGoal) {
			setProteinGoal(proteinGoal);
		}
	}, [props.data]);
	const totalGoal = fatGoal + carbGoal + proteinGoal;

	// Get log data from server ---
	const [logData, setLogData] = useState([]);
	useEffect(() => {
		Axios.get(`${API_GET_LOG}`).then((res) => {
			setLogData(res.data);
		});
	}, []);

	// Calculate macro totals from log data ---
	const [fatLogged, setFatLogged] = useState(0);
	const [carbLogged, setCarbLogged] = useState(0);
	const [proteinLogged, setProteinLogged] = useState(0);
	useEffect(() => {
		setFatLogged(
			parseInt(
				[...logData.map((log) => log.quantity * log.fat)]
					.reduce(function (a, b) {
						return a + b;
					}, 0)
					.toFixed(0)
			)
		);
		setCarbLogged(
			parseInt(
				[...logData.map((log) => log.quantity * log.carb)]
					.reduce(function (a, b) {
						return a + b;
					}, 0)
					.toFixed(0)
			)
		);
		setProteinLogged(
			parseInt(
				[...logData.map((log) => log.quantity * log.protein)]
					.reduce(function (a, b) {
						return a + b;
					}, 0)
					.toFixed(0)
			)
		);
	}, [logData]);

	// Graph goal heights ---
	let fatGoalHeight = (fatGoal / totalGoal) * 200 + '%';
	let carbGoalHeight = (carbGoal / totalGoal) * 200 + '%';
	let proteinGoalHeight = (proteinGoal / totalGoal) * 200 + '%';
	if (fatGoal || carbGoal || proteinGoal > 0.5 * totalGoal) {
		fatGoalHeight = (fatGoal / totalGoal) * 200 + '%';
		carbGoalHeight = (carbGoal / totalGoal) * 200 + '%';
		proteinGoalHeight = (proteinGoal / totalGoal) * 200 + '%';
	}

	// Graph logged heights ---
	const fatLoggedHeight = (fatLogged / fatGoal) * 100 + '%';
	const carbLoggedHeight = (carbLogged / carbGoal) * 100 + '%';
	const proteinLoggedHeight = (proteinLogged / proteinGoal) * 100 + '%';

	// Calories calcs and logged width ---
	const caloriesGoal = fatGoal * 9 + carbGoal * 4 + proteinGoal * 4;
	const caloriesLogged = fatLogged * 9 + carbLogged * 4 + proteinLogged * 4;
	const caloriesLoggedWidth = (caloriesLogged / caloriesGoal) * 100 + '%';

	// Check criteria ---
	const minMacro = 25;

	return (
		<>
			<div className="graph">
				<div className="macros">
					<div className="macro">
						{fatLogged > fatGoal && fatGoal > minMacro ? (
							<div className="check">✔</div>
						) : null}
						<div className="macro--goal" style={{ height: fatGoalHeight }}>
							<div className="macro--title">FAT</div>
							<div
								className="macro--logged"
								style={{ height: fatLoggedHeight }}
							></div>
						</div>
						<div className="macro--amount">
							{fatLogged} / {fatGoal} g
						</div>
					</div>
					<div className="macro">
						{carbLogged > carbGoal && carbGoal > minMacro ? (
							<div className="check">✔</div>
						) : null}
						<div className="macro--goal" style={{ height: carbGoalHeight }}>
							<div className="macro--title">CARB</div>
							<div
								className="macro--logged"
								style={{ height: carbLoggedHeight }}
							></div>
						</div>
						<div className="macro--amount">
							{carbLogged} / {carbGoal} g
						</div>
					</div>
					<div className="macro">
						{proteinLogged > proteinGoal && proteinGoal > minMacro ? (
							<div className="check">✔</div>
						) : null}
						<div className="macro--goal" style={{ height: proteinGoalHeight }}>
							<div className="macro--title">PROTEIN</div>
							<div
								className="macro--logged"
								style={{ height: proteinLoggedHeight }}
							></div>
						</div>
						<div className="macro--amount">
							{proteinLogged} / {proteinGoal} g
						</div>
					</div>
				</div>
				<div className="calories">
					<div className="calories--goal">
						<div className="calories--title">CALORIES</div>
						<div
							className="calories--logged"
							style={{ width: caloriesLoggedWidth }}
						></div>
					</div>
					<div className="calories--amount">
						{caloriesLogged} / {caloriesGoal} cals
					</div>
				</div>
			</div>
		</>
	);
};

export default Graph;
