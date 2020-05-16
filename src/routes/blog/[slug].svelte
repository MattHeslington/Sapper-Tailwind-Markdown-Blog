<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<div class="container mx-auto">
    <div class="lg:flex lg:justify-center">
        <div class="lg:w-3/5">
            <header class="lg:mt-48">
                <h1 class="lg:text-5xl lg:font-bold lg:text-myWhite">{post.title}</h1>
                <p class="lg:mt-2 lg:text-base lg:text-gray-500">{post.printDate} | {post.printReadingTime}</p>
            </header>
            <article class="content markdown">
                {@html post.html}
            </article>
            <Bio />
        </div>
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
  import Bio from '../../components/Bio.svelte'
  export let post
</script>