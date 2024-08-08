// ./sanity.config.ts
import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanitymonicadisneysite/schemaTypes";
import { presentationTool } from "sanity/presentation";
import { media } from "sanity-plugin-media";
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_DATASET,
	plugins: [
		structureTool(),
		visionTool(),
		presentationTool({
			previewUrl: location.origin,
		}),
		media(),
	],
	schema: {
		types: schemaTypes,
	},
});
