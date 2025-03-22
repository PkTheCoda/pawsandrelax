import React from "react";
import logo from '../Images/pawsandrelaxlogo.png'

export default function Navbar() { 
    return (
        <header class="bg-slate-100 py-4 shadow-md font-cute pt-6">
            <div className="max-w-[85rem] mx-auto w-full flex flex-wrap items-center px-4">
                <div class="flex-1 flex justify-between items-center">
                    <img src={logo} alt="" className="size-24"/>
                </div>
                <label for="menu-toggle" class="pointer-cursor md:hidden block">
                <svg class="fill-current text-slate-900 one-title cursor-pointer hover:text-slate-700"
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle" />
                <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul class="md:flex items-center justify-between one-title text-black pt-4 md:pt-0">
                            <li><a class="md:p-4 py-3 px-0 block" href="#">About Us</a></li>
                            <li><a class="md:p-4 py-3 px-0 block" href="#">Treatments</a></li>
                            <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}