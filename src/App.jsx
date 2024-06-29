import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor("red")}
              className='outline-none px-4 py-1 rounded-full shadow-xl text-white bg-red-600 hover:bg-red-500 hover:shadow-lg'

            >Red</button>

            <button onClick={()=>setColor("green")}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-white bg-green-600 hover:bg-green-500 hover:shadow-lg'

            >Green</button>

            <button onClick={()=>setColor("blue")}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-white  bg-blue-600 hover:bg-blue-500 hover:shadow-lg'

            >Blue</button>

            <button onClick={()=>setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-black  bg-yellow-300 hover:bg-yellow-200 hover:shadow-lg'

            >Yellow</button>

            <button onClick={()=>setColor("white")}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-black  bg-Wgite hover:bg-slate-100 hover:shadow-lg'

            >White</button>

            <button onClick={()=>setColor("black")}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-white  bg-black hover:bg-slate-700 hover:shadow-lg'

            >Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

