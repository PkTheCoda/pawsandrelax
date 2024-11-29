import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import dogpackage1 from "../Images/dogpackage1.png";
import dogpackage2 from "../Images/dogpackage2.png";
import dogpackage3 from "../Images/dogpackage3.png";
import dogicon from "../Images/icons/dogicon.png";

const Pricing = () => {
  return (
    <div className="py-10 bg-slate-100 font-cute">
      <div className="py-10 max-w-[95rem] mx-auto space-y-4">
        <div>
          <h1 className="text-center seven-title tracking-tighter">
            Our Affordable Packages
          </h1>
          <p className="max-w-2xl one-title text-center mx-auto">
                Choose from our exclusive grooming packages, each crafted to suit your dog’s unique needs and preferences.
          </p>
        </div>

        <div className="py-6 grid grid-cols-3 gap-6">
          <div className="w-full py-10 bg-slate-200/60 rounded-md flex flex-col items-center justify-center gap-y-6 px-4">
            <h2 className="five-title text-center">Puppy Pamper Package</h2>

            <p className="text-center one-title text-slate-700 leading-9">
              Perfect for young pups experiencing grooming for the first time,
              this gentle package ensures a calm, relaxing experience
            </p>

            <div className="flex flex-col gap-y-2 w-full">
              <h3 className="three-title">Includes:</h3>
              <ul class="flex flex-col space-y-2 ml-6">
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Gentle bath & shampoo
                  </p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">Nail trim</p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Ear cleaning
                  </p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Paw pad massage
                  </p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    First grooming guidance
                  </p>
                </li>
              </ul>
            </div>

            <img
              src={dogpackage1}
              alt=""
              className="h-[25rem] object-cover rounded-lg shadow-xl relative -rotate-2 border-black mt-4"
            />
          </div>

          <div className="w-full py-10 bg-slate-200/60 rounded-md flex flex-col items-center justify-center gap-y-6 px-4">
            <img
              src={dogpackage2}
              alt=""
              className="h-[25rem] object-cover rounded-lg shadow-xl relative rotate-2 border-black mb-4"
            />

            <h2 className="five-title text-center">Tailored Groom & Style</h2>

            <p className="text-center one-title text-slate-700 leading-9">
              A full grooming session to keep your dog looking their best. From
              a customized haircut to a refreshing bath
            </p>

            <div className="flex flex-col gap-y-2 w-full">
              <h3 className="three-title">Includes:</h3>
              <ul class="flex flex-col space-y-2 ml-6">
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Full haircut & style
                  </p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Bath & conditioning
                  </p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Nail trim & ear cleaning
                  </p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Paw balm application
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full py-10 bg-slate-200/60 rounded-md flex flex-col items-center justify-center gap-y-6 px-4">
            <h2 className="five-title text-center">Luxury Spa Day</h2>

            <p className="text-center one-title text-slate-700 leading-9">
              Treat your dog to a luxurious experience with this all-inclusive
              package: aromatherapy, deep cleaning, and extra pampering
            </p>

            <div className="flex flex-col gap-y-2 w-full">
              <h3 className="three-title">Includes:</h3>
              <ul class="flex flex-col space-y-2 ml-6">
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Aromatherapy bath
                  </p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Deep coat conditioning
                  </p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Nail trim & paw care
                  </p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Teeth cleaning
                  </p>
                </li>
                <li class="flex items-center gap-2">
                  <PiSealCheckFill className="h-6 w-6 text-green-600" />
                  <p class="text-base text-slate-700 sm:text-lg">
                    Gentle drying & brushing
                  </p>
                </li>
              </ul>
            </div>

            <img
              src={dogpackage3}
              alt=""
              className="h-[25rem] object-cover rounded-lg shadow-xl relative -rotate-2 border-black mt-4"
            />
          </div>
        </div>

        <div className="flex justify-center">
            <button className="rounded-full shadow-sm px-6 py-2 w-max bg-main text-white transition300scale one-title">
              Book an Appointment
            </button>
        </div>

        {/* <div className="space-y-4 max-w-[80rem] mx-auto">
          <h1 className="text-center six-title tracking-tighter">
            Or go À la carte
          </h1>
          <div className="grid grid-cols-4 bg-red-100">
            <div className="w-full bg-red-200 flex gap-4">
              <img src={dogicon} alt="" className="w-14 h-14" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
