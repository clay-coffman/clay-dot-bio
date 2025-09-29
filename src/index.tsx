import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { BaseLayout } from "./layouts/BaseLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

const app = new Elysia()
  .use(html())
  .use(
    staticPlugin({
      assets: "public",
      prefix: "/public",
    })
  )
  // Main page route
  .get("/", () => (
    <BaseLayout>
      <HomePage />
    </BaseLayout>
  ))
  // About page route - full page load
  .get("/about", () => (
    <BaseLayout>
      <AboutPage />
    </BaseLayout>
  ))
  // HTMX partial route - returns just the content without layout
  .get("/partials/about", () => <AboutPage />)
  // Example HTMX endpoint that returns a fragment
  .get("/api/greeting", ({ query }) => {
    const name = query.name || "World";
    return (
      <div class="greeting">
        <h2>Hello, {name}!</h2>
        <p>This content was loaded with HTMX</p>
      </div>
    );
  })
  // Example form handler
  .post("/api/contact", ({ body }: { body: any }) => {
    console.log("Form submission:", body);
    return (
      <div class="alert alert-success" role="alert">
        Thank you for your message! We'll get back to you soon.
      </div>
    );
  })
  .listen(3000);

console.log(
  `🚀 Server is running at http://${app.server?.hostname}:${app.server?.port}`
);