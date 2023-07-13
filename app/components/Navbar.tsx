import Link from "next/link";
import Themebutton from "./ThemeButton";

export default function Navbar() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex justify-between h-16">
                <div className="flex justify-between items-center w-full">
                    <Link href="/">
                        <h1 className="text-2xl font-bold">
                            Home<span className="text-teal-500">App</span>
                        </h1>
                    </Link>

                    <Themebutton />
                </div>
            </div>
        </div>
    );
}