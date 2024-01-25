'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const getData = async (url: string) => {
    await new Promise((r) => setTimeout(r, 300));
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}


interface Item {
    itemID: number;
    name: string;
    rarity: number;
}

const ListItems =  () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const search = useSearchParams();
    const searchQuery = search.get('q');
    const idQuery = search.get('id');
    const queryType = searchQuery ? 'q' : 'id';
    const queryValue = searchQuery || idQuery || '';
    const encodedQueryValue = encodeURI(queryValue);
    const {data} = useSWR<{items: Item[]}>(`${process.env.NEXT_PUBLIC_API_URL}/api/itemlist?${queryType}=${encodedQueryValue}&page=${currentPage}&itemsPerPage=${itemsPerPage}`,getData);
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);
    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return ( 
            <>
                <div className="flex items-center justify-center mt-2">
                    <table className="w-1/2 justify-center items-center text-sm text-left table table-zebra rtl:text-right">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Item ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rarity
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.items?.map((item) => (
                                <tr key={item.itemID} className="bg-white border-b">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.itemID}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.rarity}
                                    </td>
                                </tr>  
                            ))}
                            {data?.items?.length === 0 && <tr><td colSpan={7} className="text-error text-center text-base">Item Not Found</td></tr>}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col justify-center items-center mb-20">
                        <span className="text-sm text-gray-700 dark:text-gray-400">
                            Showing <span className="font-semibold text-gray-900 ">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-semibold text-gray-900">{currentPage * itemsPerPage}</span> of <span className="font-semibold text-gray-900">{data?.items?.length}</span> Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 ? 'cursor-not-allowed' : ''}`} onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                                <FiArrowLeft size={17}/>
                                Prev
                            </button>
                            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => paginate(currentPage + 1)}>
                                Next
                                <FiArrowRight size={17}/>
                            </button>
                        </div>
                </div>
            </>
     );
}
 
export default ListItems;
