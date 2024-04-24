import React from 'react'

const Linkedin = () => {
 const data=userLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Linkedin picture" width={300} />
    </div>
  )
}

export default Linkedin

export const LinkdinInfoLoader=async() =>{
    response =await fetch('https://api.Linkedin.com/users/divam_sharma')
    return response.json()
}
