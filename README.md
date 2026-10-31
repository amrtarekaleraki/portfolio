# Amr Aleraki Portfolio

Static site: open `index.html` in a browser, or upload the whole folder to any host (Netlify, Vercel, GitHub Pages, cPanel).

## Edit projects
All project text lives in `js/projects.js`:
- `name`, `kind`, `summary`, `description`, `highlights`: the copy shown on cards and in the project view
- `category`: one of `food`, `stores`, `business`, `health`, `apps`, `travel`, `education`
- `featured: true`: shows the project first with a "Live brand" badge
- `url`: add a live link and a "Visit live site" button appears
- `stack`: optional technologies, e.g. `["Laravel 9", "MySQL"]`

## Images
- `assets/long/<slug>.webp`: full-page preview (800px wide), used for the hover scroll and the "Full page" view
- `assets/shots/<slug>-1.webp ... -5.webp`: page sections (1280x800) for the gallery
- `js/images.js`: ratio and number of section shots per project. Update it if you add a project.

Open a project directly with its slug in the URL, e.g. `index.html#cannelle`.
