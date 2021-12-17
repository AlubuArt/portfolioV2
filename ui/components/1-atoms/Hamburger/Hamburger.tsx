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

interface MenuItem {
  path: string;
  text: string;
}

export interface HamburgerProps {
  menuItems: Array<MenuItem>;
}

export const Hamburger: React.FC<HamburgerProps> = ({ menuItems }) => {
  return (
    <Menu right styles={styles}>
      {menuItems.map((item, index: number) => {
        return (
          <Link key={index} href={item.path} passHref>
            {/* this feels hacky! Seems like a bug. 
            if future me would like to fix it some day, use a link wrapper: https://github.com/vercel/next.js/issues/7915 
            and https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component
            could be worth fixing for better SEO*/}
            <div>
              <Paragraph tag="p">{item.text}</Paragraph>
            </div>
          </Link>
        );
      })}
    </Menu>
  );
};