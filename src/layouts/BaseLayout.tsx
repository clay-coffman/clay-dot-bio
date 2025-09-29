import { Html } from "@elysiajs/html";

interface BaseLayoutProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const BaseLayout = ({ children, title = "Clay Coffman" }: BaseLayoutProps) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>

      {/* HTMX */}
      <script src="https://unpkg.com/htmx.org@1.9.10"></script>

      {/* HTMX Extensions */}
      <script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js"></script>
      <script src="https://unpkg.com/htmx.org/dist/ext/loading-states.js"></script>

      {/* Alpine.js for additional interactivity if needed */}
      <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer></script>

      {/* Simple CSS reset and basic styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          line-height: 1.6;
          color: #333;
          background: #f4f4f4;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        header {
          background: #fff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          padding: 1rem 0;
          margin-bottom: 2rem;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 2rem;
        }

        nav a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
        }

        nav a:hover {
          color: #007bff;
        }

        main {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          min-height: 60vh;
        }

        .btn {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.3s;
        }

        .btn:hover {
          background: #0056b3;
        }

        .htmx-indicator {
          display: none;
        }

        .htmx-request .htmx-indicator {
          display: inline-block;
        }

        .htmx-request.htmx-indicator {
          display: inline-block;
        }

        .loading {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #007bff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .alert {
          padding: 1rem;
          margin: 1rem 0;
          border-radius: 4px;
        }

        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .greeting {
          padding: 1rem;
          background: #e7f3ff;
          border-radius: 4px;
          margin: 1rem 0;
        }
      `}</style>
    </head>
    <body>
      <header>
        <nav class="container">
          <div>
            <h1 style="font-size: 1.5rem;">Clay Coffman</h1>
          </div>
          <ul>
            <li>
              <a href="/" hx-boost="true">Home</a>
            </li>
            <li>
              <a href="/about" hx-boost="true">About</a>
            </li>
            <li>
              <a href="#" hx-get="/api/greeting?name=HTMX" hx-target="#dynamic-content">
                Load Greeting
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main class="container" id="main-content">
        {children}
      </main>

      <footer style="text-align: center; padding: 2rem 0; color: #666;">
        <p>&copy; 2024 Clay Coffman. Built with Bun, ElysiaJS, and HTMX</p>
      </footer>
    </body>
  </html>
);