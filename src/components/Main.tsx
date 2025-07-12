import { GitHub } from "./svg components/Github"
import { LinkedIn } from "./svg components/Linkedin"
import { Mail } from "./svg components/Mail"
import { Experience } from "./Expericence"
import { Project } from "./Projectcard"

export function Main(){
    return (
        <main id="about" className="text-white px-5">
            <section className="w-full mx-auto sm:w-[600px] lg:w-[800px] pt-40">
                <h1 className="flex flex-row font-bold text-white text-4xl md:text-5xl gap-x-4 pb-4">Titulo random</h1>
                <h2 className="text-white text-base md:text-xl pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-amber-300 font-bold">Debitis veritatis, fugiat amet sit ducimus. </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus recusandae!!
                </h2>

                <ul className="flex flex-row justify-start gap-3 flex-wrap">
                    <li className="opacity-70 hover:opacity-100 hover:scale-[1.05]">
                        <a className="py-1 px-3 border rounded-xl flex flex-row items-center gap-x-3 hover:bg-[#1d1d1d]" href="https://github.com/"><GitHub widht={20} height={20} color="currentColor"></GitHub>Github</a>
                    </li>

                    <li className="opacity-70 hover:opacity-100 hover:scale-[1.05]">
                        <a className="py-1 px-3 border rounded-xl flex flex-row items-center gap-x-3 hover:bg-[#1d1d1d]" href="https://www.linkedin.com/"><LinkedIn widht={20} height={20} color="currentColor"></LinkedIn>LinkedIn</a>
                    </li>

                    <li className="opacity-70 hover:opacity-100 hover:scale-[1.05]">
                        <a className="py-1 px-3 border rounded-xl flex flex-row items-center gap-x-3 hover:bg-[#1d1d1d]" href="https://mail.google.com/mail/u/0/#inbox"><Mail widht={20} height={20} color="currentColor"></Mail>Nombre@gmail.com</a>
                    </li>
                </ul>
            </section>

            <section id="projects" className="w-full sm:w-[600px] lg:w-[760px] py-35">
                <h2 className="flex flex-row font-semibold text-white text-2xl md:text-4xl mb-6">Experiencia</h2>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4">
                        <Experience 
                            title="Latest project" 
                            date="Released on July 22th, 2025" 
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni itaque similique porro ab quae? Ducimus placeat accusamus explicabo doloribus quo alias odio non. Laudantium inventore, quis tenetur ab assumenda nam!">
                        </Experience>

                        <Experience 
                            title="Third project" 
                            date="Released on June 6th, 2025" 
                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ea unde placeat corrupti nihil aperiam sint beatae, nulla facere? Nisi itaque placeat ducimus natus debitis quas doloribus similique? Eos, voluptate!">
                        </Experience>

                        <Experience 
                            title="Second project" 
                            date="Released on January 2nd, 2025" 
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste accusamus optio? Accusantium nulla tenetur dignissimos doloremque aliquam corporis, sed laudantium in veritatis voluptates harum repellat exercitationem deleniti officiis saepe?">
                        </Experience>

                        <Experience 
                            title="First project" 
                            date="Released on December 25th, 2024" 
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ipsa sequi, eligendi odio ratione recusandae minima quod reiciendis provident! Fugiat, dicta. A nesciunt suscipit aliquam ex quisquam error expedita consectetur.">
                        </Experience>
                    </ol>

                    <section className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
                        <h2 className="flex flex-row font-semibold text-white text-2xl md:text-4xl mb-6">Proyectos</h2>
                            <div className="flex flex-row flex-wrap justify-center gap-8">
                                <Project 
                                title="Titulo radom" 
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem in dolor atque voluptatum sapiente."
                                src="../public/proyecto.webp"
                                alt="foto de proyecto"
                                ></Project>

                                <Project 
                                title="Titulo radom" 
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem in dolor atque voluptatum sapiente."
                                src="../public/proyecto.webp"
                                alt="foto de proyecto"
                                ></Project>
                            </div>
                    </section>
            </section>
        </main>
    )
}