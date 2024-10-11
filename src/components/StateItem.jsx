import React from 'react'
import { getContact } from '../states';
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
        <ol className="container flex flex-col relative border-l border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-4 max-h-full overflow-y-auto">
                <div className="absolute w-3 h-3 bg-stone-200 rouded-full mt-1.5 -left-1.5 
                        border border-white dark:border-stone-900 dark:bg-stone-700" />
                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                        {formattedDate}
                    </span>
                    <h3 className="text-lg font-semibold ">
                        {state.title.rendered}
                    </h3>
                </div>

                <div className='container p-1 m-1'>
{/* Render Links section if array is not empty */}
                {state.link.length > 0 && (
                    <div className='flex-row p-2 m-2'>
                        <h4 className='text-md font-semibold '>
                            Links
                        </h4>
                        <ol>
                            {state.link.map((link) => (
                                <li className='text-wrap'>
                                    <a
                                    href={link}
                                    key={state.id}
                                    target= '_blank'
                                    className="flex hover:bg-gray-300 dark:hover:bg-gray-600 
                                        px-4 py-2 text-sm text-wrap 
                                        text-blue-700 dark:text-blue-200 rounded-md"
                                    role="menuitem"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                    )}
                <div className='flex-row p-2 m-2'>  
                <h4 className='text-md font-semibold'>
                        Information
                </h4>
                <div className='flex-row text-base font-normal whitespace-pre-wrap text-wrap'
                    dangerouslySetInnerHTML={{__html: state.content.rendered}}
                    >
                </div>
                    </div>
                </div>
            </li>
        </ol>
        )
  }