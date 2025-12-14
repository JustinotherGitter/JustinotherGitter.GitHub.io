---
title: Markdown Extension Manual
timestamp: 2025-11-24 00:00:00+00:00
series: Astro
tags: [Markup, Demo]
description: Detailed guide to extended Markdown syntax features in the theme, including Ruby annotations, abbreviations, spoiler text, and other special markup syntax.
---

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

## Ruby

> Plugin: [`remark-ruby-directive`](https://github.com/brklntmhwk/remark-ruby-directive)

```markdown
:ruby[拼音(pīn yīn)]
```

:ruby[拼音(pīn yīn)]

```markdown
:ruby[振り仮名（ふ　がな）]
```

:ruby[振り仮名（ふ　がな）]

## Spoiler

> Self-implemented

```markdown
!!Spoiler content!!
```

!!Spoiler content!!

## Emoji

> Plugin: [`remark-gemoji`](https://github.com/remarkjs/remark-gemoji)

```markdown
:wink: :cry: :laughing: :yum:
```

:wink: :cry: :laughing: :yum:

[Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet?tab=readme-ov-file#table-of-contents)

## Katex

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

## Footnotes

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

## Abbreviations

> Self-implemented

```markdown
ABBR abbr xABBRx

*[ABBR]: Abbreviation
```

ABBR abbr xABBRx

*[ABBR]: Abbreviation

## GitHub Alerts

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

## Extended Tables

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

## Inline Element Attributes Extension {#custom-id}

> Self-implemented

```markdown
## Inline Element Attributes Extension {#custom-id}
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
