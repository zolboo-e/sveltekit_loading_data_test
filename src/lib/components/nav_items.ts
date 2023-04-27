import type { ComponentType } from "svelte";

import HomeIcon from "$lib/assets/icons/home_icon.svelte";
import SearchIcon from "$lib/assets/icons/search_icon.svelte";

interface INavItem {
  href: string;
  icon: ComponentType;
  text: string;
}
export const navItems: INavItem[] = [
  {
    href: "/",
    icon: HomeIcon,
    text: "Home",
  },
  {
    href: "/users",
    icon: SearchIcon,
    text: "Users",
  },
];
