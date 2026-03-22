import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "2nd Nature Safety",
    description: "Health and safety training, consulting, and equipment supply.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}