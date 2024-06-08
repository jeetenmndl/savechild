"use server"

import { revalidatePath } from "next/cache";


const deleteReport = async (id, email)=>{

    let details = {
        id: id,
        email: email
    }

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/del-comp`, settings)
    const response = await query.json()
  
    revalidatePath("/admin")

    return response
  }

  export default deleteReport;