import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
    className="footer  bg-gray-900 text-white text-center flex justify-center items-center">
         style={{ height: "8vh" }}
      <p>&copy; {currentYear} My Website. All Rights Reserved.</p>
    </footer> 
  );
};

export default Footer;