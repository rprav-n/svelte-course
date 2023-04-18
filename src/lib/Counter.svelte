<script>
	let count = 0;

	// The text WONT update when count variable changes as the scripts will run only once when component mounts
	// To fix: Use reactive statements

	let text;
	$: {
		// // Any value changes will run this statement again
		// console.log(`The count is now ${count}`);
		text = `You have clicked ${count} times.`;
		// increment(); // Why this doesn't run forever????
	}

	// Shorthand reactive statements
	// $: text = `You have clicked ${count} times.`;

	const increment = () => {
		count++;
	};
</script>

<!-- on: is called directive -->
<button on:click={increment}>Clicks {count}</button>

<h1>{text}</h1>

<style>
	button {
		padding: 1rem;
	}
</style>
