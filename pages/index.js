import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("hello-world")}</h1>
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
