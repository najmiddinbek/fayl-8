import Link from 'next/link';
import React, { Fragment } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Failed to fetch topics');
        }

        return res.json();
    } catch (error) {
        console.log('Error loading topics: ', error);
    }
};

export default async function page() {
    const a = await getTopics()
    const topics = a?.topics

    const options = Array.from({ length: 28 }, (_, index) => index + 1);

    return (
        <div className='mt-10 max-w-[1400px] ml-auto mr-auto'>
            <h1 className='poppins text-3xl font-bold'>Chortoq tumanidagi barcha maktablar</h1>
            <>
                <div className='w-full h-[10px] bg-transparent rounded-xl'></div>
                <Link href={"/28-maktab"}>
                    <div className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full'>
                        <p className='text-[18px] poppins'>
                            28-maktab
                        </p>
                        <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                            <AiOutlineEye className='text-3xl' />
                        </div>
                    </div>
                </Link>
            </>
        </div>
    );
}