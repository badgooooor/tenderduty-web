import type { ReactElement } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Badge } from "./ui/badge";

type Props = {
  url: string;
};

export const Header = ({ url }: Props): ReactElement => {
  return (
    <header
      aria-label="header"
      className="fixed top-0 bg-background border-solid border-b-2 border-accent-foreground flex items-center justify-between z-40 w-full pt-4 pb-4 p-8"
    >
      <a href="/">
        <h3 className="text-2xl font-semibold tracking-tight">Tenderduty</h3>
      </a>
      <div className="flex flex-row items-center">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex items-center justify-between">
            <NavigationMenuItem>
              <NavigationMenuLink href="/logs">
                <NavigationMenuItem>Logs</NavigationMenuItem>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Badge className="ml-4">{url}</Badge>
      </div>
    </header>
  );
};
