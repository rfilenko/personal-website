'use client'
import { useState } from 'react';
import toast from 'react-hot-toast';
import ResumeSection from './ResumeSection'

export default function SectionContact() {
    const formApikey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'Blob'
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.BaseSyntheticEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", formApikey)

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
        const jsonData = await res.json()

        if (jsonData?.data?.name && jsonData?.data?.email) {
            if (jsonData.success) {
                setResult(jsonData.message);
                toast.success(jsonData.message);
            } else {
                setResult(jsonData.message);
                toast.error(jsonData);
            }
        } else {
            toast.error('Please fil out the form.');
        }
    };

    return <>
        <ResumeSection sectionId="section-contact" className='flex flex-col gap-2 items-center max-w-md mx-auto'>
            <h2 className='mb-2 text-2xl font-sans font-semibold'>Contact me</h2>

            <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full'>
                <input type="hidden" name="subject" value="🥳 From romanfilenko.dev😲"></input>
                <input type="hidden" name="from_name" value="🔥New Message"></input>

                <input className="bg-teal-400/10 min-h-[2.8rem] border border-teal-300 rounded-md p-4 text-teal-300" type="text" name="name" placeholder='Enter name' required />
                <input className='bg-teal-400/10 min-h-[2.8rem] border border-teal-300 rounded-md p-4 text-teal-300' type="email" name="email" placeholder='Enter email' required />
                <textarea className='bg-teal-400/10 min-h-[2.8rem] border border-teal-300 rounded-md p-4 text-teal-300 ' name="message" placeholder='Enter message'></textarea>
                <input type={'Submit'} className='cursor-pointer align-self-start min-h-[3rem] capitalize items-center rounded-full bg-teal-400/10 px-3 py-1 text-base font-medium leading-5 flex justify-center text-teal-300 hover:text-white hover:bg-teal-500 transition' />
            </form>

        </ResumeSection>
    </>
}



