import React from 'react'
import chipCard from "../assets/optimized-images/Chip_Card.png"
import masterCardImg from "../assets/optimized-images/masterCardImg.png"

const VirtualCardDesign = () => {
  return (
    <main className='cardBgColor rounded-xl'>
        {/* Balance row */}
       <section className='p-4 flex items-center justify-between text-white'>
        <div className='flex flex-col'>
            <h3 className='text-sm '>Balance</h3>
            <p className='text-[28px]'>$5,756</p>
        </div>
        <div>
            <img src={chipCard} className='w-10'/>
        </div>

       </section>

       {/* Card holder name row */}
       <section className='px-4 pt-6 text-white flex justify-between'>
            <div>
                <h3 className='text-[12px] text-gray-300'>CARD HOLDER</h3>
                <p className='text-lg'>Eddy Cusuma</p>
            </div>
            <div>
                <h3 className='text-[12px] text-gray-300'>VALID THRU</h3>
                <p className='text-lg'>12/26</p>
            </div>
       </section>

       {/* Card No row */}
       <section className='mt-4 rounded-b-xl text-white cardBottomBgColor p-4 flex justify-between items-center'>
        <h1 className='text-xl'>3778 **** **** 1234</h1>
        <img src={masterCardImg} className='w-10'/>
       </section>
    </main>
  )
}

export default VirtualCardDesign