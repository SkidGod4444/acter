import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme.provider";
import { UserProvider } from "@/context/user.context";
import { RoutesContext } from "@/context/routes.context";
import { DATA } from "@/db/defaults";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistBold = localFont({
  src: "./fonts/GeistBoldVF.otf",
  variable: "--font-geist-bold",
  weight: "100 900",
});
const geistSemiBold = localFont({
  src: "./fonts/GeistSemiBoldVF.otf",
  variable: "--font-geist-semi-bold",
  weight: "100 900",
});
const geistMedium = localFont({
  src: "./fonts/GeistMediumVF.otf",
  variable: "--font-geist-medium",
  weight: "100 900",
});
const geistRegular = localFont({
  src: "./fonts/GeistRegularVF.otf",
  variable: "--font-geist-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s - ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Saidev Dhal",
    "SkidGod",
    "Saidev Dhal Portfolio",
    "Saidev Dhal Projects",
    "Saidev Dhal Blogs",
    "Saidev Dhal Resume",
    "Saidev Dhal Contact",
    "Saidev Dhal Instagram",
    "Saidev Dhal Youtube",
    "Saidev Dhal Email",
    "Saidev Dhal LinkedIn",
    "Saidev Dhal GitHub",
    "Saidev Dhal Twitter",
    "saidevdhal",
    "skidgod",
    "skidgod4444",
  ],
  authors: [
    {
      name: `${DATA.name}`,
      url: DATA.url,
    },
  ],
  creator: `${DATA.name}`,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    images: [
      {
        url: DATA.prevImage,
      },
    ],
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    site: DATA.url,
    creator: `${DATA.name}`,
    description: DATA.description,
    images: [
      {
        url: DATA.prevImage,
        width: 1200,
        height: 630,
        alt: `${DATA.name}`,
      },
    ],
  },
};

const protectedRoutes = ["/chat", "/history"];
const publicRoutes = ["/"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistMedium.variable} ${geistBold.variable} ${geistSemiBold.variable} ${geistRegular.variable} antialiased`}
      >
        <UserProvider>
          <RoutesContext
            protectedRoutes={protectedRoutes}
            publicRoutes={publicRoutes}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </RoutesContext>
        </UserProvider>
      </body>
    </html>
  );
}
