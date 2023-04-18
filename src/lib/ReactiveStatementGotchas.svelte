<script>
	import ReactiveStatementGotchas from "./ReactiveStatementGotchas.svelte";
	let count1 = 0;
	let count2 = 0;

	const setCount2 = (x) => {
		count2 = x;
	};

	$: setCount2(count1);
	$: text = `Count2 is ${count2}`;
	// $: setCount2(count1); // This does not work, as ORDER matters in reactive statement

	const getTotalCount = (x, y) => {
		return x + y;
	};

	// $: total = `Total count is ${getTotalCount()}`; // This also DOES not work, as this reactive statement does not depends on any states

	$: total = `Total count is ${getTotalCount(count1, count2)}`; // This also DOES not work, as this reactive statement does not depends on any states

	const increment = () => {
		count1++;
	};
</script>

<h1>ReactiveStatementGotchas</h1>

<button on:click={increment}>Clicks {count1}</button>

<h1>{text}</h1>
<h1>{total}</h1>
