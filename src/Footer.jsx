import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} My Website. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;