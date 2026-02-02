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
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    tag: "By Claire Robinson",
  },
  {
    id: 2,
    image: img6,
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
    tag: "By Wilson Hutton",
  },
  {
    id: 3,
    image: img7,
    title: "Take your Digitalbank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even ...",
    tag: "By Wilson Hutton",
  },
  {
    id: 4,
    image: img8,
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through ...",
    tag: "By Claire Robinson",
  },
];
