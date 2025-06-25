import React from 'react'
import VirtualCardDesign from '../../components/VirtualCardDesign'

const Dashboard = () => {
  return (
    <main className='flex flex-col'>
      <section className=''>
        <h1 className='py-2 primaryColor2 text-2xl font-semibold'>My Cards</h1>
        <VirtualCardDesign/>
      </section>
    </main>
  )
}

export default Dashboard