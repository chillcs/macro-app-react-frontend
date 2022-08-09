import React from 'react';
import { useState } from 'react';

const Goal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [fatGoal, setFatGoal] = useState('');
	const [carbGoal, setCarbGoal] = useState('');
	const [proteinGoal, setProteinGoal] = useState('');
	const postMacros = () => {
		localStorage.setItem('fatGoal', JSON.stringify(fatGoal));
		localStorage.setItem('carbGoal', JSON.stringify(carbGoal));
		localStorage.setItem('proteinGoal', JSON.stringify(proteinGoal));
		setIsOpen(!isOpen);
	};
	return (
		<>
			<div className="goal">
				<div
					className="accordion"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<div>MACROS</div>
					<div>{isOpen ? '－' : '＋'}</div>
				</div>
				{isOpen ? (
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
						<input type="submit" value="Submit" onClick={postMacros}></input>
					</form>
				) : (
					false
				)}
			</div>
		</>
	);
};

export default Goal;
