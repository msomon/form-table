import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Table from './Table';


const Home = () => {
    const { register,reset,formState: { errors }, handleSubmit } = useForm();
    
   const [details,setDetails] = useState([]);


    const onSubmit = (data) => {

        if(details.length < 1){
            setDetails([data])
            
    }
   else if(details.length > 0 ){

    var add = [...details, data]
   setDetails(add)
    
      }
        
      reset()
        toast('Data Added Succesfully')
             }


    const Cancel =()=>{
        reset()
    }

    return (
        <div>
            <div className='flex h-screen justify-center items-center '>
            <div className="card border-t-4 w-[680px] bg-base-100 shadow-xl items-center ">
                <div className="card-body">
                    <h2 className="text-start text-xl font-bold underline mb-6">Receipt Details</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full justify-center items-center gap-14 flex-row max-w-xs">
                          <div className='mb-5'>
                           <h1 className='' >Date</h1>

                          </div>
                           <div>
                            <input
                                type="date"
                                placeholder="Enter Date"
                                className="input input-bordered w-full max-w-xs"
                                {...register("date", {
                                    required: {
                                        value: true,
                                        message: 'Date is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                            </div>
                        </div>

                        <div className="form-control w-full justify-center items-center gap-14 flex-row max-w-xs">
                          <div className='mb-5'>
                           <h1 className='' >Amount</h1>

                          </div>
                           <div>
                            <input
                                type="text"
                                placeholder="Enter Amount(in INR)"
                                className="input input-bordered w-full max-w-xs"
                                {...register("amount", {
                                    required: {
                                        value: true,
                                        message: 'Amount is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                            </div>
                        </div>

                        <div className="form-control w-full items-center gap-14 flex-row max-w-xs">
                          <div className='mb-5'>
                           <h1 className='' >Payment Mode</h1>
                          </div>
                           <div className='input input-bordered items-center'>
                           <select {...register("paymentMode")}>
                              <option value="Cash">Cash</option>
                              <option value="Card">Card</option>
                              <option value="other">other</option>
                             </select>
                            
                        </div>
                        </div>

                        <div className="form-control w-full justify-center items-center gap-14 mt-4 flex-row max-w-xs">
                          <div className='mb-5'>
                           <h1 className='' >Remark</h1>

                          </div>
                           <div>
                            <input
                                type="text"
                                placeholder="Enter Remark"
                                className="input input-bordered w-full max-w-xs"
                                {...register("remark", {
                                    required: {
                                        value: true,
                                        message: 'Remark is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                            </div>
                        </div>

                        <div className='flex flex-row gap-16'>
                        <h1 className="btn btn-outline mt-5 text-red" onClick={Cancel}>Cancel</h1>
                        <input className='btn max-w-xs mt-5 text-white bg-green-600' type="submit" value="Submit($)" />
                        </div>
                       
                    </form>
              
                </div>
            </div>


        </div>

        <div className=''>
{
    details?.map((a,index)=><Table inf={a} key={index} ></Table>)
}

</div>
        </div>
    );
};

export default Home;