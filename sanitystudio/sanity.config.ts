// ./sanity.config.ts
import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { presentationTool } from "sanity/presentation";
import { media } from "sanity-plugin-media";

export default defineConfig({
	projectId: 'gwwfkmev',
	dataset: 'production',
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
