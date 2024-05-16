import type { Metadata } from "next";

import {
	archivoBlack,
	dosis,
	openSans,
	shareTechMono,
	orbitron,
	montserrat,
} from "./fonts";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Prakhar Gupta",
	description: "Software Engineer, LITM",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" />
				<link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.png" />
				<meta name="author" content="Prakhar Gupta" />
				<meta property="og:site_name" content="softwaredesign.ing" />
				<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
				<link
					rel="icon"
					href="%PUBLIC_URL%/favicon.png"
					type="image/x-icon"
				/>

				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-LCYNGC7DKT"
				/>

				<Script id="google-analytics">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "G-LCYNGC7DKT");
        `}
				</Script>

				<Script id="mailer-lite">
					{`
            (function (w, d, e, u, f, l, n) {
                (w[f] =
                    w[f] ||
                    function () {
                        (w[f].q = w[f].q || []).push(arguments);
                    }),
                    (l = d.createElement(e)),
                    (l.async = 1),
                    (l.src = u),
                    (n = d.getElementsByTagName(e)[0]),
                    n.parentNode.insertBefore(l, n);
            })(
                window,
                document,
                "script",
                "https://assets.mailerlite.com/js/universal.js",
                "ml"
            );
            ml("account", "588409");
            `}
				</Script>
			</head>
			<body
				className={`${montserrat.variable} ${archivoBlack.variable} ${dosis.variable} ${openSans.variable} ${shareTechMono.variable} ${orbitron.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
