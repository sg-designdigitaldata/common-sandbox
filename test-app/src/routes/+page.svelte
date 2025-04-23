<script lang="ts">
    import PostCode from "$lib/components/PostCode.svelte" ;

    let postcode = $state('');
</script>

<h2>
    Postcode lookup
</h2>

<!-- input component -->

<PostCode onChange={newValue => postcode = newValue}/>

<p>You entered: {postcode.toUpperCase()}</p>

<!-- link button component -->