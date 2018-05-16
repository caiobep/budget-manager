import * as React from 'react'

const style: React.CSSProperties = {
  fontSize: '2em',
  margin: '20px 0',
  textAlign: 'center',
}

const AppBar = (props: IAppBar) => {
  return (
    <div style={style}>
      {props.title}
    </div>
  )
}

export interface IAppBar {
  title: string
}

export default AppBar
