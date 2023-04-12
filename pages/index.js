import { useTranslation } from "next-i18next";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("hello-world")}</h1>
      <Link href={"/about"}>about</Link>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
