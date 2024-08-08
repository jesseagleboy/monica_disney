import { defineSection } from "@tinloof/sanity-studio"
import { defineField } from "sanity"

// @/sanity/schemas/sections/banner.tsx
export const bannerSection = defineSection({
  name: "block.banner",
  title: "Banner",
  type: "object",
  options: {
    variants: [
      {
        /**
         * Will be used to display a preview image
         * when opening the section picker
         */
        assetUrl: "/images/blocks/hero.png",
      },
    ],
  },
  fields: [
    defineField({
      name: "bannerSection",
      type: "string",
    }),
  ],
});