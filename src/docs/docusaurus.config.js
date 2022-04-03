// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Angular 101",
    tagline: "Söz uçar wiki kalır 🤭",
    url: "https://github.com", //Github olarak güncelliyoruz.
    baseUrl: "/docDemo/", //Burayı güncelliyoruz.
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/angular.svg",
    organizationName: "hakanyalitekin", // Github kullanıcı adı.
    projectName: "docDemo", // Repomuzun adı.
    deploymentBranch: "gh-pages", // Bunu mutlaka ekliyoruz.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/hakanyalitekin/docDemo/tree/master/docs/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: "https://github.com/hakanyalitekin/docDemo/tree/master/docs/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Angular 101",
                logo: {
                    alt: "Angular Logo",
                    src: "img/angular.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Öğretici",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/hakanyalitekin/docdemo",
                        position: "right",
                        className: "header-github-link",
                        "aria-label": "GitHub repository",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/docusaurus",
                            },
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/docusaurus",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/docusaurus",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/hakanyalitekin/docusaurus",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
            },
        ],
    ],
}

module.exports = config
