import { PlusIcon, BookOpenIcon, LayoutDashboardIcon } from "lucide-react";

export const ragConfig = {
  baseUrl: "https://api.deepseek.com",
  model: "deepseek-ai/deepseek-llm-67b-chat",
};

export const OfcLinks = {
  github: "https://l.devwtf.in/discord",
  twitter: "https://x.com/SaidevDhal",
  instagram: "https://dub.sh/saidev-instagram",
  sponsor: "https://github.com/sponsors/SkidGod4444",
  portfolio: "http://devwtf.in",
  discord: "https://l.devwtf.in/discord",
};

export const menuItems = [
  { label: "New Chat", icon: PlusIcon, href: "/chat", disabled: false },
  { label: "Docs", icon: BookOpenIcon, href: "/docs", disabled: true },
  {
    label: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
    disabled: true,
  },
];

export const DATA = {
  name: "Acter",
  url: "https://acter.devwtf.in",
  description: "",
  prevImage: "https://i.imgur.com/JwDi96s.png",
};

export const beforeCode = `function sumArrayTraditional(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Usage:
const numbers1 = [1, 2, 3, 4, 5];
console.log(sumArrayTraditional(numbers1));  // Output: 15
`;

export const afterCode = `function sumArrayFunctional(arr: number[]): number {
  return arr.reduce((acc, current) => acc + current, 0);
}

// Usage:
const numbers2 = [1, 2, 3, 4, 5];
console.log(sumArrayFunctional(numbers2));  // Output: 15
`;
