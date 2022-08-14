import React from 'react';
import { useState, useEffect } from 'react';

const Food = () => {
	// Get Food Data ---
	const [foodData, setFoodData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3500/api/food')
			.then((res) => res.json())
			.then((data) => {
				setFoodData(data);
			});
	}, []);
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
									{/* {activeFood < 0 ? (
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
										  )} */}
								</div>
								{/* <div className="food--bottom">
									{parseInt(activeFood) === index && (
										<form>
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
												// onClick={createLog}
											/>
										</form>
									)}
								</div> */}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Food;
