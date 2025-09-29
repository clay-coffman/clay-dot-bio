import { Html } from "@elysiajs/html";

export const HomePage = () => (
  <div>
    <h1>Welcome to My Site</h1>
    <p>This is a modern hypermedia application built with Bun, ElysiaJS, and HTMX.</p>

    <section style="margin: 2rem 0;">
      <h2>HTMX Demo</h2>
      <p>Click the button below to load content dynamically without a full page reload:</p>

      <div style="margin: 1rem 0;">
        <button
          class="btn"
          hx-get="/api/greeting?name=Developer"
          hx-target="#dynamic-content"
          hx-indicator="#spinner"
        >
          Load Dynamic Content
        </button>
        <span id="spinner" class="htmx-indicator" style="margin-left: 1rem;">
          <span class="loading"></span> Loading...
        </span>
      </div>

      <div id="dynamic-content">
        {/* Dynamic content will be loaded here */}
      </div>
    </section>

    <section style="margin: 2rem 0;">
      <h2>Contact Form (HTMX)</h2>
      <form
        hx-post="/api/contact"
        hx-target="#form-response"
        hx-indicator="#form-spinner"
        style="max-width: 400px;"
      >
        <div style="margin-bottom: 1rem;">
          <label for="name" style="display: block; margin-bottom: 0.25rem;">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;"
          />
        </div>

        <div style="margin-bottom: 1rem;">
          <label for="email" style="display: block; margin-bottom: 0.25rem;">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;"
          />
        </div>

        <div style="margin-bottom: 1rem;">
          <label for="message" style="display: block; margin-bottom: 0.25rem;">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;"
          ></textarea>
        </div>

        <button type="submit" class="btn">
          Send Message
        </button>
        <span id="form-spinner" class="htmx-indicator" style="margin-left: 1rem;">
          <span class="loading"></span> Sending...
        </span>
      </form>

      <div id="form-response" style="margin-top: 1rem;">
        {/* Form response will appear here */}
      </div>
    </section>

    <section style="margin: 2rem 0;">
      <h2>Navigation with hx-boost</h2>
      <p>
        The navigation links use <code>hx-boost</code> to turn regular links into AJAX requests.
        This gives you SPA-like navigation while maintaining all the benefits of server-side rendering.
      </p>
      <p>
        Try clicking the "About" link in the navigation - it will load without a full page refresh!
      </p>
    </section>
  </div>
);