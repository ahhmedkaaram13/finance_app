import laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
    <img className='w-[500px] mx-auto my-4'
    src={laptop}
    alt='laptop'
    />
    <div className='flex flex-col justify-center'>
        <h1 className='text-[#00df9a] font-bold uppercase'>Data Analytics Dashboard</h1>
        <p className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally</p>
        <p>Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has
         been the industry's standard dummy text ever since the 1500s.
        </p>
        <button className='bg-black w-[200px] rounded-md font-medium 
        my-6 mx-auto px-3 py-3 text-[#00df9a]'>Get Started</button>
    </div>
    </div>
      
    </div>
  )
}

export default Analytics
