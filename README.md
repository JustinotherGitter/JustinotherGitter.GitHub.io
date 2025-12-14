<!-- markdownlint-disable MD033 -->
# JustinotherGitter.GitHub.io

Personal/portfolio site built with Astro and Svelte.

## Local development

- Install dependencies: `pnpm install`
- Run the dev server: `pnpm dev` (<kbd>Ctrl</kbd>+<kbd>Click</kbd> the URL printed in the terminal)

## Content

Site content lives in the `src` directory and is divided into files under `src/content` (edit those Markdown/MDX files to change pages).

### Information

The about section of the site.
Includes information about me, my projects, and links out.

### Jottings

Lightweight, quick-to-read notes.
Serve as quick thoughts, updates, and smaller pieces of content.
Some common reoccuring topics include:

- Shorter form content
- Announcements and updates
- etc.
Jottings function much the same as notes, with similar metadata fields:

```markdown
---
title: Jotting Title
timestamp: 1919-03-01 00:00:00+08:00
series: A Series Name               <!-- optional, broader collections than tags -->
tags: [Literature, Demo]
description: A classic short story by Lu Xun depicting the tragic fate of Kong Yiji, an educated man unable to integrate into society in feudal China.
top: 1
---
```

### Notes

The core content to serve.
These are longer-form articles and content-rich notes.
Some common reoccuring topics include:

- Reviews
- Tutorials
- Guides
- Essays
- etc.

When notes need a more complex structure, an encompassing directory is used to collect the note and its assets (images, data files, etc.).
The note is renamed to `index.md` or `index.mdx` in these cases, while the containing folder takes on the notes name.

Notes have a few common metadata fields:

```markdown
---
title: Note Title
timestamp: 2025-04-04 00:00:00+00:00
series: Astro                                <!-- optional, broader collections than tags -->
tags: [Content, Demo]                                 <!-- tags to help with organization -->
description: "A brief description that summarizes the note's content." <!-- brief summary -->
toc: true
top: 1                   <!-- optional, whether to feature the note on the homepage (???) -->
sensitive: false               <!-- optional, whether the note contains sensitive content -->
---
```

### Preface

Introductory content that provides context for the site.
Displays on the homepage.

## Image Content

Images on the site can come from a multitude of places.

### Relative paths

```markdown
![Image description](photo.png)
```

### Absolute paths

Images may also live in the `public/` directory and be referenced with an absolute path.

```markdown
![Image description](/photo.png)
```

This isn't exaclty great for content organization, but it works for smaller sites.

### External image hosting

A URL can also be used to reference an externally hosted image.

```markdown
![Image description](https://image.host/photo.png)
```

## Build & preview

- Build for production: `pnpm build`
- Preview the production build: `pnpm preview`

## Internationalization (i18n)

The theme has built-in multi-language support, with the default language being **English (`en`)**.

### Changing Default Language

Modify `i18n.defaultLocale` in `site.config.ts`:

```ts
export default siteConfig({
    i18n: {
        locales: ["en", "zh-cn", "ja"],
        // Change default language to Simplified Chinese
        defaultLocale: "zh-cn"
    },
});
```

### Adding a New Language

Create a new **YAML** translation file in the `src/i18n/` directory, such as `tlh/index.yaml` (Klingon).

Add translation content following the format of existing translation files in the `i18n` directory:

```yaml
# src/i18n/tlh/index.yaml

# Note: Add the `language` field as the display name for the current language
language: tlhIngan Hol
...
```

Modify `src/i18n/index.ts` to import and register the new language:

```ts
import tlh from "./tlh/index.yaml";
import tlhScript from "./tlh/script.yaml";

const translations = {
  en: {
    ...en,
    script: enScript
  },
  "zh-cn": {
    ...zhCN,
    script: zhCNScript
  },
  ja: {
    ...ja,
    script: jaScript
  },
  tlh: {
    ...tlh,
    script: tlhScript
  }
};
```

If the new language requires specific font support, you can add a font mapping in the `notoFonts` object in `src/layouts/App.astro`:

```ts
const notoFonts: Record<string, string> = {
    "zh-cn": "Noto+Serif+SC",
    ja: "Noto+Serif+JP",
    tlh: "Noto+Serif+..."
};
```

Add the new language to the `i18n.locales` array in `site.config.ts`:

```ts
export default siteConfig({
    i18n: {
        locales: ["en", "zh-cn", "ja", "tlh"],
        defaultLocale: "en"
    },
});
```

Create corresponding language directories under each content section:

```text
content/
├── note/tlh/
├── jotting/tlh/
├── information/tlh/
└── preface/tlh/
```

### Single Language Mode

> [!Warning]
> Do not directly delete the `i18n` configuration field, as this will cause the theme to malfunction!

Keep only the desired language in `i18n.locales` in `site.config.ts`, removing other entries:

```ts
export default siteConfig({
    i18n: {
        locales: ["en"],
        defaultLocale: "en"
    },
});
```

Remove language subdirectories and create content files directly under section directories.

**Multi-language directory structure:**

