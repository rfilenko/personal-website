export const metadata = {
    title: "Page - Coming soon",
    description: "Project is loading...",
};

export default async function Home() {
    return (
        <div className="bg-visual" style={{
            'background': 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(38,122,78,1) 73%)'
        }}>
            <main className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
                <div className='font-semibold flex flex-col gap-2 justify-between items-center'>
                    <h1 className='my-2 font-sans text-4xl md:text-6xl text-white'>Coming soon</h1>
                    <div className='text-base text-gray-100'>Something is coming up... Stay tuned</div>
                </div>
            </main>
        </div>
    )
}
