import React from "react";
import NavbarMain from "../Navbar";
import "../homepage/homepage.css";
import { Button } from "@material-tailwind/react";
import pages from "./Page.png";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-main">
        <section className="hero h-screen flex flex-col">
          <div className="title">
            <h1 className="title-main">Work at the speed of thought</h1>
            <p className="m-10 text-center max-w-lg">
              {" "}
              In the quiet dance of dawn, productivity awakens, casting shadows
              of accomplishment across the canvas of a new day.
            </p>
            <Button
              className=""
              onClick={() => {
                navigate("/signup");
              }}
            >
              Get Started
            </Button>
          </div>
        </section>
        {/* <section >
          <h1 className='text-9xl w-screen text-white text-center m-10'>Features</h1>
          <img src={pages} alt="" className='m-20 h-1/5'/>
        </section> */}
      </div>
    </>
  );
};
