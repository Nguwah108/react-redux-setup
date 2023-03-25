import React from 'react'
import { connect } from 'react-redux'

const ComponentC = ({usersUi}) => {
   const {username,phone}=usersUi
  return (
      <div>ComponentC-username -{username} phone -{phone} 
        </div>
  )
}

const mapStateToProps = (state) => ({
    usersUi :state?.usersRoot
})

export default  connect(mapStateToProps,null) (ComponentC)