import React from 'react'
import Navbar from "./Navbar"
import Main from "./Main"
const Data = () => {
    const topRef = React.useRef(null);
    const executeScroll = () => topRef.current.scrollIntoView()
    const bottomRef = React.useRef(null);
    const executeScroll1 = () => bottomRef.current.scrollIntoView()
  return (
    <>
    <Navbar  executeScroll={executeScroll}  executeScroll1={executeScroll1}/>
    <Main topRef={topRef}  bottomRef={bottomRef}/>
    </>
  )
}

export default Data
