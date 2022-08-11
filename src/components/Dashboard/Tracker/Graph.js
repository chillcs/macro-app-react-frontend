import React from 'react';
import { useState, useEffect } from 'react';

const Graph = (props) => {
	const [fatGoal, setFatGoal] = useState(0);
	const [carbGoal, setCarbGoal] = useState(0);
	const [proteinGoal, setProteinGoal] = useState(0);

	// From local storage ---
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

	// From server ---
	const fatLogged = 50;
	const carbLogged = 75;
	const proteinLogged = 90;
	const totalLogged = fatLogged + carbLogged + proteinLogged;

	// Graph goal heights ---
	const fatGoalHeight = (fatGoal / totalGoal) * 100 + '%';
	const carbGoalHeight = (carbGoal / totalGoal) * 100 + '%';
	const proteinGoalHeight = (proteinGoal / totalGoal) * 100 + '%';

	// Graph logged heights ---
	const fatLoggedHeight = (fatLogged / totalLogged) * 100 + '%';
	const carbLoggedHeight = (carbLogged / totalLogged) * 100 + '%';
	const proteinLoggedHeight = (proteinLogged / totalLogged) * 100 + '%';

	// Calories calcs and logged width ---
	const caloriesGoal = fatGoal * 9 + carbGoal * 4 + proteinGoal * 4;
	const caloriesLogged = fatLogged * 9 + carbLogged * 4 + proteinLogged * 4;
	const caloriesLoggedWidth = (caloriesLogged / caloriesGoal) * 100 + '%';

	return (
		<>
			<div className="graph">
				<div className="macros">
					<div className="macro">
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
