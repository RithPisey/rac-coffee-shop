import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function About() {
  return <h1>About Page</h1>;
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
