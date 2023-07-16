export default function ResumeSection({ children, sectionId, className }: {
    children: React.ReactNode
    sectionId: string
    className?: string
}) {
    return <section id={sectionId} className={`md:min-h-[30rem] mb-8 ${className ? className : ''}`}> {children}</section>
}
