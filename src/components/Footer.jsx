import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Footer() {
  return (
    <div className=" h-full pl-16 bg-[#2699fb] lg:grid grid-cols-2 ">
      <div>
        <h1 className="font-bold pt-16 text-[40px]">Hussain Tech</h1>
        <p className="text-white font-medium mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Pariatur perferendis doloremque magni eveniet <br /> consequatur
          praesentium dicta iste alias veritatis ab.
        </p>
        <div className="inline-flex justify-center pt-7 gap-8">
            <AiFillFacebook size={30}/>
            <AiFillInstagram size={30}/>
            <AiFillTwitterCircle size={30}/>
            <AiOutlineWhatsApp size={30}/>
        </div>
      </div>
        <div className="md:grid grid-cols-3 mt-6 ml-[-10rem]">
          <div className="p-16">
            <h6 className="font-medium text-black">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analysis</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div className="p-16">
            <h6 className="font-medium text-black">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">AM Status</li>
            </ul>
          </div>
          <div className="p-16">
            <h6 className="font-medium text-black">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Career</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Footer;
