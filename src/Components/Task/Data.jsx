import React from "react";
import Navbar from "./Navbar";
import Main from "./DashBoard";
import Banner from "./Cards";
const Layout =React.lazy(()=>import("./Layout"))

const Data = () => {
  const topRef = React.useRef(null);
  const executeScroll = () => topRef.current.scrollIntoView();
  const bottomRef = React.useRef(null);
  const executeScroll1 = () => bottomRef.current.scrollIntoView();
  return (
    <>
      <Navbar executeScroll={executeScroll} executeScroll1={executeScroll1} />
      <Main topRef={topRef} />
      <Banner bottomRef={bottomRef} />
      <React.Suspense>
      <Layout/>
      </React.Suspense>
      
    </>
  );
};
export default Data;
