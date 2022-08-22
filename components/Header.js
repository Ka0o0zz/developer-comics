import { Text } from "@nextui-org/react";
import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <div>
                <Text h1>Developer Comic</Text>
            </div>
            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                </ul>
            </nav>
        </header>
    )
}