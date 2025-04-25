<script lang="ts">

	let postcode = $state('');
	let address = $state('');
	let errorMessage = $state('');

	async function fetchAddress() {
		errorMessage = '';
		address = '';
		if(!postcode.trim()) {
			errorMessage = 'Please enter a valid postocde';
			return {};
		}
		
		return {};
	}
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
			bind:value={postcode}
		/>
	</div>
	<button class="ds_button ds_no-margin--top" type="button" onclick={fetchAddress}>Find address</button>
</fieldset>
<p><button class="ds_link ds_no-margin" type="button">Or type in your full address</button></p>

{#if errorMessage}
	<p class="ds_question__error-message" id="error-message">{errorMessage}</p>
{/if}
