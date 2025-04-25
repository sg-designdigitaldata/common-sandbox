<script lang="ts">
    import PostCode from "$lib/components/PostCode.svelte" ;

    let postcode = $state('');
</script>

<h2>
    Postcode lookup
</h2>

<PostCode  />

