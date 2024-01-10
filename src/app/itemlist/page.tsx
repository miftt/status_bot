const ListItems = () => {
    return ( 
            <div className="flex items-center justify-center mt-24">
                <table className="w-1/2 justify-center items-center text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Item
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rarity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Item ID
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Dirt
                            </th>
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4">
                                2
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
     );
}
 
export default ListItems;