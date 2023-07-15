
export const metadata = {
	title: "Coming soon",
	description: "Loading...",
};

export default async function Home() {
	return (
		<div className='font-semibold flex flex-col gap-2 justify-between items-center'>
			<h1 className='my-2 text-3xl text-red-700'>Coming soon</h1>
			<div className='text-base text-secondary text-gray-300'>Something is coming up... Stay tuned</div>
		</div>
	)
}
