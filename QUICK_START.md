# 🚀 Quick Start Guide - Tuk-Booking

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:5173**

---

## 🎯 Test the Application

### Test Case 1: Browse and Search
1. ✅ View all 12 vehicles on the home page
2. ✅ Use the search bar to find vehicles (try "Tuk" or "Honda")
3. ✅ Apply filters:
   - Select "Bike" from vehicle types
   - Set price range 2000-4000
   - Select capacity 2+ seats

### Test Case 2: Book a Vehicle
1. ✅ Click "View Details" on any vehicle card
2. ✅ Browse the image gallery (use arrow buttons)
3. ✅ Select dates:
   - From: Tomorrow's date
   - To: 3 days later
4. ✅ Click "Book Now"
5. ✅ Fill customer form:
   - Name: "John Doe"
   - Phone: "+94 77 123 4567"
   - Email: "john@example.com"
6. ✅ Click "Proceed to Payment"
7. ✅ Select a payment method
8. ✅ Click "Pay Now"
9. ✅ See confirmation with booking ID

### Test Case 3: Test Availability
1. ✅ Go to "Classic Tuk Tuk" details
2. ✅ Try booking Feb 10-11, 2026 (should show "Not Available")
3. ✅ Select different dates (should work)

### Test Case 4: Form Validation
1. ✅ Try to proceed without filling all fields
2. ✅ Enter invalid email (e.g., "notanemail")
3. ✅ Enter invalid phone (e.g., "123")
4. ✅ See real-time error messages

### Test Case 5: Mobile Responsive
1. ✅ Open browser DevTools (F12)
2. ✅ Toggle device toolbar
3. ✅ Test on iPhone, iPad, and Desktop sizes
4. ✅ Verify all elements adapt properly

---

## 📱 Test on Different Screens

### Desktop (> 1024px)
- Two-column layout
- Sidebar filters
- Grid of vehicle cards

### Tablet (768px - 1024px)
- Adjusted columns
- Filters move to top
- Readable content

### Mobile (< 768px)
- Single column
- Full-width cards
- Touch-friendly buttons

---

## 🎨 Features to Explore

### Home Page
- 🔍 Real-time search
- 🎚️ Multiple filters
- 🏷️ Vehicle type badges
- ✨ Hover animations

### Vehicle Details
- 🖼️ Image gallery
- 📅 Date picker
- 💰 Dynamic price calculation
- ⚠️ Availability checking

### Booking Form
- ✅ Form validation
- 💳 Payment options
- 📊 Booking summary
- 🎯 Professional layout

### Confirmation
- 🎉 Success animation
- 🆔 Unique booking ID
- 📋 Complete details
- ℹ️ Important instructions

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

---

## 📊 Mock Data Overview

### Vehicles Available
- **Tuk Tuks**: 2 options (Rs. 3,500 - 4,500/day)
- **Bikes**: 2 options (Rs. 2,500 - 3,500/day)
- **Vans**: 2 options (Rs. 8,500 - 12,000/day)
- **SUVs**: 2 options (Rs. 15,000 - 18,000/day)
- **Cars**: 4 options (Rs. 5,500 - 25,000/day)

### Pre-booked Dates (for testing)
- Classic Tuk Tuk: Feb 10-11, Feb 15
- Honda CB 125: Feb 12-14
- Toyota KDH Van: Feb 7-9
- Toyota Fortuner: Feb 5-6
- Honda Civic: Feb 3-4
- BMW 3 Series: Feb 20-22

**Tip**: Try booking these dates to see the "Not Available" message!

---

## 🎓 Learning Points

### React Concepts
- ✅ Functional Components
- ✅ Hooks (useState, useMemo, useContext)
- ✅ Context API
- ✅ React Router v6
- ✅ Controlled Forms
- ✅ Event Handling

### TypeScript Features
- ✅ Interface Definitions
- ✅ Type Safety
- ✅ Union Types
- ✅ Type Imports

### Best Practices
- ✅ Component Reusability
- ✅ Separation of Concerns
- ✅ Mobile-First Design
- ✅ Form Validation
- ✅ State Management
- ✅ Routing

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 5173
lsof -ti:5173 | xargs kill -9
# Then restart
npm run dev
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
- Make sure all imports use `import type` for type-only imports
- Check tsconfig.json settings

---

## 🚀 Next Steps

### Enhance the Application
1. **Add Backend**: Connect to REST API or GraphQL
2. **Authentication**: User login/signup
3. **Payment Gateway**: Stripe or PayPal integration
4. **Database**: MongoDB or PostgreSQL
5. **Email Notifications**: SendGrid or Mailgun
6. **Reviews**: Rating system
7. **Admin Panel**: Manage vehicles and bookings
8. **Maps Integration**: Google Maps for locations
9. **Multi-language**: i18n support
10. **PWA**: Make it installable

### Deploy
1. **Vercel**: `vercel --prod`
2. **Netlify**: Drag & drop build folder
3. **GitHub Pages**: Use gh-pages
4. **AWS S3**: Static hosting

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Router](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)

---

## 💡 Pro Tips

1. **Performance**: Open React DevTools to see component renders
2. **Debugging**: Use browser DevTools for state inspection
3. **Styling**: Modify CSS files for custom branding
4. **Data**: Edit `src/data/vehicles.ts` to add more vehicles
5. **Types**: Update `src/types/index.ts` for new features

---

**Happy Coding! 🎉**

Your booking application is ready to use. Start exploring and customizing!
