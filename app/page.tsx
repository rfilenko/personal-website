import Image from "next/image";

export const metadata = {
	title: "Coming soon page",
	description: "Projecti is loading...",
};

export default async function Home() {
	return (
		<>
			<div className="bg-visual absolute w-full h-full inset-0">
				<Image src="/gradient.jpg" alt="visual" fill sizes='100vw' />
			</div>
			<main className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
				<div className='font-semibold flex flex-col gap-2 justify-between items-center'>
					<h1 className='my-2 font-sans text-4xl md:text-6xl text-white'>Coming soon</h1>
					<div className='text-base text-secondary text-gray-400'>Something is coming up... Stay tuned</div>
				</div>
			</main>
		</>
	)
}
