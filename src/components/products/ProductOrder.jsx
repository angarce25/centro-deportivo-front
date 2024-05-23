function ProductOrder() {
    return (
        <div className="mt-8">
            <h2>Mi pedido</h2>
            <div className="flex flex-col mt-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Hijos</th>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">DNI</th>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Correo Electrónico</th>
                                    <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Número de Teléfono</th>
                                </tr>
                            </thead>

                            <tbody className="bg-gray-100">
                                <tr>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">Marta Nosé</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50 ">Active</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50 ">2</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">12345678A</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">maarta@example.com</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b ">123456789</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">Carolina Baeza</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50 ">Inactive</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50 ">3</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">12345678A</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">carol@example.com</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">123456789</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50">Sergio Martinez</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50 ">Active</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50 ">2</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50">12345678A</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50">smartinez@example.com</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50">123456789</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50">Jesús Molinos</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50 ">Active</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50 ">1</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50">12345678A</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-black-50">jesusm@example.com</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b">123456789</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductOrder;