import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {

  const [tag, setTag] = useState('Welcome');
  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div  className='w-11/12 bg-blue-500 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px] py-4 ' >
      <h1 className='text-2xl underline uppercase font-bold mt-[15px] ' > Random {tag} GIF</h1>

      {
        loading? (<Spinner/>):(<img src={gif} width="450" alt=''  />)
      }

      <input 
        className=' w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center '
        onChange = {(event) => setTag(event.target.value)}
        value ={tag}


      />

      <button onClick={() => fetchData(tag) } 
        className='w-10/12 bg-red-400 text-lg rounded-md py-2 mb-[20px] '>
          Generate
        </button>
    </div>
  )
}

export default Tag;
