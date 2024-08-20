// stackbit.config.js

import { SanityContentSource } from "@stackbit/cms-sanity";

export default {
	contentSources: [
		new SanityContentSource({
			studioInstallCommand: `echo 'skipping install'`,
			rootPath: __dirname,
			studioPath: path.join(__dirname, "studio"),
			studioUrl: "",
			projectId: process.env.SANITY_PROJECT_ID!,
			token: process.env.SANITY_ACCESS_TOKEN!,
			dataset: process.env.SANITY_DATASET || "production",
		}),
	],
	mapModels: ({ models }) => {
		return models.map(model => {
			if (model.name === "page") {
				return { ...model, type: "page", urlPath: "/{slug}" };
			}
			return model;
		});
	},
	import: {
		contentFile: "sanity-export/export.tar.gz",
		datasetEnvVar: "SANITY_DATASET",
		deployGraphql: false,
		deployStudio: true,
		projectIdEnvVar: "SANITY_PROJECT_ID",
		sanityStudioPath: "studio",
		tokenEnvVar: "SANITY_ACCESS_TOKEN",
		type: "sanity",
	},
	// other properties ...
};
