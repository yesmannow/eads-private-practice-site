// Server component that loads navigation and renders HeaderNav
import { getNavigation } from "@/config/site-server";
import { HeaderNav } from "./HeaderNav";

export async function Header() {
  const navigation = await getNavigation();
  return <HeaderNav navItems={navigation.items} />;
}
