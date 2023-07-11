import Link from "next/link";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>  & {
    children: React.ReactNode;
} & {
    href: string;
};

export function Button({ children, href, ...props }: ButtonProps) {
    return <Link href={href} passHref className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" {...props} >{children}</Link>
}