<script lang="ts">
    import "$lib/app.sass"
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";

</script>

<Header />

<!-- Slot is where the body goes -->
<div class="ds_page__middle">
	<div class="ds_wrapper">
		<main id="main-content">
			<slot />
		</main>
	</div>
</div>


<div class="ds_page__bottom">
    <div class="ds_back-to-top" data-module="ds-back-to-top">
        <a href="#page-top" class="ds_back-to-top__button js-has-tracking-event" data-navigation="backtotop">Back to
            top <svg class="ds_icon  ds_back-to-top__icon" aria-hidden="true" role="img">
                <use href="/icons.stack.svg#arrow_upward"></use>
            </svg></a>
    </div>
    <footer class="ds_site-footer">
        <Footer />        

        <script type="text/javascript">
            // Initialize SG Design Library
            document.addEventListener("DOMContentLoaded", function () {
                window.DS.initAll();
            });
        </script>
    </footer>
</div>
