export default {
	title: "Additional Information",
	name: "additionalInformation",

	type: "array",
	of: [
		{
			type: "block",
		},
		{
			type: "object",
			title: "Image",
			name: "blockImage",
			fields: [
				{
					type: "image",
					name: "inlineImage",
				},
				{
					type: "string",
					layout: "list",
					name: "alignment",
					options: {
						list: [
							{ title: "Left", value: "left" },
							{ title: "Center", value: "center" },
							{ title: "Right", value: "right" },
						],
						layout: "radio",
						direction: "horizontal",
					},
				},
			],
		},
	],
};
