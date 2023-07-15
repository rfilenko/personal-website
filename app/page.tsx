
export const metadata = {
	title: "Coming soon page",
	description: "Projecti is loading...",
};

export default async function Home() {
	return (
		<main className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-gradient-to-r from-gray-850 to-gray-900 ">
			<div className='font-semibold flex flex-col gap-2 justify-between items-center'>
				<h1 className='my-2 text-3xl text-teal-600'>Coming soon</h1>
				<div className='text-base text-secondary text-gray-300'>Something is coming up... Stay tuned</div>
			</div>
		</main>
	)
}
