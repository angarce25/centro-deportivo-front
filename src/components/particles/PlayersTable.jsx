import React from 'react';

function PlayersTable() {
    return (
        <div className="mt-8">
            <h4 className="text-gray-600">Jugadores</h4>
            <div className="flex flex-col mt-6">
                <div className="-my-2 overflow-x-auto">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Equipo</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Primer Pago</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Segundo Pago</th>
                                    <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Tercer Pago</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">Jesús Molinos</td>
                                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 ">Alevín</td>
                                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 ">A</td>
                                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 "></td>
                                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 "></td>
                                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 "></td>
                                </tr>
                                {/* Agregar más filas según sea necesario */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayersTable;
