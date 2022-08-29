import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import API_ROOT from '../../../api/root';

const Food = () => {
	// Get food data ---
	const [foodData, setFoodData] = useState([]);
	useEffect(() => {
		Axios.get(`${API_ROOT}/food`).then((res) => {
			setFoodData(res.data);
		});
	}, []);

	// Create log ---
	const [quantity, setQuantity] = useState(0);
	const [unit, setUnit] = useState('');
	const [name, setName] = useState('');
	const [fat, setFat] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);
	const [activeFood, setActiveFood] = useState(-1);
	const [logData, setLogData] = useState([]);

	const createLog = () => {
		Axios.post(`${API_ROOT}/log/create`, {
			quantity: quantity,
			unit: unit,
			name: name,
			fat: fat,
			carb: carb,
			protein: protein,
		}).then(() => {
			setLogData([
				...logData,
				{
					quantity: quantity,
					unit: unit,
					name: name,
					fat: fat,
					carb: carb,
					protein: protein,
				},
			]);
		});
		setActiveFood((activeFood) => (activeFood = -1));
	};

	// Delete food ---
	const deleteFood = (id) => {
		Axios.delete(`${API_ROOT}/food/${id}`).then(() => {
			setFoodData(
				foodData.filter((food) => {
					return food.id !== id;
				})
			);
		});
	};
	return (
		<>
			<div className="food">
				<div className="food--title">FOOD LIBRARY</div>
				<div className="food--table">
					{foodData.map((food, index) => {
						return (
							<div className="food--wrapper" key={index}>
								<div className="food--row">
									<div className="food--cell" style={{ width: '35%' }}>
										{food.name}
									</div>
									<div className="food--cell" style={{ width: '15%' }}>
										{food.unit}
									</div>
									<div className="food--cell" style={{ width: '15%' }}>
										F: {food.fat} g
									</div>
									<div className="food--cell" style={{ width: '15%' }}>
										C: {food.carb} g
									</div>
									<div className="food--cell" style={{ width: '15%' }}>
										P: {food.protein} g
									</div>
									<div
										className="food--button-small"
										id={index}
										onClick={() => {
											deleteFood(food._id);
										}}
									>
										☓
									</div>
									{activeFood < 0 ? (
										<div
											className="food--button-small"
											id={index}
											onClick={(event) => {
												const target = event.currentTarget.id;
												setActiveFood((activeFood) =>
													activeFood === target ? activeFood : target
												);
												setUnit(food.unit);
												setName(food.name);
												setFat(food.fat);
												setCarb(food.carb);
												setProtein(food.protein);
											}}
										>
											＋
										</div>
									) : (
										parseInt(activeFood) === index && (
											<div
												className="food--button-small"
												id={index}
												onClick={() =>
													setActiveFood((activeFood) => (activeFood = -1))
												}
											>
												－
											</div>
										)
									)}
									{activeFood < 0
										? null
										: parseInt(activeFood) !== index && (
												<div
													className="food--button-small"
													id={index}
													onClick={(event) => {
														const target = event.currentTarget.id;
														setActiveFood((activeFood) =>
															activeFood === target ? activeFood : target
														);
														setUnit(food.unit);
														setName(food.name);
														setFat(food.fat);
														setCarb(food.carb);
														setProtein(food.protein);
													}}
												>
													＋
												</div>
										  )}
								</div>
								<div className="food--bottom">
									{parseInt(activeFood) === index && (
										<form onSubmit={createLog}>
											<input
												type="text"
												placeholder="Quantity"
												onChange={(event) => {
													setQuantity(event.target.value);
												}}
											/>
											<input
												className="food--form-submit"
												type="submit"
												value="Add"
											/>
										</form>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Food;
