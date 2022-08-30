import React from 'react';
import { useState } from 'react';

const Goal = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [fatGoal, setFatGoal] = useState(0);
	const [carbGoal, setCarbGoal] = useState(0);
	const [proteinGoal, setProteinGoal] = useState(0);
	const postMacros = (event) => {
		event.preventDefault();
		localStorage.setItem('fatGoal', JSON.stringify(fatGoal));
		localStorage.setItem('carbGoal', JSON.stringify(carbGoal));
		localStorage.setItem('proteinGoal', JSON.stringify(proteinGoal));
		setIsOpen(!isOpen);
		props.updateData();
	};

	return (
		<>
			<div className="goal">
				<div className="switch">
					{!isOpen ? (
						<div>SET MACROS</div>
					) : (
						<form>
							<input
								type="text"
								placeholder="Fat"
								onChange={(event) => {
									setFatGoal(event.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="Carb"
								onChange={(event) => {
									setCarbGoal(event.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="Protein"
								onChange={(event) => {
									setProteinGoal(event.target.value);
								}}
							/>
							<input
								className="btn"
								type="submit"
								value="Submit"
								onClick={postMacros}
							/>
						</form>
					)}
				</div>
				<div
					className="btn button"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<div>{isOpen ? '－' : '＋'}</div>
				</div>
			</div>
		</>
	);
};

export default Goal;
