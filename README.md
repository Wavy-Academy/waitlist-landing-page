# Wavy Academy – Waitlist Landing Page

A simple landing page for collecting early access signups for **Wavy Academy**, a platform where people can learn photography.

This page allows interested users to join the waitlist and get notified when the platform launches.

---

## 🚀 Features

* Clean and minimal landing page
* Email waitlist collection
* Responsive design (mobile friendly)
* Fast and lightweight
* Easy to deploy

---

## 📸 About Wavy Academy

Wavy Academy is a learning platform designed to help aspiring photographers improve their skills through structured lessons, resources, and community support.

The waitlist helps us:

* Gauge early interest
* Build a community before launch
* Notify users when the platform goes live

---

## 🛠️ Tech Stack

This project may include:
* Next.js for frontend and API client
* Yup + formik for form handling for waitlist submissions
* Supabase PostgreSQL for database and storage

---

## 📦 Getting Started

Clone the repository:

```bash
git clone https://github.com/wavy-academy/waitlist-landing-page.git
```

Navigate into the project:

```bash
cd waitlist-landing-page
```

Install dependencies (if applicable):

```bash
npm install
```

## Supabase Setup

1. Open Supabase Dashboard -> SQL Editor.
2. Run the SQL in `supabase/waitlist_setup.sql`.
3. Confirm the `public.waitlist` table exists in Table Editor.

### Environment variables

Create or update `.env.local` with:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_WAITLIST_TABLE=waitlist
```

Where to get each value:

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase Dashboard -> Project Settings -> API -> Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase Dashboard -> Project Settings -> API -> Project API keys -> Publishable (anon) key
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase Dashboard -> Project Settings -> API -> Project API keys -> service_role (secret) key
- `SUPABASE_WAITLIST_TABLE`: use `waitlist` (matches the SQL file)

Important:

- Keep `SUPABASE_SERVICE_ROLE_KEY` secret. Do not expose it to the browser.
- This project inserts from server-side API route only (`POST /api/waitlist`).

### Waitlist API checks

After running `npm run dev`, test locally:

```bash
# 201 Created (new email)
curl -i -X POST http://localhost:3000/api/waitlist -H "Content-Type: application/json" -d "{\"email\":\"test@example.com\"}"

# 409 Conflict (duplicate email)
curl -i -X POST http://localhost:3000/api/waitlist -H "Content-Type: application/json" -d "{\"email\":\"test@example.com\"}"

# 400 Bad Request (invalid email)
curl -i -X POST http://localhost:3000/api/waitlist -H "Content-Type: application/json" -d "{\"email\":\"not-an-email\"}"
```

Run the development server:

```bash
npm run dev
```

---

## 🌐 Deployment

The landing page can be deployed on platforms like:

* Vercel
* Netlify
* Cloudflare Pages

---

## 🤝 Contributing

Contributions are welcome. If you'd like to improve the project:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.