```text
content/
├── note/
│   ├── en/
│   │   ├── common.md
│   │   ├── image-preview/
│   │   │   ├── index.md
│   │   │   └── photo.png
│   │   └── special.md
│   ├── ja/
│   │   ├── common.md
│   │   └── image-preview/
│   │       ├── index.md
│   │       └── photo.png
│   └── zh-cn/
│       ├── common.md
│       └── image-preview/
│           ├── index.md
│           └── photo.png
├── jotting/
│     ├── en/
│     │   ├── normal.md
│     │   └── ...
│     ├── ja/
│     └── zh-cn/
└── ...
```

**Single language directory structure:**

```text
content/
├── note/
│   ├── common.md
│   ├── image-preview/
│   │   ├── index.md
│   │   └── photo.png
│   └── special.md
├── jotting/
│   ├── normal.md
│   └── ...
└── ...
```

> [!Tip]
>
> - In single language mode, the language switcher will be automatically hidden
> - Other language translation files that have been created can be kept and will not affect operation

## Markdown Extensions

<!-- markdownlint-disable MD033 -->
<style>
.red {
  color: #ef4444;
  font-weight: 600;
}

.big {
  font-size: 1.25em;
  font-weight: bold;
}

.colorful {
  font-weight: bold;
  background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 3s linear infinite;
}

@keyframes rainbow {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}
</style>

I originally wanted to use my favorite [markdown-it](https://github.com/markdown-it/markdown-it) as the Markdown rendering engine. But to adapt to Astro and prevent unexpected errors, I compromised and used [remark](https://github.com/remarkjs/remark).

Out of personal usage habits, I added some plugins to implement syntax extensions.

### Ruby

> Plugin: [`remark-ruby-directive`](https://github.com/brklntmhwk/remark-ruby-directive)

```markdown
:ruby[拼音(pīn yīn)]
```

:ruby[拼音(pīn yīn)]

```markdown
:ruby[振り仮名（ふ　がな）]
```

:ruby[振り仮名（ふ　がな）]

### Spoiler

> Self-implemented

```markdown
!!Spoiler content!!
```

!!Spoiler content!!

### Emoji

> Plugin: [`remark-gemoji`](https://github.com/remarkjs/remark-gemoji)

```markdown
:wink: :cry: :laughing: :yum:
```

:wink: :cry: :laughing: :yum:

[Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet?tab=readme-ov-file#table-of-contents)

### Katex

> Plugin: [`remark-math` & `rehype-katex`](https://github.com/remarkjs/remark-math)

```markdown
$e^{ix} = \cos x + i \sin x$
```

$e^{ix} = \cos x + i \sin x$

```markdown
$$
(f*g)(t)=\int f(\tau)g(t-\tau)d\tau
$$
```

$$
(f*g)(t)=\int f(\tau)g(t-\tau)d\tau
$$

### Footnotes

> Plugin: [`remark-footnotes-extra`](https://github.com/miaobuao/remark-footnotes-extra)

```markdown
Footnote[^1]
[^1]: Footnote **can have markup**.
```

Footnote[^1]
[^1]: Footnote **can have markup**.

```markdown
Inline Footnote^[Inline information]
```

Inline Footnote^[Inline information]

### Abbreviations

> Self-implemented

```markdown
ABBR abbr xABBRx

*[ABBR]: Abbreviation
```

ABBR abbr xABBRx

*[ABBR]: Abbreviation

### GitHub Alerts

> Plugin: [remark-github-blockquote-alert](https://github.com/jaywcjlove/remark-github-blockquote-alert)

```markdown
> [!NOTE]
> General information
```

> [!NOTE]
> General information

```markdown
> [!TIP]
> Optional information
```

> [!TIP]
> Optional information

```markdown
> [!IMPORTANT]
> Important information
```

> [!IMPORTANT]
> Important information

```markdown
> [!WARNING]
> Risk information
```

> [!WARNING]
> Risk information

```markdown
> [!CAUTION]
> Warning information
```

> [!CAUTION]
> Warning information

```markdown
> [!NOTE/(･ρ･)ﾉ]
> Custom title text
```

> [!NOTE/(･ρ･)ﾉ]
> Custom title text

### Extended Tables

> Plugin: [remark-extended-table](https://github.com/wataru-chocola/remark-extended-table)

```markdown
| Left Align  |   Center    | Right Align | Center        |
| :---------- | :---------: | ----------: | ------------- |
| Normal Cell | Merged Cell |             | Merged Column |
| Normal Cell |  2×2 Cell   |             | ^             |
| Normal Cell |      ^      |             | Normal Cell   |
```

| Left Align  |   Center    | Right Align | Center        |
| :---------- | :---------: | ----------: | ------------- |
| Normal Cell | Merged Cell |             | Merged Column |
| Normal Cell |  2×2 Cell   |             | ^             |
| Normal Cell |      ^      |             | Normal Cell   |

### Inline Element Attributes Extension {#custom-id}

> Self-implemented

```markdown
### Inline Element Attributes Extension {#custom-id}
```

```markdown
![Alt text](https://picsum.photos/1600/900?random=1 "on-hover text"){width=300}
```

![An example of an embedded image](https://picsum.photos/1600/900?random=1 "You found an easter egg!"){width=300}

```markdown
**Important**{.colorful} content
```

**Important**{.colorful} content

```markdown
*Multiple*{.red .big} classes
```

*Multiple*{.red .big} classes

```markdown
**Custom attributes**{key="This is a value"}
```

**Custom attributes**{key="This is a value"}
