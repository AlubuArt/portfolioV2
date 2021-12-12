import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { Autoplay } from "swiper";
import { Paragraph } from "../Paragraph";

//TODO: move this to css module
var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "64px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
  },
  bmMenu: {
    background: "#1b1c24",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    height: "95%",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export const Hamburger: React.FC = () => (
  <Menu right styles={styles}>
    <Link href="/about" passHref>
      <Paragraph tag="p">about me</Paragraph>
    </Link>
    <Link href="/projects" passHref>
      <Paragraph tag="p">projects</Paragraph>
    </Link>
    <Link href="/experience" passHref>
      <Paragraph tag="p">experience</Paragraph>
    </Link>
    <Link href="/education" passHref>
      <Paragraph tag="p">education</Paragraph>
    </Link>
    <Link href="/contact" passHref>
      <Paragraph tag="p">contact</Paragraph>
    </Link>
  </Menu>
);
