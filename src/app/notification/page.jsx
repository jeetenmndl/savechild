import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CircleCheck } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <main className='flex items-center justify-center h-96'>
        <Card className="w-96">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    Thank you
                <CircleCheck size={50} className='text-green-700' />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-gray-800'>We will send the message to related authority to resolve this issue as soon as possible.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <a href="/" className='w-full'><Button className="w-full">Homepage</Button></a>
            </CardFooter>
        </Card>
    </main>
  )
}

export default page