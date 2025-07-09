import { ProjectIcon } from "./svg components/Projecticon"

type infoProject = {
    title: string
    date: string
    description: string
}

export function Project({title, date, description}: infoProject){
    return (
        <li className="mb-10 ms-6">
            <article>
                <ProjectIcon></ProjectIcon>

                <h3 className="flex items-center mb-2 text-2xl font-semibold text-amber-200">{title}</h3>

                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{date}</time>

                <p className="my-3 text-base font-normal text-white  text-pretty">{description}</p>
            </article>
        </li>
    )
}




