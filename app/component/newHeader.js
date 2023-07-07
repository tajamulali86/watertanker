"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const NewHeader = ({ ar }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 130);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styleNav = scrolled? "inline-flex items-center text-white border-0 py-1 px-5 focus:outline-none rounded text-base mt-4 md:mt-0 hover:scale-115 hover:border-b-4 hover:border-b-[#666666] transition-all hover:pb-3": "inline-flex items-center text-[#145CAA] border-0 py-1 px-5 focus:outline-none rounded text-base mt-4 md:mt-0 hover:scale-115 hover:border-b-4 hover:border-b-[#666666] transition-all hover:pb-3"
  
  const language = ar ?   'English': 'العربية';
  const homeLink = ar ? '/ar' : '/';
  
  const navItems = ar
    ? [
        { title: 'الصفحة الرئيسية', link: '/ar' },
        { title: 'معلومات عنا', link: '/ar/about' },
        { title: 'خدماتنا', link: '/ar/service' },
        { title: 'تواصل معنا', link: '/ar/contact' }
      ]
    : [
        { title: 'Home', link: '/' },
        { title: 'About us', link: '/about' },
        { title: 'Our Services', link: '/service' },
        { title: 'Contact Us', link: '/contact' }
      ];

  return (
    <header className={` ${scrolled ? 'text-gray-600 body-font bg-gray-800 sticky top-0 transition-all z-50' : 'text-gray-600 body-font bg-white '}`}>
      <div className={` ${scrolled ? 'container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center ' : 'container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'}`}>
        <Link href={homeLink} className={` ${scrolled ? "flex title-font font-medium items-center text-gray-900   " : "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" }`}>
          <Image alt="logo" src={`${scrolled?'/logowhite.png':'/logo1.png'}`} height={100} width={130} />
        </Link>
        <nav className={`${scrolled?"md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ":"md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"}`}>
          {navItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <button className={styleNav}>{item.title}</button>
            </Link>
          ))}
        </nav>
        <nav className={`${scrolled?"md:ml-auto flex flex-wrap items-center text-base justify-center ":"md:ml-auto flex flex-wrap items-center text-base justify-center"}`}></nav>
        <Link href={ar ? '/' : '/ar'}>
          <button className={styleNav}>{language}</button>
        </Link>
      </div>
    </header>
  );
};

export default NewHeader;