# DinoMem Docs

Source for the official [DinoMem](https://dinomem-dashboard.vercel.app) documentation site.

Built with [Nextra 4](https://nextra.site) + Next.js 15.

## Local development

```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

## Adding a page

Drop a `.mdx` file under `content/`. Sidebar order is controlled by the
nearest `_meta.json`. The route is the filename minus extension; an
`index.mdx` becomes the section landing page.

## Deploy

Connected to Vercel — every push to `main` triggers a production build.
The dashboard lives at [dinomem-dashboard.vercel.app](https://dinomem-dashboard.vercel.app);
the docs deploy at the Vercel-assigned URL for this repo (custom domain TBD).

## License

Apache 2.0 — see [LICENSE](./LICENSE).
