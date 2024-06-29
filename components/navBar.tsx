'use client';

import AuthButton from "./authButton";
import Image from 'next/image'
import logo from "../public/black-logo.png"
import Link from "next/link";
import DashboardLink from "./dashboardLink";
import { Session } from "next-auth";

import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";



export default function NavBar({
  session
}: {
  session: Session | null;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex flex-row justify-between p-3 py-5 mx-auto text-lg text-black max-w-7xl ">
      <Link href='/' className="font-extrabold text-1xl md:text-2xl ">
        IMAGE EFFECTS
      </Link>

        
        <div className={"flex flex-row just space-x-2  "}>

          <div className=" hover:text-teal-700" >
            <DashboardLink session={session} />
          </div>
          <div className="">
            <AuthButton session={session} />
          </div>
        </div>

    </nav>
  );
}

