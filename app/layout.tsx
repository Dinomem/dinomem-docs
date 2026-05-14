import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default:  'AgentMem — Memory API for AI agents',
    template: '%s | AgentMem',
  },
  description: 'Postgres-native memory layer for AI agents. TypeScript and Python SDKs. CRDT conflict resolution, hybrid retrieval, webhooks, BYOK.',
}

const banner = (
  <Banner storageKey="agentmem-docs-banner">
    AgentMem is in active development. <a href="https://github.com/rooney011/agentmem-sdk">Star us on GitHub</a>.
  </Banner>
)

const navbar = (
  <Navbar
    logo={<b>AgentMem</b>}
    projectLink="https://github.com/rooney011/agentmem-sdk"
  />
)

const footer = (
  <Footer>
    Apache 2.0 {new Date().getFullYear()} © AgentMem
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          docsRepositoryBase="https://github.com/rooney011/agentmem-docs/blob/main"
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
