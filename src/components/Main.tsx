import { GitHub } from "./svg components/Github"
import { LinkedIn } from "./svg components/Linkedin"
import { Mail } from "./svg components/Mail"

export function Main(){
    return (
        <main className="text-white">
            <section className="w-full mx-auto lg:w-[740px] py-22">
                <h2 className="text-white text-xl opacity-80"><span className="text-red-300">Lorem ipsum dolor</span></h2>
                <h1 className="flex flex-row font-bold text-white text-6xl gap-x-4 pb-4">Lorem ipsum</h1>
                <h2 className="text-white text-xl opacity-80 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-amber-200">Debitis veritatis, fugiat amet sit ducimus. </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur delectus recusandae!!
                </h2>

                <ul className="flex flex-row justify-start gap-x-3 opacity-60">
                    <li>
                        <a className="p-2 border rounded-xl flex flex-row items-center gap-x-3 hover:bg-black" href="https://github.com/"><GitHub widht={20} height={20} color="currentColor"></GitHub>Github</a>
                    </li>

                    <li>
                        <a className="p-2 border rounded-xl flex flex-row items-center gap-x-3 hover:bg-black" href="https://www.linkedin.com/"><LinkedIn widht={20} height={20} color="currentColor"></LinkedIn>LinkedIn</a>
                    </li>

                    <li>
                        <a className="p-2 border rounded-xl flex flex-row items-center gap-x-3 hover:bg-black" href="https://mail.google.com/mail/u/0/#inbox"><Mail widht={20} height={20} color="currentColor"></Mail>Nombreapellido@gmail.com</a>
                    </li>
                </ul>
                
            </section>

            <section className="w-full mx-auto lg:w-[740px] py-22">
                
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">            
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
            </li>

            <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </li>

            <li className="ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
            </li>
        </ol>
                
            </section>
        </main>
    )
}