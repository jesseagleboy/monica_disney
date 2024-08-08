import { defineField, defineType } from "sanity";
import { bannerSection } from "./banner";
import { SectionsArrayInput } from "@tinloof/sanity-studio";

export const sections = [bannerSection];

export default defineType({
	name: "page",
	type: "document",
	// ... other fields
	fields: [
		defineField({
			name: "sectionPicker",
			title: "Section Picker",
			type: "array",
			of: sections.map(section => ({
				type: section.name,
			})),
			components: {
				input: SectionsArrayInput,
			},
		}),
	],
});
