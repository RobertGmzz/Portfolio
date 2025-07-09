import { GitHub } from "./svg components/Github"
import { LinkedIn } from "./svg components/Linkedin"
import { Mail } from "./svg components/Mail"
import { Project } from "./Project"

export function Main(){
    return (
        <main id="about" className="text-white">
            <section className="w-full mx-auto lg:w-[740px] pt-40">
                <h1 className="flex flex-row font-bold text-white text-4xl lg:text-7xl gap-x-4 pb-4">Lorem ipsum</h1>
                <h2 className="text-white text-xl pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-amber-200">Debitis veritatis, fugiat amet sit ducimus. </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus recusandae!!
                </h2>

                <ul className="flex flex-row justify-start gap-x-3 ">
                    <li className="opacity-70 hover:opacity-100">
                        <a className="p-2 border rounded-xl flex flex-row items-center gap-x-3 hover:bg-[#1d1d1d] hover:scale-[1.05]" href="https://github.com/"><GitHub widht={20} height={20} color="currentColor"></GitHub>Github</a>
                    </li>

                    <li className="opacity-70 hover:opacity-100">
                        <a className="p-2 border rounded-xl flex flex-row items-center gap-x-3 hover:bg-[#1d1d1d] hover:scale-[1.05]" href="https://www.linkedin.com/"><LinkedIn widht={20} height={20} color="currentColor"></LinkedIn>LinkedIn</a>
                    </li>

                    <li className="opacity-70 hover:opacity-100">
                        <a className="p-2 border rounded-xl flex flex-row items-center gap-x-3 hover:bg-[#1d1d1d] hover:scale-[1.05]" href="https://mail.google.com/mail/u/0/#inbox"><Mail widht={20} height={20} color="currentColor"></Mail>Nombre@gmail.com</a>
                    </li>
                </ul>
            </section>

            <section id="projects" className="w-full mx-auto lg:w-[725px] py-35">
                <h2 className="flex flex-row font-semibold text-white text-4xl mb-8">Experiencia laboral</h2>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4">
                        <Project 
                            title="Latest project" 
                            date="Released on January 13th, 2022" 
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni itaque similique porro ab quae? Ducimus placeat accusamus explicabo doloribus quo alias odio non. Laudantium inventore, quis tenetur ab assumenda nam!">
                        </Project>

                        <Project 
                            title="Second project" 
                            date="Released on December 7th, 2021" 
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ea unde placeat corrupti nihil aperiam sint beatae, nulla facere? Nisi itaque placeat ducimus natus debitis quas doloribus similique? Eos, voluptate!">
                        </Project>

                        <Project 
                            title="First project" 
                            date="Released on December 2nd, 2021" 
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste accusamus optio? Accusantium nulla tenetur dignissimos doloremque aliquam corporis, sed laudantium in veritatis voluptates harum repellat exercitationem deleniti officiis saepe?">
                        </Project>
                    </ol>
            </section>
        </main>
    )
}