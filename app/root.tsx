import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";
import {
  json,
  type DataFunctionArgs,
  type LinksFunction,
  type MetaFunction,
} from "@remix-run/node";
import tailwindStyleSheetUrl from "~/styles/tailwind.css";
import fontUrl from "~/styles/font.css";
import sharedStylesUrl from "~/styles/shared.css";
import { AppLayout } from "~/components/app-layout";
import { getPublicEnv } from "~/utils/env.server";
import { getTheme, setTheme } from "~/utils/theme.server";
import { getDomainUrl } from "~/utils/misc";
import { ClientHintCheck, getHints } from "./utils/client-hints";
import { ThemeFormSchema, useTheme } from "./utils/color-mode";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: fontUrl },
  { rel: "stylesheet", href: tailwindStyleSheetUrl },
  { rel: "stylesheet", href: sharedStylesUrl },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon_32.png",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "MooreNet" },
    { name: "description", content: "Welcome to MooreNet" },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export async function loader({ request }: DataFunctionArgs) {
  return json({
    requestInfo: {
      hints: getHints(request),
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
      userPrefs: {
        theme: getTheme(request),
      },
    },
    ENV: getPublicEnv(),
  });
}

export async function action({ request }: DataFunctionArgs) {
  const formData = await request.formData();
  const submission = ThemeFormSchema.safeParse({
    theme: formData.get("theme"),
  });
  if (!submission.success) {
    return json({ status: "error", error: submission.error } as const, {
      status: 400,
    });
  }
  const { theme } = submission.data;

  const responseInit = {
    headers: { "set-cookie": setTheme(theme) },
  };
  return json({ success: true, submission }, responseInit);
}

export default function App() {
  const theme = useTheme();
  return (
    <html className={theme}>
      <head>
        <ClientHintCheck />
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <AppLayout>
          <Outlet />
        </AppLayout>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
