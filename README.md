# dapctl.com

Source for [dapctl.com](https://dapctl.com). Built with [Zola](https://www.getzola.org/).

## Local dev

```sh
zola serve        # http://127.0.0.1:1111
zola build        # outputs to public/
```

Requires Zola 0.19+. Install: `brew install zola` / `scoop install zola` / [zola releases](https://github.com/getzola/zola/releases).

## Deploy

Cloudflare Pages — push to `main` triggers deploy automatically.

- Build command: `zola build`
- Build output: `public`
- Env: `ZOLA_VERSION=0.19.2`
