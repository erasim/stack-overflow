import React from 'react'
import RightSidebar from '../RightSidebar/RightSidebar';
import HomeMainebar from '../Home/HomeMainebar';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
const QuestionsLink = () => {
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
 
export default QuestionsLink;