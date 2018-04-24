import React from 'react'
import PropTypes from 'prop-types'

const style = {
  fontSize: '2em',
  textAlign: 'center',
  margin: '20px 0'
}

const AppBar = ({title}) => {
  return (
    <div style={style}>
      {title}
    </div>
  )
}

AppBar.propTypes = {
  title: PropTypes.string
}

export default AppBar
