// import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'
// const Github = () => {
//   const [repos, setRepos] = useState([]);
//     const data =useLoaderData()
//     // const [data,setData]=useState([])
//     // useEffect(() => {
//     //   fetch('https://api.github.com/users/divamsharma21')
//     //   .then(response=> response.json())
//     //   .then(data=>{
//     //     console.log(data);
//     //     setData(data)
//     //   })
//     // }, [ ])
    

//     return (
//       <>
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
//     <img src={data.avatar_url} alt="Git picture" width={300} />
     
//     </div>
//     <div className="respositry">
  
//       <h1>My Repositories</h1>
//       <ul>
//         {repos.map(repo => (
//           <li key={repo.id}>{repo.name}</li>
//         ))}
//       </ul>
    
//     </div>
//     </>
//   )
// }

// export default Github

// export const githubInfoLoader=async() =>{
//     const response =await fetch('https://api.github.com/users/divamsharma21')
//     return response.json()

// }

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

const Github = () => {
  const [repos, setRepos] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/users/divamsharma21/repos');
      const reposData = await response.json();
      setRepos(reposData);
    };

    fetchRepos();
  }, []);

  return (
    <div className="bg-gray-600 h-fit flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="text-center m-4 bg-white p-4 text-3xl rounded-lg shadow-md">
          Github followers: {data.followers}
          <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-4">My Repositories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {repos.map(repo => (
              <div key={repo.id} className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-bold mb-2">{repo.name}</h2>
                <p className="text-gray-600 mb-2">Stars: {repo.stargazers_count}</p>
                <p className="text-gray-600 mb-2">Forks: {repo.forks_count}</p>
                <p className="text-gray-600">Description: {repo.description || 'No description provided.'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/divamsharma21');
  return response.json();
}

export default Github;