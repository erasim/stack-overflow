import React from 'react'

import "./questions.css"
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

export const Questions = () => {
    return (
        <div className="container-1">
            <LeftSidebar />
            <div className="container-2">
                <HomeMainbar />
                <RightSidebar />
            </div>
        </div>
    )
}
