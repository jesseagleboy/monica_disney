import { definePathname } from "@tinloof/sanity-studio";
import { defineType } from "sanity";

export default defineType({
	type: "document",
	name: "modularPage",
	fields: [
		definePathname({
			name: "pathname",
			options: {
				source: "title",
			},
		}),
	],
});
