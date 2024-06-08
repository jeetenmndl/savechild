"use server"


const postReport = async (formData, image)=>{

    let details = {
        title: formData.title,
        location: formData.location,
        description: formData.description,
        type: formData.type,
        email: formData.email,
        image: image
    }

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/api`, settings)
    const response = await query.json()
  
    return response
  }

  export default postReport;