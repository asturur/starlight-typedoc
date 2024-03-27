import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-typedoc/edit/main/example/',
      },
      plugins: [
        starlightTypeDoc({
          entryPoints: ['../fixtures/basics/src/index.ts'],
          tsconfig: '../fixtures/basics/tsconfig.json',
          sidebar: {
            label: 'API (auto-generated)',
          },
          typeDoc: {
            plugin: ['typedoc-plugin-no-inherit'],
            readme: 'none',
            gitRemote: 'https://github.com/fabricjs/fabric.js/blob',
            gitRevision: 'v6.0.0-beta20',
            entryFileName: 'index.md',
            includeVersion: true,
            sourceLinkTemplate: 'https://github.com/fabricjs/fabric.js/blob/{gitRevision}/{path}#L{line}',
          },
        }),
      ],
      sidebar: [
        typeDocSidebarGroup,
      ],
      title: 'Starlight TypeDoc Example',
    }),
  ],
})
