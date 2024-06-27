"use client";

import Link from "next/link";
import { useState } from "react";
import { GiAutoRepair } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen((open) => !open);
	};

	const MENUS = [
		{
			label: "Beranda",
			href: "/",
		},
		{
			label: "Tentang kami",
			href: "/tentang-kami",
		},
		{
			label: "Layanan",
			href: "/layanan",
		},
		{
			label: "Hubungi Kami",
			href: "/",
		},
	];

	return (
		<nav className="bg-[#EEF6FF] h-24 flex items-center sticky top-0 z-[999]">
			<section className="max-w-[1450px] container mx-auto px-3 md:px-5">
				<div className="flex justify-between items-center">
					<Link
						href="/"
						className="font-bold md:text-xl lg:text-2xl text-secondary flex items-center gap-x-2"
					>
						<div className="flex flex-row gap-3 items-center">
              <img 
              src="/logo-dingin.png"
              alt="logo"
              className="w-7 h-7 "
              />
              <h1 className="font-bold text-[18px] text-[#1E61F2] ">
                DINGIN<span className="text-[#0ACEFF]" >IN</span>
              </h1>
            </div>
					</Link>

					<ul className="lg:flex items-center gap-x-5 text-blue-600 font-bold hidden">
						{MENUS.map(({ label, href }, index) => (
							<Link key={index} href={href} className="hover:text-primary uppercase">
								{label}
							</Link>
						))}
					</ul>

					<ul className="lg:hidden">
						{!open ? (
							<button
								onClick={handleOpen}
								className="bg-slate-100 hover:bg-slate-200 p-1 rounded-md"
							>
								<IoMenu className="w-6 h-6 text-secondary" />
							</button>
						) : (
							<button
								onClick={handleOpen}
								className="bg-slate-100 hover:bg-slate-200 p-1 rounded-md"
							>
								<RxCross2 className="w-6 h-6 text-secondary" />
							</button>
						)}
					</ul>

					<ul
						className={
							open
								? "fixed lg:hidden left-0 top-20 w-full bg-primary ease-in-out duration-700 z-50"
								: "ease-in-out w-full duration-700 fixed top-20 left-[-100%] z-50"
						}
					>
						<li className="text-blue-600 flex flex-col text-center font-bold">
							{MENUS.map(({ label, href }, index) => (
								<Link key={index} href={href} className="py-5">
									{label}
								</Link>
							))}
						</li>
					</ul>
				</div>
			</section>
		</nav>
	);
};

export default Navbar;