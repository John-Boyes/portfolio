import React, { Component } from 'react'
import { getContact } from '../contacts';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
    const contact = await getContact(params.contact.slug);
    return { contact };
  }



 export default function StateItem () {
    //const { contact } = useLoaderData();
    console.log(contact)

    const str = JSON.stringify(modified)
    console.log(modified)
    const formattedDate = str.substring(1, 11);

    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rouded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                        {formattedDate}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                        {title}
                    </h3>
                    {/* <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>
                        {content}
                    </div> */}
                </p>
                <p className='my-2 text-base font-normal text-stone-500 dark:text-stone-400'
                    dangerouslySetInnerHTML={{__html: content}}
                >
                </p>
            </li>
        </ol>
        )
  }