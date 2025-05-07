<script lang="ts">
	let postcode = $state('EH147AZ');
	let address = $state('');
	let errorMessage = $state('');
	let addresses = $state([]);

	async function fetchAddress() {
		errorMessage = '';
		address = '';
		if (!postcode.trim()) {
			errorMessage = 'Please enter a valid postcode';
			return {};
		}

		const response = await fetch('/api/postcode?' + new URLSearchParams({ postcode: postcode }), {
			method: 'GET'
		});

		if (!response.ok) {
			errorMessage = 'Unable to fetch addresses';
		} else {
			if (response != null) {
				var json = await response.json();
				if (json.header.totalresults > 0) {
					addresses = json.results;
				} else {
					errorMessage = 'No addresses found at that postcode';
				}
			}
		}
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
	<button class="ds_button ds_no-margin--top" type="button" onclick={fetchAddress}
		>Find address</button
	>
</fieldset>
<p><button class="ds_link ds_no-margin" type="button">Or type in your full address</button></p>

{#if errorMessage}
	<p class="ds_question__error-message" id="error-message">{errorMessage}</p>
{/if}

{#if addresses.length > 0}
	<div class="ds_select-wrapper ds_input--fluid-one-half">
		<select name="finalAddress" id="finalAddress" multiple class="ds_select">
			{#each addresses as addr}
				<option value={addr.DPA.UDPRN}>{addr.DPA.ADDRESS}</option>
			{/each}
		</select>
	</div>
{/if}
