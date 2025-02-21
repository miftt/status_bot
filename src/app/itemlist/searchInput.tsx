'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch, FiX } from "react-icons/fi";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('q');
    const router = useRouter();

    const onSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/itemlist?${searchType}=${encodedSearchQuery}`);
    }

    const clearSearch = () => {
        setSearchQuery('');
        router.push('/itemlist');
    }

    return (
        <div className="flex justify-center">
            <form className="w-2/4 relative" onSubmit={onSearch}>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="inline-flex w-2/8 px-4 py-2 border-gray-300 border-x-2 border-t-2 hover:bg-gray-100">
                        <option value="q">Short by Name</option>
                        <option value="id">Short by itemID</option>
                    </select>
                    <input
                        value={searchQuery || ''}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search here..."
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={clearSearch}
                            className="hover:bg-slate-400 absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 mb-1 mr-[84px]"
                        >
                            <FiX />
                        </button>
                    )}
                    <button
                        type="submit"
                        className="text-white btn- absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchInput;