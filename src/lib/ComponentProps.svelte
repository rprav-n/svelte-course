<script>
	export let name;
	export let age = 0; // If optional, explicitly initialize

	console.log($$props, $$restProps);

	// $$props - contains all props
	// $$restProps - contains props that are not defined in the component
</script>

<h1>My name is: {name}</h1>
<h1>Age: {age}</h1>
