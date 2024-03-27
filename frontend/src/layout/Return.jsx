import React, { useState } from "react";

export default function Return() {
  
  const [borrowedEquipment, setBorrowedEquipment] = useState([
    {
      id: 1,
      name: "Laptop",
      borrowedDate: "2024-03-01",
      duration: "7 days",
      returnedDate: "2024-03-08",
      status: "Returned",
    },
    {
      id: 2,
      name: "Projector",
      borrowedDate: "2024-02-15",
      duration: "Ongoing",
      returnedDate: "-",
      status: "On Loan",
    },
    {
      id: 3,
      name: "Projector",
      borrowedDate: "2024-02-15",
      duration: "Ongoing",
      returnedDate: "-",
      status: "On Loan",
    },
    {
      id: 4,
      name: "Projector",
      borrowedDate: "2024-02-15",
      duration: "Ongoing",
      returnedDate: "-",
      status: "On Loan",
    },
    {
      id: 5,
      name: "Projector",
      borrowedDate: "2024-02-15",
      duration: "Ongoing",
      returnedDate: "-",
      status: "On Loan",
    },
    {
      id: 6,
      name: "Projector",
      borrowedDate: "2024-02-15",
      duration: "Ongoing",
      returnedDate: "-",
      status: "On Loan",
    },
    {
      id: 7,
      name: "Projector",
      borrowedDate: "2024-02-15",
      duration: "Ongoing",
      returnedDate: "-",
      status: "On Loan",
    },
    {
      id: 8,
      name: "Projector",
      borrowedDate: "2024-02-15",
      duration: "Ongoing",
      returnedDate: "-",
      status: "On Loan",
    },
    {
      id: 9,
      name: "Projector",
      borrowedDate: "2024-02-15",
      duration: "Ongoing",
      returnedDate: "-",
      status: "On Loan",
    },
    {
      id: 10,
      name: "Projector",
      borrowedDate: "2024-02-15",
      duration: "Ongoing",
      returnedDate: "-",
      status: "On Loan",
    },
    {
      id: 11,
      name: "Projector",
      borrowedDate: "2024-02-15",
      duration: "Ongoing",
      returnedDate: "-",
      status: "On Loan",
    },
    
  ]);

  const returnEquipment = (id) => {
    const updatedEquipment = borrowedEquipment.map((equipment) => {
      if (equipment.id === id) {
        return { ...equipment, returnedDate: new Date().toISOString().slice(0, 10), status: "Returned" };
      }
      return equipment;
    });
    setBorrowedEquipment(updatedEquipment);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Borrowing and Returning History
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Equipment Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Borrowed Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Duration
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Returned Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {borrowedEquipment.map((equipment) => (
                  <tr key={equipment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {equipment.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {equipment.borrowedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {equipment.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {equipment.returnedDate}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${equipment.status === "Returned" ? "text-green-600" : "text-blue-600"}`}>
                      {equipment.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {equipment.status === "On Loan" && (
                        <div className="flex items-center">
                          <button
                            onClick={() => returnEquipment(equipment.id)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Return
                          </button>
                          {equipment.status === "Returned" && (
                            <span className="ml-2 text-green-600">Returned</span>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
