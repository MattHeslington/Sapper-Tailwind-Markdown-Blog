<svelte:head>
    <title>Contact</title>
</svelte:head>

<div class="container mx-auto markdown">

    <div class="lg:flex lg:justify-center">
        <article class="lg:w-3/5">
            <header class="lg:mt-48">
                <h1 class="leading-snug lg:text-6xl lg:font-bold">Contact me and that</h1>
            </header>
            <div class="flex items-center w-full h-screen bg-teal-lighter">
                <div class="w-full p-8 m-4 bg-white rounded shadow-lg md:max-w-sm md:mx-auto">
                    <h1 class="block w-full mb-6 text-center">Sign Up</h1>
                    <form class="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
                        <div class="flex flex-col mb-4 md:w-1/2">
                            <label class="mb-2 text-lg font-bold tracking-wide uppercase" for="first_name">First Name</label>
                            <input class="px-3 py-2 border md:mr-2" type="text" name="first_name" id="first_name">
                        </div>
                        <div class="flex flex-col mb-4 md:w-1/2">
                            <label class="mb-2 text-lg font-bold uppercase md:ml-2" for="last_name">Last Name</label>
                            <input class="px-3 py-2 border md:ml-2" type="text" name="last_name" id="last_name">
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label class="mb-2 text-lg font-bold uppercase" for="email">Email</label>
                            <input class="px-3 py-2 border" type="email" name="email" id="email">
                        </div>
                        <div class="flex flex-col mb-6 md:w-full">
                            <label class="mb-2 text-lg font-bold uppercase" for="password">Password</label>
                            <input class="px-3 py-2 border" type="password" name="password" id="password">
                        </div>
                        <button class="block p-4 mx-auto text-lg text-white uppercase rounded bg-teal hover:bg-teal-dark" type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        </article>
    </div>
</div>