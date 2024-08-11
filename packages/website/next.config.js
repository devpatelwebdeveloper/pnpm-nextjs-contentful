/** @type {import('next').NextConfig} */
const path = require("path");
module.exports = {
	images: {
		loader: "custom",
		formats: ["image/avif", "image/webp"],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
