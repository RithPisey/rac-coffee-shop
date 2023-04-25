import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { ThreeCircles } from "react-loader-spinner";

export default function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    loading && (
      <Box
        className="absolute bg-gray-100 bg-opacity-40 w-full  h-full z-[10000] overflow-hidden"
        sx={{
          background: "rgba(237, 237, 237, 0.2)",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "10000",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "relative", left: "45%", top: "45%" }}>
          <ThreeCircles width={"100"} height={"100"} color="#8bc34a" />
        </Box>
      </Box>
    )
  );
}
