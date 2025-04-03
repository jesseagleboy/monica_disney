import { stegaClean } from "@sanity/client/stega";

function getOGImage({ currentURL, description, imageURL }: { currentURL: string; description: string; imageURL: string }): { encodedTitle: string; encodedDescription: string; encodedImageURL: string; dynamic: string } {
	/**
	 * Returns an object with encoded values for the title, description, and image URL
	 * to be used in an Open Graph image. The function takes in three parameters:
	 *
	 * @param {string} currentURL - The URL of the current page.
	 * @param {string} description - The description of the page.
	 * @param {string} imageURL - The URL of the image to be used in the Open Graph image.
	 *
	 * @return {{ encodedTitle: string; encodedDescription: string; encodedImageURL: string; dynamic: string }} - An object with the encoded values for the title, description, and image URL.
	 */

	const encodedTitle = encodeURIComponent(stegaClean(currentURL));
	const encodedDescription = encodeURIComponent(stegaClean(description));
	// height is used to reduce image size for image generator or it will not render
	const encodedImageURL = encodeURIComponent(stegaClean(imageURL) + (imageURL.includes("?") ? "" : "?h=500&w=500"));
	const dynamic = `https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/${encodedTitle}/${encodedDescription}/${encodedImageURL}/og.png`;

	return {
		encodedTitle,
		encodedDescription,
		encodedImageURL,
		dynamic,
	};
}

export default getOGImage;
