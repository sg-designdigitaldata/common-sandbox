<script lang="ts">


	export let onChange;
	let pCode = '';
	$: onChange(pCode);



};
</script>

<fieldset>
	<div class="ds_question">
		<label class="ds_label" for="address-postcode"> Postcode </label>
		<input
			class="ds_input ds_input--fixed-10"
			type="text"
			name="address-postcode"
			id="address-postcode"
			autocomplete="postal-code"
			maxlength="10"
			bind:value={pCode}
		/>
	</div>
	<button class="ds_button ds_no-margin--top" type="submit">Find address</button>
</fieldset>
<p><button class="ds_link ds_no-margin" type="button">Or type in your full address</button></p>
