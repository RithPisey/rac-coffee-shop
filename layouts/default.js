import { memo } from "react";
import LeftSideBar from "../components/layouts/Drawer";

export default function Layout({ children }) {
  const LeftSideBarMemo = memo(LeftSideBar);
  return (
    <>
      <LeftSideBarMemo>{children}</LeftSideBarMemo>
    </>
  );
}
