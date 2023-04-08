import LeftSideBar from "../components/layouts/DrawerWeb";

export default function Layout({ children }) {
  return (
    <>
      <LeftSideBar>{children}</LeftSideBar>
    </>
  );
}
