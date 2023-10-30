import React from 'react'
import { getContact } from '../contacts';
import { useLoaderData } from 'react-router-dom';


export async function loader({ params }) {
    const state = await getContact(params.slug);
    return { state };
    console.log(state)
  }


 export default function StateItem () {
    const { state } = useLoaderData();
    console.log(state)

    const str = JSON.stringify(state.modified)
    console.log(str)
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
                        {state.title.rendered}
                    </h3>
                </p>
                <p className='flex-row my-2 text-base font-normal text-stone-500 dark:text-stone-400 p-5 m-5'
                    dangerouslySetInnerHTML={{__html: state.content.rendered}}
                >
                </p>
            </li>
        </ol>
        )
  }