import { useEffect } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SƠN MÀI HỘI HOẠ VIỆT NAM" },
      { name: "description", content: "A century of Vietnamese lacquer mastery — Maison Vũ Gia." },
      { name: "author", content: "Maison Vũ Gia" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "SƠN MÀI HỘI HOẠ VIỆT NAM" },
      { name: "twitter:title", content: "SƠN MÀI HỘI HOẠ VIỆT NAM" },
      { property: "og:description", content: "A century of Vietnamese lacquer mastery — Maison Vũ Gia." },
      { name: "twitter:description", content: "A century of Vietnamese lacquer mastery — Maison Vũ Gia." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d8adbe2a-b05d-4e2b-9a25-faf8f2380957/id-preview-821add81--b0fea285-8c0f-4e0f-a021-2912ba360c9a.lovable.app-1776764887853.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d8adbe2a-b05d-4e2b-9a25-faf8f2380957/id-preview-821add81--b0fea285-8c0f-4e0f-a021-2912ba360c9a.lovable.app-1776764887853.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
  return <Outlet />;
}
