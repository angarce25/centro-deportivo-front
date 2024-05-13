import React from 'react';

const NewUser = () => {
    return (
        <div className="mt-8">
            <h4 className="text-gray-600">Agrega un nuevo Usuario</h4>

            <div className="mt-4">
                <div className="max-w-lg w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl p-6 bg-white rounded-md shadow-md">
                    <h2 className="text-lg text-gray-700 font-semibold capitalize">Account settings</h2>
                    
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                            <div>
                                <label className="text-gray-700" htmlFor="username">Username</label>
                                <input className="form-input w-full mt-2 rounded-md focus:outline-none focus:border-indigo-600 px-4 py-1" type="text" />
                            </div>

                            <div>
                                <label className="text-gray-700" htmlFor="emailAddress">Email Address</label>
                                <input className="form-input w-full mt-2 rounded-md focus:outline-none focus:border-indigo-600 px-4 py-1" type="email" />
                            </div>

                            <div>
                                <label className="text-gray-700" htmlFor="password">Password</label>
                                <input className="form-input w-full mt-2 rounded-md focus:outline-none focus:border-indigo-600 px-4 py-1" type="password" />
                            </div>

                            <div>
                                <label className="text-gray-700" htmlFor="passwordConfirmation">Password Confirmation</label>
                                <input className="form-input w-full mt-2 rounded-md focus:outline-none focus:border-indigo-600 px-4 py-1" type="password" />
                            </div>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewUser;
