export function Header(){
    return (
        <header id="#top" className="flex justify-between items-center w-full p-2">
            <img className="size-12 rounded-full"
            src="../public/icono.png"
            alt="robert photo"/>

            <nav className="flex text-white gap-x-8">
                <a href="#top">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}