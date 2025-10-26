Easy & free setup (EmailJS) — 5 minutes

This project already supports EmailJS (client-side) so the fastest, free option is to use EmailJS's free tier.

1) Sign up (free)
   - Visit: https://www.emailjs.com
   - Create an account (free plan is sufficient for testing and low-volume use).

2) Add a Service (your sending email)
   - In EmailJS dashboard add a Service (Gmail / SMTP). Copy the Service ID (looks like `service_xxx`).

3) Create a Template
   - Templates → Create new template
   - Use these variable names (the app sends these):
     - `from_name`
     - `from_email`
     - `phone`
     - `message`
   - Example template body:
     Subject: Website Contact: {{from_name}}

     From: {{from_name}} <{{from_email}}>
     Phone: {{phone}}

     Message:
     {{message}}

   - Save the template and copy the Template ID (looks like `template_xxx`).

4) Get your Public Key (user id)
   - Dashboard → Integration (or Account) → Public Key (user_xxx)

5) Add env values locally
   - Copy `.env.example` to `.env.local` (or create `.env.local`) in the project root.
   - Replace placeholders with the IDs you copied.

   Example (PowerShell):

   ```powershell
   Copy-Item .env.example .env.local
   notepad .env.local
   # paste your service/template/user ids and save
   ```

6) Restart dev server and test
   - Start dev: `npm run dev`
   - Fill the contact form and click Send Message.
   - Check EmailJS dashboard -> Logs for delivery details.

7) Deploy (production)
   - Add these values as repository secrets in GitHub: `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_USER_ID`.
   - Modify your Actions workflow build step to inject the secrets as Vite env vars during `npm run build` (example shown in the README or earlier guidance).

Quick alternative (also free/easy): Formspree
- If you prefer not to manage template IDs, Formspree offers a simple form endpoint. You still need to register and get a form id, then POST the form to their URL. It's slightly simpler but less flexible than EmailJS.

Web3Forms (recommended simple, free client-only option)
---------------------------------------------------
- Sign up at https://web3forms.com (free tier available).
- Create a form and copy the Access Key (web3forms gives you an `access_key`).
- Add to your `.env.local` as:

   VITE_WEB3FORMS_KEY=your_web3forms_access_key_here

- The app will POST to `https://api.web3forms.com/submit` with the fields: access_key, name, email, phone, message, subject.
- Web3Forms will forward the submission to the email you configure and offers spam protection options.

Usage order
- If you set `VITE_WEB3FORMS_KEY` the contact form will use Web3Forms first (preferred).
- If Web3Forms isn't configured or fails, the app will fall back to EmailJS if those vars are present.

If you want, I can add an example `env` snippet to your GitHub Actions workflow to inject the keys during CI builds (you still must add secrets into the repository settings).

If you want, I can:
- Add the GitHub Actions `env:` snippet to your workflow (I will NOT add secrets — you must add them in the repo settings).
- Create a `.env.local` for testing (I won't commit it) or add a short README snippet into your README.md.
