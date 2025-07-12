type infoProject = {
    title: string
    description: string
    src: string
    alt: string
}

export function Project({title, description, src, alt}: infoProject){
    return(
        <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
            <div className="w-full md:w-1/2">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <img className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" src={src} alt={alt}/>
                </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>

                    <ul>aca van las tecnologias usadas</ul>

                    <p className="mt-2 text-gray-700 dark:text-gray-400">{description}</p>

                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                        **aca van links relacionados al proyecto**
                    </footer>
                </div>
            </div>
        </article>
    )
}