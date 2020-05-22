<svelte:head>
    <title>CHANGE THIS</title>
</svelte:head>

    
<div class="mt-10 lg:mt-32">
    <p>
        <span class="font-mono text-xl line-through lg:text-3xl text-myBlue hash">#nocode</span>
        <span class="font-mono lg:pl-4 lg:text-3xl text-myBlue hash">#greatcode</span>
    </p>
</div>


<main class="mt-4 lg:w-1/2 lg:mt-8 md:w-1/2">
    <p class="text-4xl font-bold md:text-6xl">Hi, I'm Matt.</p>
    <p class="mt-5 text-xl font-light leading-snug lg:text-4xl lg:mt-8">I built progressive web applications that score perfectly with Google for performance, seo, best practices and accessibility.&nbsp;<a href="/about"><span class="text-xs text-gray-500 lg:text-base high-contrast-grey">Find out more.</span></a></p>
</main>


<div class="flex items-center invisible lg:mt-12 lg:visible">
    <div>
        <img src="/me.jpg" alt="This is a small picture of me." class="w-8 h-8 border border-gray-800 rounded-full lg:w-10 lg:h-10">
    </div>
    <div class="ml-4"><p class="font-thin text-gray-500 lg:text-xl high-contrast-grey">Press M anywhere to contact me.</p></div>
</div>

<div class="mt-12 lg:mt-32">
    <div>
        <h3 class="text-xl font-normal">Blog Posts</h3>
    </div>
    {#each posts as post, index}
        <article>
            <a class="mt-4 mb-8 lg:mb-12 lg:flex lg:mt-8 md:flex" rel="prefetch" href="blog/{post.slug}">
                <div class="lg:w-1/2 lg:pr-6 md:w-1/2 md:pr-6">
                    <img class="object-cover w-full h-32 lg:h-64" src="{post.image_url}" alt="{post.title}">
                </div>
                <div class="mt-4 lg:mt-0 lg:w-1/2 lg:pl-6 md:w-1/2 md:mt-0 md:pl-6">
                    <h2 class="text-2xl font-normal lg:text-4xl lg:font-light">{post.title}</h2>
                    <p class="mt-2 text-xl font-light leading-snug md:text-lg lg:text-2xl">{post.excerpt}</p>
                    <p class="mt-2 text-base text-gray-500 high-contrast-grey"><time pubdate="pubdate" datetime="{post.printDate}">{post.printDate}</time> | {post.printReadingTime}</p>
                </div>
            </a>
        </article>
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

<!--style>
    :global(body) {
        background-color: #f2eee2;
        color: #0084f6;
        transition: background-color 0.3s
    }
    :global(body.dark-mode) {
        background-color: #1d3040;
        color: #bfc2c7;
    }
</style-->