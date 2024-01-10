# About Hugo ET-HD

> _Edward Tufte × Humaniora Digital[^1]_

Hugo ET-HD is an accessibility-enhanced[^2], micro-typography-focused, minimalist Hugo theme for enabling wider audience.

## Design Philosophy

The main goals of the design is to be accessible, simplified and remain timeless.
While accessibility features require JavaScript to work properly,
the rendered website is pretty clean, printable and NoScript-friendly.
Hugo ET-HD is designed to be served with minimal power requirements as sustainability act.

> By using Hugo ET-HD you are responsible to plant one tree at minimum, for every 10.000 monthly page views. (source: [Website Carbon](https://www.websitecarbon.com/website/ethd-foxx-ink-id/))

## The Origin

Hugo ET-HD is built upon,—the already awesome [Tufte CSS](https://github.com/edwardtufte/tufte-css), with some tuning to be (now) printable.
The [Hugo Tufte](https://github.com/slashformotion/hugo-tufte) shortcodes minimally modified with basic WAI-ARIA attributes.
[Crimson](https://github.com/skosch/Crimson) replaces the primary serif typeface for [Classic Thesis](https://github.com/classicthesis/classicthesis) look and feel.
The split layout of landing page style is inspired by [Revue Faire](https://revue-faire.eu/)'s homepage.
While more simple feed options has [LOW←TECH MAGAZINE](https://solar.lowtechmagazine.com/) influence.
The chromastyle also inspired by Shikiori color palette.
Yeah, that couldn't be more stealing.

## Feature Highlights

![various color scheme and contrast in split layout landing page](https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/images/tn.png)

- Improved HTML structure with WAI-ARIA attribute.
- No-Script browser friendly in mind[^3].
- Even more printable Edward Tufte Style CSS.
- Automatic color scheme & contrast based on system preferences.
- Legibility control:
  - BionRead (experimental) -- Bionic Reading-like JavaScript implementation based on [JS Bionic Reading](https://github.com/markmead/js-bionic-reading).
  - [OpenDyslexic](https://opendyslexic.org) Fonts.
  - Font scaling override.
  - Baseline height override.
  - Color scheme override.
  - Contrast override.
- Automatic or manual post cover embedding[^4].
- Automatic or manual audio article embedding[^5].
- Task list with strike-through input.
- Slider and split layout landing page options with customizable article feed listing.

### Customizable Home Page

Setup your home page in `config.toml` with these parameters:

```
[params]
  [params.home]
    slider = true #or false
    layoutSplit = true #or false
  [params.feed]
    grid = true #or false
    cover = true #or false
    summary = true  #or false
```

see exampleSite's [config.toml](exampleSite/config.toml) for more.

![customizable landing page](https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/images/landing.png)

![customizable feed](https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/images/feed.png)

### Read Better

BionRead, OpenDyslexic or why don't we both?

![Choose your fighter!](https://raw.githubusercontent.com/foxihd/hugo-et-hd/master/images/read.png)

# Special Thanks

This project could not be made, without a lot efforts of,—thank to:

- [EdwardTufe/Tufte CSS](https://github.com/edwardtufte/tufte-css) - for the base CSS.
- [Slashformotion/Hugo Tufte](https://github.com/slashformotion/hugo-tufte) - for shortcodes.
- [Markmead/JS Bionic Reading](https://github.com/markmead/js-bionic-reading) - for Bionread support.
- [Skoch/Crimson](https://github.com/skosch/Crimson) - for serif typeface.
- [Omnibus-Type/Rosario](https://github.com/Omnibus-Type/Rosario) - for sans-serif typeface.
- [GoogleFonts/Inconsolata](https://github.com/googlefonts/Inconsolata) - for teletype typeface.
- [OpenDyslexic](https://opendyslexic.org) - for dyslexia friendly typeface.
- [Msurguy/Flow Lines](https://github.com/msurguy/flow-lines) - for generated feature images.
- [IcoMoon](https://icomoon.io) - for icon font.

[^1]: `/Humaniora Digital/` is Indonesian for *digital humanities*.
[^2]: Accesibility is not tested by peer yet, I don't warrant the feature will function as intended.
[^3]: Legibility control features require JavaScript.
[^4]: Automatic attach post cover by `cover.*` filename in the same `index.md` folder.
[^5]: Automatic attach audio article by `audio.*` filename in the same `index.md` folder.