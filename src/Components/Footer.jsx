import React from "react";
import { FaFacebook, FaTwitter} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-slate-200 pb-10 font-cute">
      <div className="max-w-[95rem] mx-auto">

        <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div class="p-5">
            <h3 class="font-bold text-xl text-slate-900">Paws & Relax</h3>
          </div>
          <div class="p-5">
            <div class="text-sm uppercase text-slate-900 font-bold">Pages</div>
            <a class="my-3 block" href="/#">
              Blog <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Appointment <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Contact
            </a>
          </div>
          <div class="p-5">
            <div class="text-sm uppercase text-slate-900 font-bold">
              Services
            </div>
            <a class="my-3 block" href="/#">
              Grooming <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Styling <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              Conditioning <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5">
            <div class="text-sm uppercase text-slate-900 font-bold">
              Contact us
            </div>
            <a class="my-3 block" href="/#">
              4206 Biddie Lane, Richmond, VA, 23224
              <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              pawsandrelax@gmail.com
              <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">
              804-571-6157
              <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>

        <div
          class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
    max-w-screen-lg items-center"
        >
          <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex gap-4">
            <a href="/#" class="w-6 mx-1">
              <FaFacebook className="size-8"/>
            </a>

            <a href="/#" class="w-6 mx-1">
              <FaTwitter className="size-8"/>
            </a>

            <a href="/#" class="w-6 mx-1">
              <IoMail className="size-8"/>
            </a>

          </div>
          <div class="mt-5 mb-2">© Copyright 2024 Paws and Relax. All Rights Reserved.</div>
          <div class="">Designed by <a href="https://pranavkonjeti" target="_blank" className="underline font-semibold">Pranav Konjeti</a> & Powered by <a href="https://thryvedesign.com" target="_blank" className="underline font-semibold">ThryveDesign</a></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
