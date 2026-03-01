# Vallery — Portfolio

Personal portfolio for Vallery — Software Engineer & UX/UI Designer.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Pages
- `/` — Home with hero animation + engineering projects
- `/about` — Full bio, skills, experience timeline
- `/design` — UX/UI case studies with modal overlay
- `/contact` — Contact form + social links

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customisation

### Update your info
- **Name/email** → `src/components/Navbar.tsx` + `src/components/Footer.tsx`
- **Projects** → `src/lib/projects.ts` (add your real GitHub URLs)
- **Case Studies** → `src/lib/caseStudies.ts`
- **Resume** → Drop your PDF in `public/files/Vallery_Resume.pdf`
- **Photo** → Replace the `👤` emoji in `src/app/about/page.tsx` with `<Image src="/images/photo.jpg" />`

### Accent color
Change `--accent: #00d4ff` in `src/styles/globals.css`

## Deploy to Vercel

```bash
npx vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com)
