import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export const NavBar = () => {
  return (
    <header className="bg-blue-800">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inflex-flex items-center my-6 py-3 px-3 mr-4 text-blue-100 hover:text-blue-300 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white"
          >
            Alexs Coelho
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-blue-300"
            activeClassName="text-blue-300 bg-blue-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100  hover:text-blue-300"
            activeClassName="text-blue-300 bg-blue-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100  hover:text-blue-300"
            activeClassName="text-blue-300 bg-blue-700"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/coelhoalexs"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/alexsoncoelho/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/alexscoelho"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};
