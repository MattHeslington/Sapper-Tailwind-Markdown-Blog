<svelte:head>
    <title>Blog</title>
</svelte:head>

<div class="container p-12 mx-auto markdown">
    <h1>Blog</h1>
    {#each posts as post, index} {#if index}
    <hr />
    {/if}
    <div class="post-item">
        <h2>
            <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </h2>
        <p>{post.excerpt}</p>

        <!--img src="post.image" alt="post.title" /-->
        <div class="post-item-footer">
            <span class="post-item-date">— {post.printDate}</span>
        </div>
    </div>
    {/each}
</div>

<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`blog.json`)
            .then((r) => r.json())
            .then((posts) => {
                return { posts };
            });
    }
</script>

<script>
    export let posts;
</script>

<style></style>
