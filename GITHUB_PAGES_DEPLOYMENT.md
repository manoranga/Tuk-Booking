# 🚀 GitHub Pages Deployment Guide

## ❌ The Problem You're Facing

**Error:** `GET https://manoranga.github.io/src/main.tsx net::ERR_ABORTED 404`

**Why this happens:**
- GitHub Pages **cannot serve** `.tsx` (TypeScript React) files directly
- GitHub Pages only serves **static HTML, CSS, and JavaScript**
- Your React app needs to be **built** first (compiled into static files)
- The `src/main.tsx` file needs to be compiled into JavaScript

---

## ✅ The Solution

You need to:
1. **Build** your React app (converts `.tsx` to `.js`)
2. **Deploy** the built files to GitHub Pages
3. **Configure** the correct base URL

---

## 🔧 Configuration Already Done

I've already configured your project:

### 1. ✅ Updated `vite.config.ts`
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/Tuk-Booking/', // Your repo name
})
```

### 2. ✅ Updated `package.json`
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

### 3. ✅ Created GitHub Actions workflow
- File: `.github/workflows/deploy.yml`
- Auto-deploys when you push to `main` branch

---

## 📦 Deployment Methods

Choose **ONE** of these methods:

---

### Method 1: Automatic Deployment (GitHub Actions) ⭐ Recommended

#### Step 1: Enable GitHub Pages
1. Go to your GitHub repo: `https://github.com/manoranga/Tuk-Booking`
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select: **GitHub Actions**
5. Click **Save**

#### Step 2: Push Your Code
```bash
# Make sure all files are committed
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

#### Step 3: Wait for Deployment
1. Go to **Actions** tab in your repo
2. Watch the deployment process (2-3 minutes)
3. Once complete, your app will be at:
   ```
   https://manoranga.github.io/Tuk-Booking/
   ```

**That's it!** Every time you push to `main`, it auto-deploys! 🎉

---

### Method 2: Manual Deployment (Using gh-pages package)

#### Step 1: Build and Deploy
```bash
# From your project directory
npm run deploy
```

This command:
1. Builds your app (`npm run build`)
2. Deploys `dist` folder to `gh-pages` branch
3. GitHub Pages serves from that branch

#### Step 2: Configure GitHub Pages
1. Go to repo **Settings** → **Pages**
2. Under **Source**, select: **Deploy from a branch**
3. Select branch: **gh-pages**
4. Select folder: **/ (root)**
5. Click **Save**

#### Step 3: Access Your App
After 1-2 minutes:
```
https://manoranga.github.io/Tuk-Booking/
```

---

### Method 3: Manual Build & Deploy

If you prefer full control:

#### Step 1: Build the App
```bash
npm run build
```

This creates a `dist` folder with:
```
dist/
  ├── index.html
  ├── assets/
  │   ├── index-[hash].css
  │   └── index-[hash].js
  └── vite.svg
```

#### Step 2: Deploy to GitHub Pages
```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy the dist folder
npx gh-pages -d dist
```

#### Step 3: Configure & Access
Same as Method 2, steps 2-3

---

## ⚙️ Important Configuration

### Update Base URL (If Repo Name Changes)

If your GitHub repo name is **NOT** `Tuk-Booking`, update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPO-NAME/', // ← Change this
})
```

### For Root Domain (username.github.io)

If deploying to `https://manoranga.github.io/` (root):

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/', // ← Use root
})
```

---

## 🧪 Test Your Deployment

### Before Deploying (Local Test)
```bash
# Build the app
npm run build

# Preview the production build
npm run preview

# Visit: http://localhost:4173
```

This shows exactly how it will look on GitHub Pages.

### After Deploying
1. Visit: `https://manoranga.github.io/Tuk-Booking/`
2. Test all features:
   - Browse vehicles
   - Search and filter
   - Select vehicle
   - Check date availability
   - Complete booking flow

---

## 🐛 Troubleshooting

### Issue 1: Blank Page After Deployment

