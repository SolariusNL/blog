import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  distDir: "out",
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
