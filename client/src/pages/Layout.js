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
    maxWidth: "80%",
    margin: "auto",
    border: "1px solid red",
    padding: "20px",
  },

}

export default Layout;