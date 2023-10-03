export const capitalize = (str) => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;

export const wait = async (ms = 0) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};
