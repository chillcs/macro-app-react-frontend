import React from 'react';
import { useState, useEffect } from 'react';
import FOOD_DATA from '../../../data/food.json';

const Food = () => {
	const [quantity, setQuantity] = useState(0);
	const [unit, setUnit] = useState('');
	const [name, setName] = useState('');
	const [fat, setFat] = useState(0);
	const [carb, setCarb] = useState(0);
	const [protein, setProtein] = useState(0);
	const [openList, setOpenList] = useState(false);
	const [activeFood, setActiveFood] = useState(-1);
	const [foodData, setFoodData] = useState([]);
	const [logData, setLogData] = useState([]);
	return (
		<>
			<div className="food">
				<div className="food--title">FOOD LIBRARY</div>
				<div className="food--table">
					{FOOD_DATA.map((food, index) => {
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
										<form>
											<input
												type="text"
												placeholder="QUANTITY"
												onChange={(event) => {
													setQuantity(event.target.value);
												}}
											/>
											<input
												className="food--form-submit"
												type="submit"
												value="SUBMIT"
												// onClick={createLog}
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
