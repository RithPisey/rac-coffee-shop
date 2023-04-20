import { memo } from "react";
import LeftSideBar from "../components/layouts/Drawer";

export default function Layout({ children, font }) {
  return (
    <main>
      <LeftSideBar font={font}>{children}</LeftSideBar>
    </main>
  );
}
