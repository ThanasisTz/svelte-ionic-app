module.exports = `<script lang="ts">
    <IMPORTS>
    import { <COMPONENT> } from '@ionic/core/components/<TAG>';
	import { defineComponent } from 'ionic-svelte';
    
    <EXTRA>

    <DECLRS>
    defineComponent('<TAG>', <COMPONENT>);
</script>

<<TAG>
<PROPS>
<IONEVENTS>
{...$$props}
on:focus
on:blur
on:fullscreenchange
on:fullscreenerror
on:scroll
on:cut
on:copy
on:paste
on:keydown
on:keypress
on:keyup
on:auxclick
on:contextmenu
on:dblclick
on:mousedown
on:mouseenter
on:mouseleave
on:mousemove
on:mouseover
on:mouseout
on:mouseup
on:pointerlockchange
on:pointerlockerror
on:select
on:wheel
on:drag
on:dragend
on:dragenter
on:dragstart
on:dragleave
on:dragover
on:drop
on:touchcancel
on:touchend
on:touchmove
on:touchstart
on:pointerover
on:pointerenter
on:pointerdown
on:pointermove
on:pointerup
on:pointercancel
on:pointerout
on:pointerleave
on:gotpointercapture
on:lostpointercapture
on:click><SLOTCODE> </<TAG>>
`;