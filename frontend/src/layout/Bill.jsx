import React from "react";

export default function Bill() {
    return (

       <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
  <h1 className="font-bold text-2xl my-4 text-center text-blue-600">IT RMU</h1>
  <hr className="mb-2" />
  <div className="flex justify-between mb-6">
    <h1 className="text-lg font-bold">ข้อมูลผู้ยืม</h1>
    <div className="text-gray-700">
      <div>Date: 01/05/2023</div>
      <div>รายละเอียด #: INV12345</div>
    </div>
  </div>
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-4">รายการยืม</h2>
    <div className="text-gray-700 mb-2">Rewat Sritom</div>
    <div className="text-gray-700 mb-2">123/345</div>
    <div className="text-gray-700 mb-2">พลอยเพรช, ริมคลอง 12345</div>
    <div className="text-gray-700">643170010322@rmu.ac.th</div>
  </div>
  <table className="w-full mb-8">
    <thead>
      <tr>
        <th className="text-left font-bold text-gray-700">Description</th>
        <th className="text-right font-bold text-gray-700">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-left text-gray-700">กลองคู่</td>
        <td className="text-right text-gray-700">1</td>
      </tr>
      <tr>
        <td className="text-left text-gray-700">กาน้ำร้อน</td>
        <td className="text-right text-gray-700">1</td>
      </tr>
      <tr>
        <td className="text-left text-gray-700">โต๊ะปิงปอง</td>
        <td className="text-right text-gray-700">1</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td className="text-left font-bold text-gray-700">Total</td>
        <td className="text-right font-bold text-gray-700">1</td>
      </tr>
    </tfoot>
  </table>
  <div className="text-gray-700 mb-2">กรุณาส่งคืนภายในเวลาที่กำหนด</div>
  <div className="text-gray-700 text-sm">Please return it within the specified time.</div>
</div>

      
  
    );
  }