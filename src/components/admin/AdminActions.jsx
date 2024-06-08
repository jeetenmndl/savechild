'use client'

import React from 'react'
const deleteData = (id, email)=>{
    console.log(id, email)
}

import { CircleCheck, Trash2 } from 'lucide-react';
import deleteReport from '@/lib/actions/admin/deleteReport';
import { useToast } from '../ui/use-toast';

const AdminActions = (props) => {

    const {toast} = useToast();
    const {id, email} = props;

    const deleteData = async ()=>{
        console.log(id, email)
        const response = await deleteReport(id, email);
        console.log(response)
        if(response.deleted==true){
            toast({
                title: "Congratulations",
                description: "Report deleted successfully"
            })
        }
        else{
            toast({
                title: "Oops!!",
                description: "Some error occured",
                variant: "destructive"
            })
        }
    }

    const approveData = ()=>{
        console.log(id, email)
    }

  return (
    <>
        <Trash2 className='text-red-800' onClick={deleteData} />
        <CircleCheck className='text-blue-800' onClick={approveData} />
    </>
  )
}

export default AdminActions