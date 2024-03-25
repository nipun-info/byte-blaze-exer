import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Welcome to ByteBlaze</h1>
          <p className="py-6">
          ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it
          </p>
          <div>
          <Link to='/' className="btn btn-primary">Read Blogs</Link>
          <Link to='/' className="btn btn-primary">Bookmarks</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
