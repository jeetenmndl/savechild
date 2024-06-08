import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import getAllReports from '@/lib/actions/admin/getAllReports'
import AdminActions from '@/components/admin/AdminActions';

const page = async () => {

const data = await getAllReports();



  return (
    <main className='px-2 md:px-6 lg:px-12 xl:px-28 pt-4'>
        <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow className="bg-slate-800 text-white">
            <TableHead className="">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                data && data.payload.map((item)=>{
                    return(
                        <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.image}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell className="flex gap-4">
                            <AdminActions id={item.id} email={item.email} />
                        </TableCell>

                        </TableRow>
                    )
                })
            }
            
        </TableBody>
        </Table>
    </main>
  )
}

export default page