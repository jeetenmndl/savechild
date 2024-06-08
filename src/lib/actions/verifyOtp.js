"use server"


const verifyOtp = async (userID, otp)=>{

    let details = {
        id:userID,
        emailtoken: otp

    }

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/email-verify`, settings)
    const response = await query.json()
  
    return response
  }

  export default verifyOtp;