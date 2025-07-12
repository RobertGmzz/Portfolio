import { ExpIcon } from "./svg components/Expicon"

type infoExp = {
    title: string
    date: string
    description: string
}

export function Experience({title, date, description}: infoExp){
    return (
        <li className="mb-10 ms-6">
            <article>
                <ExpIcon></ExpIcon>

                <h3 className="flex items-center mb-2 text-2xl md:text-3xl font-semibold text-amber-200">{title}</h3>

                <time className="block mb-2 text-sm text font-normal leading-none text-gray-400">{date}</time>

                <p className="my-3 text-sm sm:text-base font-normal text-white text-pretty">{description}</p>
            </article>
        </li>
    )
}