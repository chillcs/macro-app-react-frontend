// ROOT ---
const API_ROOT = 'http://localhost:3500';

// FOOD
const API_GET_FOOD = `${API_ROOT}/food`;
const API_CREATE_FOOD = `${API_ROOT}/food/create`;
const API_DELETE_FOOD = `${API_ROOT}/food/delete`;

// LOG ---
const API_GET_LOG = `${API_ROOT}/log`;
const API_CREATE_LOG = `${API_ROOT}/log/create`;
const API_DELETE_LOG = `${API_ROOT}/log/delete`;

export {
	API_GET_FOOD,
	API_CREATE_FOOD,
	API_DELETE_FOOD,
	API_GET_LOG,
	API_CREATE_LOG,
	API_DELETE_LOG,
};
