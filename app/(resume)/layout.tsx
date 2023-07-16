
const position = `</FrontendDeveloper>`
export const metadata = {
    title: `Roman Filenko-${position}`,
    description: "Simple usefull HomeApp",
};

export default function ResumeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <main className="">
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: 'radial-gradient(600px at 1008px 241px, rgba(29, 78, 216, 0.15), transparent 80%)' }}></div>
            {children}
        </main>
    );
}