import LeftSideBar from "../components/layouts/Drawer";

export default function Layout({ children, font }) {
  return <LeftSideBar font={font}>{children}</LeftSideBar>;
}
