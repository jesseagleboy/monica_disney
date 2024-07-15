import { component$, useSignal, useVisibleTask$, useTask$ } from "@builder.io/qwik";
import doConfetti from "@/functions/doConfetti";
import "./FireworksButton.scss";

const QwikFireworks = component$(() => {
	// doConfetti function has setInterval so it needs to be cleared before trasitioning. It also appears there are intervals called for each hover or mouse entered so you need an array of ids to track and clear them all before transitioning.
	const resetArray: Awaited<() => void>[] = [];
	if (resetArray.length > 0) {
		resetArray.forEach(reset => reset());
		resetArray.length = 0;
    }

	return (
		<a role='button' id='lets-go-button' className='prose' href='https://www.onceuponawishtravel.com/monica-defosse?fbclid=IwZXh0bgNhZW0CMTEAAR1ni540p2iP6cKKQEpH9C1YbEZ3Y85XzHMWNy8TIHpJqG4AYLeSf4Ahyk0_aem_AQuQ1NTwg7A5BLtF8ltfcNDQcJiufX3cinjOdkbi0V3VZN3u5AbDer1vg7_uxauyFeqF3x1t4tYAM7nBhqd62bAE' onMouseEnter$={async () => resetArray.push(await doConfetti())} onFocus$={async () => resetArray.push(await doConfetti())}>
			Start the Fireworks!
		</a>
	);
});

export default QwikFireworks;
