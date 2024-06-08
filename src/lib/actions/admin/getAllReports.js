"use server"


const getAllReports = async ()=>{

  
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  };
  
    const query = await fetch(`${process.env.SERVER}/api`, settings, {next:{cache: "no-store"}})
    const response = await query.json()
  
    return response
  }

  export default getAllReports;