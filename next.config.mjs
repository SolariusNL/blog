import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
