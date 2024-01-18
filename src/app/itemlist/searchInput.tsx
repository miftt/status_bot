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
                    <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="inline-flex w-2/4 px-4 py-2 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white">
                        <option value="q">Name</option>
                        <option value="id">itemID</option>
                    </select>
                    <input
                        value={searchQuery || ''}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search here..."
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={clearSearch}
                            className="text-white hover:bg-red-500 absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 mb-1 mr-[84px]"
                        >
                            <FiX />
                        </button>
                    )}
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchInput;