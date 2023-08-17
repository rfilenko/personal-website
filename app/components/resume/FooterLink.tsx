import Link from "next/link"

export default function FooterLink({ children, textLink, href }: {
    children?: React.ReactNode
    textLink: string
    href: string
}) {
    return <Link href={href} className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">{children}{textLink}</Link>
}
