import React from 'react';
import { useState } from 'react';

const Goal = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	// Create Food ---
	const [name, setName] = useState('No name');
	const [unit, setUnit] = useState('ea');
	const [fat, setFat] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);
	const [foodData, setFoodData] = useState([]);
	const createFood = (event) => {
		event.preventDefault();
		fetch('http://localhost:3500/api/food/create', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=UTF-8',
			},
			body: JSON.stringify({
				id: 44,
				name: name,
				unit: unit,
				fat: fat,
				carb: carb,
				protein: protein,
			}),
		}).then(() => {
			setFoodData([
				...foodData,
				{
					id: 44,
					name: name,
					unit: unit,
					fat: fat,
					carb: carb,
					protein: protein,
				},
			]);
		});
		setIsOpen(!isOpen);
		console.log(foodData);
	};

	return (
		<>
			<div className="goal">
				<div className="switch">
					{!isOpen ? (
						<div>CREATE FOOD</div>
					) : (
						<form>
							<input
								type="text"
								placeholder="Name"
								onChange={(event) => {
									setName(event.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="Unit"
								onChange={(event) => {
									setUnit(event.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="Fat"
								onChange={(event) => {
									setFat(event.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="Carb"
								onChange={(event) => {
									setCarb(event.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="Protein"
								onChange={(event) => {
									setProtein(event.target.value);
								}}
							/>
							<input type="submit" value="Create" onClick={createFood} />
						</form>
					)}
				</div>
				<div
					className="button"
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
