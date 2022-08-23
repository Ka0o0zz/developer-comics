import { Text, Container } from "@nextui-org/react";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 max-w-7xl m-auto border-b-2">
            <h1 className="text-3xl font-bold cursor-pointer color-wt">Developer Comic</h1>
            <nav className="pt-2">
                <ul className="flex justify-around gap-3 self-end">
                    <li><Link href='/'><a>Home</a></Link></li>
                    <li><Link href='/'><a>About</a></Link></li>
                    <li><Link href='/'><a>Search</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}