const NotFound = () => {
  return (
    <div class="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div class="flex flex-shrink-0 justify-center">
            <a href="/" class="inline-flex">
              <span class="sr-only">Ops, temos um problema</span>
            </a>
          </div>
          <div class="py-16">
            <div class="text-center">
              <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Essa página não foi encontrada.</h1>
              <p class="mt-2 text-base text-gray-500">Desculpe, aparentemtente essa página não foi localizada, volte para página anterior e navegue normalmente.</p>
            </div>
          </div>
        </main>
    </div>
  )
};

export default NotFound;