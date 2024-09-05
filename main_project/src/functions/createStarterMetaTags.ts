import getOGImage from "./getOGImageWithClean";

interface OpenGraphProps {
	type: string;
}

type TwitterCardTypeEnum = "summary" | "summary_large_image" | "app" | "player";
interface TwitterOGProps {
	card: TwitterCardTypeEnum;
}

export interface StarterMetaTagProps {
	title: string;
	description: string;
	mainSite: string;
	openGraph: OpenGraphProps;
	twitter?: TwitterOGProps;
	url: string;
	imageURL: string;
	imageAlt?: string;
}

function createStarterMetaTags(starterObject: StarterMetaTagProps) {
	const getImage = getOGImage({ currentURL: starterObject.url, description: starterObject.description, imageURL: starterObject.imageURL });

	return {
		title: starterObject.title || "Magical Adventures By Monica",
		description: starterObject.description || "Making your magical adventures come alive!",
		openGraph: {
			basic: {
				title: starterObject.title || "Magical Adventures By Monica",
				type: starterObject.openGraph?.type,
				image: getImage.dynamic,
				url: starterObject.url,
			},
			optional: {
				siteName: "Magical Adventures By Monica",
				description: starterObject.description || "Making your magical adventures come alive!",
			}
		},
		twitter: {
			title: starterObject.title || "Magical Adventures By Monica",
			description: starterObject.description || "Making your magical adventures come alive!",
			image: getImage.dynamic,
			imageAlt: starterObject.imageAlt || starterObject.title,
			site: starterObject.mainSite,
			card: starterObject.twitter?.card || "summary_large_image",
		},
	};
}

export default createStarterMetaTags;
