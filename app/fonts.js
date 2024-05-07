// app/fonts.ts
import {
	Archivo_Black,
	Dosis,
	Open_Sans,
	Share_Tech_Mono,
	Orbitron,
	Montserrat,
} from "next/font/google";

export const montserrat = Montserrat({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const archivoBlack = Archivo_Black({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-archivo-black",
});

export const dosis = Dosis({
	weight: "500",
	subsets: ["latin"],
	variable: "--font-dosis",
});

export const openSans = Open_Sans({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-open-sans",
});

export const shareTechMono = Share_Tech_Mono({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-share-tech-mono",
});

export const orbitron = Orbitron({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-orbitron",
});
