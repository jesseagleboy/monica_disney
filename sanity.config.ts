// ./sanity.config.ts
import { defineConfig } from "sanity";
import {visionTool} from '@sanity/vision'
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanitymonicadisneysite/schemaTypes"

export default defineConfig({
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_DATASET,
	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
