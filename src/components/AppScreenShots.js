function AppScreenShots({ img }) {

    return (


        <div id="Slide" className='flex items-center m-2 my-5 space-x-4 rounded-xl 
        cursor-pointer hover:bg-gray-100 hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none
        transition transform duration-200 shadow-lg ease-Out transition-all'>


            <div className="relative h-72 w-72">
                <img src={img} layout='fill' objectFit='contain' className='rounded-lg' />
                <div>
                </div>

            </div>


        </div >


    )
}

export default AppScreenShots
