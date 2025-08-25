import type { ImgHTMLAttributes } from "react";

export default function Logo(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src="/logo.svg" alt="LiveMart logo" {...props} />;
}
