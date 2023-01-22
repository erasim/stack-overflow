import React from 'react'
import RightSidebar from  '../../component/RightSidebar/RightSidebar'
import HomeMainebar from './HomeMainebar'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
const Home = () => {
  return (
    <div className='home-container-1'>
      
   <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainebar/>
        <RightSidebar/>
      </div>
   
      </div>
  )
}
 
export default Home;