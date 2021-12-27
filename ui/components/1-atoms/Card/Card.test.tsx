import { Card } from "./Card";
import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import image from "next/image";

it("renders a small card with frosted effect", () => {
  let listItems = [
    {
      title: "project1",
      description: "descripton1",
      aboutText: "about project1",
      image: {
        url: "https://firebasestorage.googleapis.com/v0/b/jc-portofolio-93953.appspot.com/o/sponsormatch.png?alt=media&token=a379dfa2-e761-49ff-934a-4fc84d15e373",
      },
      list: ["item 1", "item2"],
    },
  ];
  render(
    <Card type="basic" size="sm" onClick={() => {}} image={listItems[0].image}>
      {}
    </Card>
  );
  expect(screen.getByRole("card")).toHaveClass("Card Card___basic Card___sm");
});

it("renders a large card with frosted effect", () => {
  let listItems = [
    {
      title: "project1",
      description: "descripton1",
      aboutText: "about project1",
      image: {
        url: "https://firebasestorage.googleapis.com/v0/b/jc-portofolio-93953.appspot.com/o/sponsormatch.png?alt=media&token=a379dfa2-e761-49ff-934a-4fc84d15e373",
      },
      list: ["item 1", "item2"],
    },
  ];
  render(
    <Card type="basic" size="lg" onClick={() => {}} image={listItems[0].image}>
      {}
    </Card>
  );
  expect(screen.getByRole("card")).toHaveClass("Card Card___basic Card___lg");
});
