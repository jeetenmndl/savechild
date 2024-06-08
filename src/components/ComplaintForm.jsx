"use client"

import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from './ui/input'
import { useToast } from './ui/use-toast'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
// import postParticipants from '@/lib/actions/postParticipants'
import Image from 'next/image'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from './ui/textarea'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import postReport from '@/lib/actions/postReport'
import verifyOtp from '@/lib/actions/verifyOtp'
  


const formSchema = z.object({
    title: z.string().min(3, {
      message : "Enter proper title.",
    }),
    location: z.string().min(3, {
      message : "Enter proper location.",
    }),
    description: z.string().min(3, {
        message : "Enter proper description.",
    }),
    email: z.string().min(3, {
        message : "Enter proper email.",
    }),
    type: z.string().min(3, {
        message : "Enter type.",
    }),
    
  })

const ComplaintForm = () => {

    const router = useRouter()
    const {toast}= useToast();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [userID, setUserID] = useState(null);


    

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title:"",
            location:"",
            description:"",
            email:"",
            type:"",
    },
    })

    const onConfirm = async ()=>{
        let otp=document.getElementById("otp").value;
        console.log(otp)
        try {
            setLoading(true);

            const response = await verifyOtp(userID, otp);

            console.log("in form page", response);
            if(response.verified==true){
                toast({
                    title: "Congratulations !",
                    description: "Confirmed sucessfully.",
                })
                
                setTimeout(() => {
                    router.push("/notification");
                }, 2000);
            }
            else{
                toast({
                    title: "Oops !",
                    description: response.message,
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.log(error)
            toast({
                title: "Oops !",
                description: "Some error occured.",
                variant: "destructive",
            })
            
        }finally{
            setLoading(false);
        }
    }

    // 2. Define a submit handler.
    async function onSubmit(values) {
        console.log("values are:", values);
        try {
            setLoading(true);

            const response = await postReport(values, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5tZhW2G41AtCd7ihyYCuUEuTmOofyyYDqA&s");

            console.log("in form page", response);
            if(response.posted==true){
                toast({
                    title: "Congratulations !",
                    description: "Details uploaded sucessfully.",
                })

                setUserID(response.id)
                
                setStep(2);
            }
            else{
                toast({
                    title: "Oops !",
                    description: response.message,
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.log(error)
            toast({
                title: "Oops !",
                description: "Some error occured.",
                variant: "destructive",
            })
            
        }finally{
            setLoading(false);
        }
    }

  return (
    
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="sticky top-8 pb-8">
    <Card className={step==1?"":"hidden"}>
        <CardHeader>
            <CardTitle>Report Child Labour</CardTitle>
            <CardDescription>Fill the details to proceed the complaint </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="space-y-2">
            {/* title */}
            <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="pt-1">Title</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Enter Title" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="pt-1">Location</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Enter full location" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            {/* description  */}
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="pt-1">Description</FormLabel>
                <FormControl>
                <Textarea
                  placeholder="Tell us more"
                  className="resize-none placeholder:text-gray-400 font-light"
                  {...field}
                />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />
            

             {/* type */}
             <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger  className="w-full" >
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectGroup>
                    <SelectItem value="sexual-abuse">Sexual Abuse</SelectItem>
                    <SelectItem value="forced-labor">Forced Labor</SelectItem>
                    <SelectItem value="domestic-servitude">Domestic Servitude</SelectItem>
                    <SelectItem value="agricultural-labor">Agricultural Labor</SelectItem>
                    <SelectItem value="industrial-work">Industrial Work</SelectItem>
                    <SelectItem value="mining">Mining</SelectItem>
                    <SelectItem value="street-work">Street Work</SelectItem>
                    <SelectItem value="bonded-labor">Bonded Labor</SelectItem>
                    <SelectItem value="child-soldiering">Child Soldiering</SelectItem>
                    <SelectItem value="trafficking">Trafficking</SelectItem>
                    <SelectItem value="informal-sector-work">Informal Sector Work</SelectItem>
                    <SelectItem value="construction-work">Construction Work</SelectItem>
                </SelectGroup>
                </SelectContent>
              </Select>
                <FormMessage />
                </FormItem>
            )}
            />

            {/* email  */}
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="pt-1">Email</FormLabel>
                <FormControl>
                   <Input type="email" className="placeholder:text-gray-400 font-light" placeholder="Enter full location" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

           
        </div>

             

        </CardContent>
        <CardFooter>
            {
              
                !loading
                ?
                <div className='w-full space-y-3'>
                <Button type="submit" className="w-full">Submit</Button>
                </div>
                :
                <Button className="w-full" disabled>
                    <Loader2 className=" h-4 w-4 animate-spin" />
                </Button>
            }
            
        </CardFooter>
    </Card>
    <Card className={step==2?"":"hidden"}>
        <CardHeader>
            <CardTitle>
                Verification Code
            </CardTitle>
            <CardDescription>
                Enter the verification code sent to your email.
            </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
        <InputOTP maxLength={4} id="otp">
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                {/* <InputOTPSlot index={5} />
                <InputOTPSlot index={6} /> */}
            </InputOTPGroup>
        </InputOTP>
        </CardContent>
        <CardFooter>
        {
              
              !loading
              ?
              <Button type="button" className="w-full" onClick={onConfirm}>Confirm</Button>
              :
              <Button className="w-full" disabled>
                  <Loader2 className=" h-4 w-4 animate-spin" />
              </Button>
          }
          
           
        </CardFooter>

    </Card>
    </form>
    </Form>
  )
}

export default ComplaintForm