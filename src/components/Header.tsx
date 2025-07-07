export function Header(){

    return (
        <header className="flex justify-between items-center p-3 w-[1120px] mx-auto">
            <img className="size-12 rounded-full" 
            src="../public/icono.png" 
            alt="robert photo"/>

            <nav className="flex text-white gap-x-8">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}