import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <Outlet />
      </div>
    </>
  );
}


const styles = {

  pageContainer: {
    maxWidth: "1000px",
    margin: "auto",
    border: "1px solid red",
    padding: "10px",
  },

}

export default Layout;