import React, { useState } from 'react';
import CardData from './CardData';
import Loader from './Loader';

const Card = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [enterName, setEnterName] = useState(false)

  const fetchUser = async () => {
    if(username==""){
        return setEnterName(true)
    }
    try {
        setEnterName(false)
        setError(false)
        setLoader(true)
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
            const data = await response.json();
            setUserData(data);
            setLoader(false)
        } else {
            setError(true)
            setUserData(null)
            setLoader(false)
        }
    } catch (error) {
        console.error('Error fetching GitHub user:', error);
    }
  };

  return (

    <div>

        <div >
             
            <h1 className='bg'>ProfileCard</h1>
            <div className='my-6 text-center fixed w-[100%]  '>
            <input
                className="mr-1 peer h-full w-[40%] rounded-md border border-gray-400  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-1 focus:border-gray-800 focus:outline-0 disabled:border-0"

                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button
            className="bg-gray-700 hover:bg-gray-900 text-white font-normal py-2 px-4 rounded-md"
            onClick={fetchUser}>Submit</button>
            </div>
        </div>
       <div className='flex justify-center items-center w-[100%] h-[100vh]'>
        {enterName && "Enter a Name"}
        <div className='absolute'>
        {loader&& <Loader/>}
        </div>
        
        {userData &&<CardData userData={userData} username={username}/> }
        {error&&"User Not Found"}
       </div>
        
        
        
      
    </div>
  );
};

export default Card;
