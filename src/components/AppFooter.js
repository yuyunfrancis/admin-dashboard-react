import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; 2021 AutoPrice.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="/" target="_blank" rel="noopener noreferrer">
          yuyunFrancis
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
