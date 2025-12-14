import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "Vesta Æterna",
	prologue: "Yours is the Earth and everything that's in it,\nAnd—which is more—you'll be a Man, my son!\n\n- Rudyard Kipling",
	author: {
		name: "Justin Cooper",
		email: "Justin.jb78+vesta.aeterna@gmail.com",
		link: "https://JustinotherGitter.github.io"
	},
	description: "The life and times of Justin Cooper.",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2025"
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en"
	},
	feed: {
		section: "*", // or array of sections e.g. ["blog", "projects"]
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
