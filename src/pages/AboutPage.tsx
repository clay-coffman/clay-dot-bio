import { Html } from "@elysiajs/html";

export const AboutPage = () => (
  <div>
    <h1>About</h1>
    <p>
      Hi, I'm Clay Coffman. I'm a software engineer passionate about building
      modern web applications with cutting-edge technologies.
    </p>

    <section style="margin: 2rem 0;">
      <h2>Current Stack</h2>
      <ul style="line-height: 2;">
        <li><strong>Runtime:</strong> Bun - A fast all-in-one JavaScript runtime</li>
        <li><strong>Framework:</strong> ElysiaJS - A performant web framework for Bun</li>
        <li><strong>Hypermedia:</strong> HTMX - High power tools for HTML</li>
        <li><strong>CMS:</strong> Ghost (planned) - Modern headless CMS</li>
      </ul>
    </section>

    <section style="margin: 2rem 0;">
      <h2>Why Hypermedia?</h2>
      <p>
        Hypermedia-driven applications offer several advantages:
      </p>
      <ul style="margin-top: 1rem; line-height: 2;">
        <li>✅ Simplicity - Less JavaScript complexity</li>
        <li>✅ Performance - Server-side rendering by default</li>
        <li>✅ SEO-friendly - Full HTML content on every request</li>
        <li>✅ Progressive enhancement - Works without JavaScript</li>
        <li>✅ Better caching - Standard HTTP caching strategies</li>
      </ul>
    </section>

    <section style="margin: 2rem 0;">
      <h2>Load More Content</h2>
      <p>Click below to load additional content with HTMX:</p>
      <button
        class="btn"
        hx-get="/api/greeting?name=Friend"
        hx-target="#more-content"
        hx-swap="innerHTML"
      >
        Load More
      </button>
      <div id="more-content" style="margin-top: 1rem;">
        {/* Additional content loads here */}
      </div>
    </section>
  </div>
);