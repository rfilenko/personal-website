
export default function Footer() {
    return (
        <footer className="footer relative py-4 text-xs text-gray-500">
            <p className="max-w-5xl mx-auto  px-4 md:px-8">
                &copy;Copyright <span>{ new Date().getFullYear()}</span>
            </p>
        </footer>
    );
}