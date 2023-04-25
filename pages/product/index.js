import { useGetProductsQuery } from "../../api/productSlice";
import { useId } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Product() {
  const productUid = useId();
  const { data, error, isLoading, isSuccess } = useGetProductsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isSuccess) {
    return data.map((product, index) => {
      return (
        <ul key={productUid + index}>
          <li>{product.category}</li>
          <li>{product.description}</li>
          <li>{product.price}</li>
          <li>{product.title}</li>
        </ul>
      );
    });
  }
  return <h1>Product</h1>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
