import { useRouter } from "next/router";
import { useEffect } from "react";
import Home from "./Market/home";

export default function Main() {
  const router = useRouter();

  return <Home />;
}
