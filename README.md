# Pawar Adithya — Personal Portfolio

A responsive, monochrome portfolio built with plain HTML, CSS, and JavaScript. It has no package installation or build step and can be hosted as a static site.

## Run locally

Open `index.html` in a browser, or start a simple local server from this folder:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Update the content

Edit the `PORTFOLIO` object near the top of `app.js` to update profile details, education, interests, skill cards, and project cards. Leave `liveDemo` empty unless a real, working deployment URL is available. The resume button remains disabled until a real PDF is added and linked.

The contact form currently validates input in the browser but does not send or store messages. Connect a backend or email service before using it to receive messages.

## Static hosting

Deploy the folder to any static host, such as GitHub Pages or Vercel. No server-side runtime is required for the portfolio itself.
