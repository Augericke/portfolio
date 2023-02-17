import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.scss";
import "@/styles/prisma-theme.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={["light", "dark"]}>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
