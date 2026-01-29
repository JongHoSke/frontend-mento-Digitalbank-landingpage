import { StaticImageData } from "next/image"; // Next.js 환경일 경우

import img1 from "@assets/icon-online.svg";
import img2 from "@assets/icon-budgeting.svg";
import img3 from "@assets/icon-onboarding.svg";
import img4 from "@assets/icon-api.svg";

import img5 from "@assets/image-currency.jpg";
import img6 from "@assets/image-restaurant.jpg";
import img7 from "@assets/image-plane.jpg";
import img8 from "@assets/image-confetti.jpg";

export interface CardDatas {
  id: number;
  image: StaticImageData | string;
  title: string;
  description: string;
  tag: string;
}

export const Second_Card_List: CardDatas[] = [
  {
    id: 1,
    image: img1,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    tag: "",
  },
  {
    id: 2,
    image: img2,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    tag: "",
  },
  {
    id: 3,
    image: img3,
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    tag: "",
  },
  {
    id: 4,
    image: img4,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    tag: "",
  },
];

export const Third_Card_List: CardDatas[] = [
  {
    id: 1,
    image: img5,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    tag: "By Claire Robinson",
  },
  {
    id: 2,
    image: img6,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    tag: "By Wilson Hutton",
  },
  {
    id: 3,
    image: img7,
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    tag: "By Wilson Hutton",
  },
  {
    id: 4,
    image: img8,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    tag: "By Claire Robinson",
  },
];
