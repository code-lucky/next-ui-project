'use client';
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Image from "next/image";
import './css/Header.css';
import { defaultLocale } from '@/lib/i18n'

export default function App() {
  const [langName, setLangName] = useState(defaultLocale);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menus = [
    { name: 'Feature', link: '/#feature' },
    { name: 'Pricing', link: '/#pricing' },
    { name: 'FAQ', link: '/#faq' },
  ]

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
    >
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <Link href="/">
          <Image src="/vercel.svg" alt="ACME" width={100} height={100} />
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="mr-20">
          <Link href="/">
            <Image src="/vercel.svg" alt="ACME" width={100} height={100} />
          </Link>
        </NavbarBrand>
        <div className="flex gap-20">
          {menus.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link color="foreground" href={`${langName}/${item.link}`} className="menu-link">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <Dropdown >
          <DropdownTrigger>
            <Button
              variant="light"
            >
              EN
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Example with disabled actions">
            {/* 获取语言列表 */}
            <DropdownItem key="en" onClick={() => setLangName('en')}>EN</DropdownItem>
            <DropdownItem key="zh" onClick={() => setLangName('zh')}>ZH</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuToggle className="sm:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarMenu>
        {menus.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={`${langName}/${item.link}`}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
