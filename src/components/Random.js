import React  from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {

  const {gif, loading, fetchData} = useGif();

  return (
    <div  className='w-11/12 bg-green-700 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px] py-4 ' >
      <h1 className='text-2xl underline uppercase font-bold mt-[15px] ' > A Random GIF</h1>

      {
        loading? (<Spinner/>):(<img src={gif} width="450" alt=''  />)
      }

      <button onClick={() => fetchData()} 
        className='w-10/12 bg-red-400 text-lg rounded-md py-2 mb-[20px] '>
          Generate
        </button>
    </div>
  )
}

export default Random;
