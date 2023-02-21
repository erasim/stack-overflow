import React from 'react'
import PolicyDetailsLeft from './PolicyDetailsLeft'
import PolicyDetailsRight from './PolicyDetailsRight'
import './policyDetails.css'

const PolicyDetailsMain = () => {
  return (
    <div className='policy-detail-main'>
        <div className='policy-detail-left'>{<PolicyDetailsLeft/>}</div>
        <div className='policy-detail-Right'>{<PolicyDetailsRight/>}</div>
    </div>
  )
}

export default PolicyDetailsMain