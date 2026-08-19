import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // SEO TITLE (50–60 chars optimized)
      {
        title:
          "Vertex Media House | Design, Edit & AI Automation",
      },

      // META DESCRIPTION (service + keyword aligned)
      {
        name: "description",
        content:
          "Professional design services, automation solutions, and media production. Expert video editing, AI workflows, and digital solutions for modern businesses.",
      },

      { name: "author", content: "Vertex Media House" },

      // KEYWORDS (light relevance only)
      {
        name: "keywords",
        content:
          "design services, automation solutions, media production, video editing, digital agency",
      },

      // OPEN GRAPH
      {
        property: "og:title",
        content:
          "Vertex Media House | Design, Automation & Media Production Services",
      },
      {
        property: "og:description",
        content:
          "Professional design, automation, and media production services for scaling businesses.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://vertexmediahouse.com/",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7c1cf225-a6ca-4242-a375-8f9107d0b59d/id-preview-3b216c31--4e4bdf54-aa10-47e6-a843-cf4818e551cc.lovable.app-1778734852182.png",
      },

      // TWITTER
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Vertex Media House | Design & Automation",
      },
      {
        name: "twitter:description",
        content:
          "Design, automation, and media production services for scaling businesses.",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7c1cf225-a6ca-4242-a375-8f9107d0b59d/id-preview-3b216c31--4e4bdf54-aa10-47e6-a843-cf4818e551cc.lovable.app-1778734852182.png",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },

      {
        rel: "icon",
        href: "/favicon.ico",
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16.png",
      },

      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "canonical",
        href: "https://vertexmediahouse.com/",
      },
    ]
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CTXV9P8T4C"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-CTXV9P8T4C');
            `,
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Vertex Media House",
              url: "https://vertexmediahouse.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://vertexmediahouse.com/search?q={query}",
                "query-input": "required name=query",
              },
              publisher: {
                "@type": "Organization",
                name: "Vertex Media House",
                url: "https://vertexmediahouse.com",
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vertex Media House",
              url: "https://vertexmediahouse.com",
              logo:
                "https://vertexmediahouse.com/assets/imgs/favicon.svg",
              sameAs: [],
            }),
          }}
        />

        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
