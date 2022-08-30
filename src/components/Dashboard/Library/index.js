import React from 'react';
import { useState } from 'react';
import Food from '../Library/Food';
import Create from '../Library/Create';

const Library = () => {
	const [data, setData] = useState(true);
	const updateData = () => {
		setData(!data);
	};
	return (
		<>
			<Food data={data} updateData={updateData} />
			<Create data={data} updateData={updateData} />
		</>
	);
};

export default Library;
