import { useRouter } from "next/router";
import React from "react";

function ProductPage() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/products/page/1");
  });
}

export default ProductPage;
