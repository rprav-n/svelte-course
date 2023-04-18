<script>
    export let size ='small';
    export let shadow = false;

    export let bgColor = undefined; // We CANNOT use the JS variables inside style tag
    export let textColor = "white"; // We can use it in INLINE Css only -> style="background-color: {bgColor}; color: {textColor}"

    console.log($$slots);
    console.log("restProps", $$restProps);

    let isLeftHovered;

    $: {
        console.log(isLeftHovered);
    }

</script>

<!-- The below code, is how we usually add dynamic classes -->
<!-- <button class={size === 'large' ? 'size-lg' : 'size-sm'}>
    <slot>Fallback</slot>
</button> -->

<!-- Better dynamic class: class directive -->
<button

    {...$$restProps}
    on:click

    style:background-color={bgColor}
    style:color={textColor}
    class:size-lg={size === 'large'}
    class:size-sm={size === 'small'}
    class:shadow
    >
    <!-- class:shadow = class:shadow={shadow} -->

    <!-- Apply class only when leftContent is present -->
    <div class:left-content={$$slots.leftConent} 
        on:mouseenter={() => isLeftHovered = true}
        on:mouseleave={() => isLeftHovered = false}
    >
        <slot name="leftConent" />
    </div>
    <slot x="YYY" {isLeftHovered}>Fallback</slot>
</button>

<style>
    button {
        border: none;
        /* background-color: #ff3e00; */
        /* color: white; */
        border-radius: 5px;
        cursor: pointer;

        display: flex;
        align-items: center;
    }
    .size-sm {
        padding: 15px 20px;
    }
    .size-lg {
        padding: 20px 25px;
        font-size: 20px;
    }
    .shadow {
        box-shadow: 5px 5px 1px rgb(128, 128, 128);
    }

    .left-content {
        margin-right: 10px;
    }
</style>