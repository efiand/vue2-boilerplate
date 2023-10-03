module.exports = {
	plugins: [
		[
			"postcss-custom-media",
			{
				importFrom: "src/assets/css/mq.css"
			}
		],
		["postcss-nested"],
		["autoprefixer"]
	]
};
