import { serve, h, ComponentChildren } from "./sift.js";

serve({
  "/": Home,
});

function Layout(props: { title: string; children: ComponentChildren }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css"
        />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{props.children}</body>
    </html>
  );
}

function Home() {
  return (
    <Layout title="Home - Deno Dash Docs">
      <div class="m-4 sm:m-6 md:m-8">
        <main class="mx-auto prose">
          <h1>Deno Dash</h1>
          <p>
            Deno Dash is a service you can use to host webservers written in JS
            or TS. It is a serverless platform - this means that your code only
            runs if someone sends it a request.
          </p>
        </main>
      </div>
    </Layout>
  );
}
