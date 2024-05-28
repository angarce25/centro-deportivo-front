const OrdersCart
 = () => {
    const {totalPrice, totalProducts, } = props

    return (
        <div className="mt-8">
            <h2 className="text-xl font-medium m-4">Mi pedido</h2>
            <div className="flex flex-col mt-8 p-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Total €</th>
                                     
                                </tr>
                            </thead>

                            <tbody className="bg-gray-100">
                                <tr>
                                   
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50 ">{totalProducts}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50"></td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">01.11.24</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b ">{totalPrice}</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersCart
;