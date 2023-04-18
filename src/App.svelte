<script>
	import Button from "./lib/Button.svelte";
import ComponentProps from "./lib/ComponentProps.svelte";
	import Counter from "./lib/Counter.svelte";
	import ReactiveStatementGotchas from "./lib/ReactiveStatementGotchas.svelte";

	let name = "Praveen";
	let user = {
		name: "Praveen",
		age: 24,
	};
	let src = "https://picsum.com/20/20";

	let text = "Some <strong>text</strong> with HTML";
</script>

<h1>Svelte Tutorial</h1>

<!-- <img {src} alt="Dummy Pic {name}" />
<h1>Hello {name}!</h1>
<p>{@html text}</p> -->

<!-- <Counter /> -->
<!-- <ReactiveStatementGotchas /> -->

<!-- <ComponentProps {name} /> -->
<!-- <ComponentProps {...user} x="hello" /> -->

<!-- <Button>
	hello
	<h1>My Button</h1>
</Button> -->

 <!-- Fallback slot & Class directive -->
<!-- <Button size="small" shadow/> -->


<!-- Style Directive --> <!-- Fallback slot -->
<!-- <Button size="small" shadow bgColor="#ff3e00"/>  -->

<!-- Slot Props used by let: directive -->

<!-- 
	Adding this wont work
	on:click={() => alert("hello")}
	
	To work, add on:click to the button tag, this is called Event Forwading
 -->
<Button
 	disabled
	on:click|once={(event) => alert("hello")}
	let:x={z} let:isLeftHovered bgColor="orange">
	<!-- Named Slots -->
	<span slot="leftConent">Left</span>
	Click me {z}
	{isLeftHovered ? "left is hovered" :  ""}
</Button>

<div on:click={() => alert("ALERT")} on:keydown>
	<h1>ALERT</h1>
</div>


<style>
</style>
