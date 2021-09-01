import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-footerCol text-gray-50 flex items-center justify-center gap-3 p-2 h-12 md:h-14">
        <div className="text-lg mt-2 md:text-xl ">Made For</div>
        <div className="">
          <a href="https://atlan.com/" target="blank" rel="noreferrer">
            <img
              className="h-8 w-20 md:h-10 md:w-24"
              src="https://atlan.com/assets/img/logo.40c9d1d3.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
