import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { API_CREATE_FOOD } from '../../../api/routes';

const Create = () => {
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
		Axios.post(`${API_CREATE_FOOD}`, {
			name: name,
			unit: unit,
			fat: fat,
			carb: carb,
			protein: protein,
		}).then(() => {
			setFoodData([
				...foodData,
				{
					name: name,
					unit: unit,
					fat: fat,
					carb: carb,
					protein: protein,
				},
			]);
		});
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="create">
				<div>CREATE FOOD</div>
				<div
					className="btn button"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					{isOpen ? '－' : '＋'}
				</div>
			</div>
			{isOpen ? (
				<div className="create--bottom">
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
						<input
							className="btn"
							type="submit"
							value="Create"
							onClick={createFood}
						/>
					</form>
				</div>
			) : null}
		</>
	);
};

export default Create;
