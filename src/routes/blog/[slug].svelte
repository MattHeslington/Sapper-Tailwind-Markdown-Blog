<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<div class="container mx-auto">
    <div class="lg:flex lg:justify-center">
        <article class="lg:w-3/5">
            <header class="lg:mt-48">
                <h1 class="leading-snug lg:text-6xl lg:font-bold">{post.title}</h1>
                <div class="flex items-center lg:mt-6"><img class="w-6 h-6 rounded-full" src="/me.jpg" alt="A small image of me."><span class="ml-2 text-gray-500 high-contrast-grey">Matt, <time pubdate="pubdate" datetime="{post.printDate}">{post.printDate}</time> | {post.printReadingTime}</span></div>
            </header>
            <main role="main" class="content markdown lg:mt-12">
                {@html post.html}
            </main>
            <!--Bio /-->
        </article>
    </div>
</div>

<script context="module">

    export async function preload({ params, query }) {
        // the `slug` parameter is available because
        // this file is called [slug].html
        const res = await this.fetch(`blog/${params.slug}.json`);
        const data = await res.json();

        if (res.status === 200) {
            return { post: data };
            } else {
                this.error(res.status, data.message);
            }
        }
</script>

<script>
    export let post;
</script>