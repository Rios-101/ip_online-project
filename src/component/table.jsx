


const Table = ({table,dragStart})=>{

    

    return(
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Customer id
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Customer Name
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Customer Location
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            DropOff Location
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((cus)=>{
                            return(
                            <tr className="border-b" onDragStart={e=> dragStart(e,cus.customerId)} draggable key={cus.customerId}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cus.customerId}</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {cus.customerName}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {cus.customerLocation}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {cus.dropOffLocation}
                                </td>
                            </tr>
                            )
                        })}
                        
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Table