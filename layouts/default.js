import LeftSideBar from "../components/layouts/Drawer";

export default function Layout({ children }) {
  return (
    <>
      <LeftSideBar>{children}</LeftSideBar>
    </>
  );
}
