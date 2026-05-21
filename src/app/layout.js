import { Faculty_Glyphic, Mona_Sans } from "next/font/google";
import "./globals.css";

const facultyGlyphic = Faculty_Glyphic({
  variable: "--font-faculty",
  subsets: ["latin"],
  weight: "400",
});

const monaSans = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Casa Antica - Luxury Furniture",
  description: "Casa Antica is a luxury furniture warehouse",
  keywords: "furniture, luxury, warehouse, Casa Antica",
  creator: "Gautam Patel",
  robots: "index, follow",
  openGraph: {
    title: "Casa Antica - Luxury Furniture",
    description: "Casa Antica is a luxury furniture warehouse",
    url: "https://casaanticafurniture.com",
    siteName: "Casa Antica",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Antica - Luxury Furniture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Antica - Luxury Furniture",
    description: "Casa Antica is a luxury furniture warehouse",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://casaanticafurniture.com",
  },
  authors: [
    {
      name: "Gautam Patel",
      url: "https://casaanticafurniture.com",
    },
  ],
  publisher: {
    name: "Gautam Patel",
    url: "https://casaanticafurniture.com",
  },
  location: {
    name: "Casa Antica",
    url: "https://casaanticafurniture.com",
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${facultyGlyphic.variable} ${monaSans.variable} h-full antialiased`}
    >
      <body className="">{children}</body>
    </html>
  );
}