**Cause:** Wrong base URL in `vite.config.ts`

**Fix:**
```typescript
// Make sure this matches your repo name exactly
base: '/Tuk-Booking/', // Case-sensitive!
```

Then rebuild and redeploy:
```bash
npm run deploy
```

---

### Issue 2: 404 Errors on Page Refresh

**Cause:** GitHub Pages doesn't support client-side routing by default

**Fix:** Add a `404.html` file that redirects to `index.html`

Create `public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Tuk-Booking</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/Tuk-Booking/'"></meta>
  </head>
</html>
```

---

### Issue 3: CSS/JS Files Not Loading

**Cause:** Incorrect base path

**Check:**
1. Open browser DevTools (F12)
2. Check Console for 404 errors
3. Verify paths start with `/Tuk-Booking/`

**Fix:** Update `vite.config.ts` base path

---

### Issue 4: GitHub Actions Deployment Fails

**Check:**
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ Read and write permissions
3. Save changes
4. Re-run the workflow

---

## 📁 What Gets Deployed?

When you run `npm run build`, Vite creates:

```
dist/
  ├── index.html              (Your app entry point)
  ├── assets/
  │   ├── index-[hash].css   (All styles bundled)
  │   ├── index-[hash].js    (All React code compiled)
  │   └── [images]           (Optimized images)
  └── vite.svg               (Favicon)
```

**Only these files** go to GitHub Pages. Your `.tsx` files stay in the repo but aren't served.

---

## 🔄 Update Workflow

After initial deployment, to update your site:

### If Using GitHub Actions:
```bash
git add .
git commit -m "Update booking features"
git push
# Auto-deploys! ✨
```

### If Using gh-pages:
```bash
npm run deploy
```

That's it! Changes appear in 1-2 minutes.

---

## ✅ Quick Setup Checklist

- [x] ✅ `vite.config.ts` updated with correct base
- [x] ✅ `package.json` has deploy script
- [x] ✅ GitHub Actions workflow created
- [ ] 🔲 Enable GitHub Pages in repo settings
- [ ] 🔲 Push code to trigger deployment
- [ ] 🔲 Wait 2-3 minutes for deployment
- [ ] 🔲 Visit `https://manoranga.github.io/Tuk-Booking/`
- [ ] 🔲 Test all features work correctly

---

## 🎯 Expected URLs

### Your GitHub Pages URL:
```
https://manoranga.github.io/Tuk-Booking/
```

### NOT These URLs (Won't Work):
```
❌ https://manoranga.github.io/src/main.tsx
❌ https://manoranga.github.io/Tuk-Booking/src/main.tsx
❌ https://manoranga.github.io/index.tsx
```

### Why? 
Because GitHub Pages serves the **compiled** version from the `dist` folder, not your source files!

---

## 🚀 Next Steps

1. **Choose a deployment method** (Method 1 recommended)
2. **Follow the steps** for that method
3. **Wait for deployment** (2-3 minutes)
4. **Visit your app**: `https://manoranga.github.io/Tuk-Booking/`
5. **Share the link** with others!

---

## 📞 Need Help?

If deployment fails:
1. Check GitHub Actions logs (Actions tab)
2. Check browser console for errors (F12)
3. Verify repo settings (Settings → Pages)
4. Make sure base URL matches repo name

---

## 🎉 Success!

Once deployed, you'll have:
- ✅ Live website accessible to anyone
- ✅ Automatic updates when you push
- ✅ Free hosting on GitHub Pages
- ✅ HTTPS enabled by default
- ✅ Custom domain support (optional)

**Your app will be live at:**
```
🌐 https://manoranga.github.io/Tuk-Booking/
```

---

## 💡 Pro Tips

1. **Test locally first** with `npm run preview`
2. **Use GitHub Actions** for automatic deployment
3. **Check Actions tab** if deployment fails
4. **Update base URL** if you rename the repo
5. **Add custom domain** in repo settings (optional)

---

**Ready to deploy? Follow Method 1 above! 🚀**
