import React from 'react';

const Graph = () => {
	// From local storage ---
	const fatGoal = 100;
	const carbGoal = 200;
	const proteinGoal = 150;
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
			<div className="section">
				<div className="macros">
					<div className="macro">
						<div className="bar--goal" style={{ height: fatGoalHeight }}>
							<div className="title">FAT</div>
							<div className="bar" style={{ height: fatLoggedHeight }}></div>
						</div>
						<div>
							{fatLogged} / {fatGoal} g
						</div>
					</div>
					<div className="macro">
						<div className="bar--goal" style={{ height: carbGoalHeight }}>
							<div className="title">CARB</div>
							<div className="bar" style={{ height: carbLoggedHeight }}></div>
						</div>
						<div>
							{carbLogged} / {carbGoal} g
						</div>
					</div>
					<div className="macro">
						<div className="bar--goal" style={{ height: proteinGoalHeight }}>
							<div className="title">PROTEIN</div>
							<div
								className="bar"
								style={{ height: proteinLoggedHeight }}
							></div>
						</div>
						<div>
							{proteinLogged} / {proteinGoal} g
						</div>
					</div>
				</div>
				<div className="calories">
					<div className="calories--goal">
						<div className="title">CALORIES</div>
						<div
							className="logged"
							style={{ width: caloriesLoggedWidth }}
						></div>
					</div>
					<div className="amount">
						{caloriesLogged} / {caloriesGoal} cals
					</div>
				</div>
			</div>
		</>
	);
};

export default Graph;
