import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
    return (
        <footer className="footer relative py-4 text-xs text-gray-500 ">
            <div className="max-w-5xl mx-auto px-4 md:px-16 w-full flex flex-wrap gap-2 justify-between items-center">
                <p className="">
                    Roman Filenko &copy; <span>{new Date().getFullYear()}</span>
                </p>

                <ul className="social flex gap-1">
                    <li>
                        <a href="https://github.com/rfilenko"><FaGithub size={12} /></a>
                    </li>
                    <li>
                        <a href="mailto:roman.filenko@gmail.com"><BiLogoGmail size={12} /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}