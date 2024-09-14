import React from "react";
import Image from "next/image";

import Layout from "../components/layout/layout";

const images = [{ src: "/forest.jpg" }, { src: "/storr.jpg" }];

export default function Gallery() {
  return (
    <Layout siteTitle="Jack Leslie / Gallery" pageTitle="Gallery">
      <div className="d-flex flex-column justify-content-center align-items-start gap-y-2">
        {images.map(({ src }) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={600}
            height={400}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        ))}
      </div>
    </Layout>
  );
}
