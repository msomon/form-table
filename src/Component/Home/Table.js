import React from 'react';

const Table = ({inf}) => {
  const {date,amount,paymentMode,remark} = inf
  


  return (
   <div className="ml-[500px] mb-10 ">
  <table className="table w-[700px] border-4 border-indigo-600  ">
    
    <thead>
      <tr>
        <th>Date</th>
        <th>Amount</th>
        <th>Payment Mode</th>
        <th>remark</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>{date}</th>
        <td>{amount}</td>
        <td>{paymentMode}</td>
        <td>{remark}</td>
      </tr>
      
    </tbody>
  </table>
</div>
  );
};

export default Table;