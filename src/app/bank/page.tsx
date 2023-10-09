"use client"


export default function BankForm() {
return (
  <div>teste</div>
)
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
  //     <div className="mb-4">
  //       <label className="block text-gray-700 font-bold mb-2" htmlFor="bank">
  //         Bank
  //       </label>
  //       <input
  //         className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
  //           errors?.bank ? 'border-red-500' : ''
  //         }`}
  //         id="bank"
  //         type="text"
  //         placeholder="Enter bank name"
  //         {...register('bank', { required: true, minLength: 3 })}
  //       />
  //       {errors?.bank && <p className="text-red-500 text-xs italic">Bank name is required</p>}
  //     </div>
  //     <div className="mb-4">
  //       <label className="block text-gray-700 font-bold mb-2" htmlFor="balance">
  //         Balance
  //       </label>
  //       <input
  //         className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
  //           errors?.balance ? 'border-red-500' : ''
  //         }`}
  //         id="balance"
  //         type="text"
  //         placeholder="Enter balance"
  //         {...register('balance', { required: true, min: 0, valueAsNumber: true })}
  //       />
  //       {errors?.balance && (
  //         <p className="text-red-500 text-xs italic">Balance must be greater than or equal to 0</p>
  //       )}
  //     </div>
  //     <div className="mb-4">
  //       <label className="block text-gray-700 font-bold mb-2" htmlFor="initialDate">
  //         Initial Date
  //       </label>
  //       <input
  //         className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
  //           errors?.initialDate ? 'border-red-500' : ''
  //         }`}
  //         id="initialDate"
  //         type="date"
  //         placeholder="Enter initial date"
  //         {...register('initialDate', { required: true })}
  //       />
  //       {errors?.initialDate && (
  //         <p className="text-red-500 text-xs italic">Initial date is required</p>
  //       )}
  //     </div>
  //     <div className="flex items-center justify-between">
  //       <button
  //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  //         type="submit"
  //       >
  //         Add Bank
  //       </button>
  //     </div>
  //   </form>
  // );
}
