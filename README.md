# 🚗 Tuk-Booking - Vehicle Booking Platform

A modern, production-ready vehicle booking platform built with React + TypeScript. Book Tuk Tuks, Bikes, Vans, SUVs, and Cars with date-based availability and seamless payment flow.

## ✨ Features

- **🏠 Home Page**: Browse vehicles with search and advanced filtering
- **🔍 Smart Search**: Search by vehicle name or type
- **🎚️ Advanced Filters**: Filter by vehicle type, price range, and capacity
- **📱 Responsive Design**: Mobile-first, works perfectly on all devices
- **🚙 Vehicle Details**: Complete vehicle information with image gallery
- **📅 Date Picker**: Select booking dates with availability checking
- **👤 Customer Form**: Validated booking form with error handling
- **💳 Payment Options**: Card, Mobile Payment, and Cash on Delivery
- **✅ Booking Confirmation**: Professional confirmation page with booking ID
- **🎨 Modern UI**: Beautiful gradient design with smooth animations
- **⚡ Performance**: Fast loading with optimized React components
- **📊 State Management**: Context API for global booking state
- **🔒 Form Validation**: Real-time validation for customer details

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router v6
- **State Management**: Context API
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Modules
- **Package Manager**: npm

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── VehicleCard.tsx
│   ├── SearchBar.tsx
│   └── FilterPanel.tsx
├── pages/              # Application pages
│   ├── HomePage.tsx
│   ├── VehicleDetailsPage.tsx
│   ├── BookingPage.tsx
│   ├── PaymentPage.tsx
│   └── ConfirmationPage.tsx
├── context/            # Context providers
│   └── BookingContext.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── data/               # Mock data
│   └── vehicles.ts
├── utils/              # Utility functions
│   └── dateUtils.ts
├── App.tsx            # Main app component with routing
└── main.tsx          # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Modern web browser

### Installation

1. Clone or navigate to the repository:
```bash
cd Tuk-Booking
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎯 User Flow

1. **Browse Vehicles** → User lands on home page and sees all available vehicles
2. **Search & Filter** → User can search by name/type and apply filters
3. **View Details** → Click on a vehicle to see complete details
4. **Select Dates** → Choose booking dates with availability validation
5. **Enter Details** → Fill in customer information (name, phone, email)
6. **Choose Payment** → Select payment method (Card/Mobile/Cash)
7. **Get Confirmation** → Receive booking ID and confirmation details

## 🔑 Key Features Explained

### Date-Based Availability
- Each vehicle has pre-booked dates
- System validates date ranges before booking
- Users can't book unavailable dates
- Clear error messages for conflicts

### Form Validation
- Real-time validation on customer form
- Phone number format validation
- Email format validation
- Required field checking

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly interface
- Optimized image loading

### State Management
- Global booking context
- Persistent booking flow across pages
- Clean state clearing on completion
- Protected routes (auto-redirect if no booking)

## 📱 Pages Overview

### 1. HomePage
- Vehicle grid with cards
- Search bar for quick filtering
- Advanced filter panel (type, price, capacity)
- Responsive layout with sidebar

### 2. VehicleDetailsPage
- Image gallery with navigation
- Complete vehicle information
- Driver contact details
- Date picker with validation
- Price calculation
- Availability checking

### 3. BookingPage
- Customer details form
- Form validation
- Booking summary sidebar
- Total price display

### 4. PaymentPage
- Payment method selection
- Customer and booking summary
- Price breakdown
- Processing simulation

### 5. ConfirmationPage
- Success animation
- Unique booking ID
- Complete booking details
- Important instructions
- Return to home button

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple gradients
- **Card-Based Layout**: Clean, modern card design
- **Hover Effects**: Smooth transitions on interactive elements
- **Icon Usage**: Emoji icons for friendly UX
- **Color Scheme**: Professional blue (#2563eb) accents
- **Typography**: Clear hierarchy with Inter font
- **Shadows**: Subtle elevation for depth
- **Border Radius**: Rounded corners (8-16px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Mock Data

The application includes 12 pre-configured vehicles:
- 2 Tuk Tuks
- 2 Bikes
- 2 Vans
- 2 SUVs
- 4 Cars

Each vehicle has:
- Unique ID
- Name and type
- Price per day
- Seating capacity
- Multiple images
- Driver contact
- Features list
- Pre-booked dates

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements

Potential features for future versions:
- User authentication
- Backend API integration
- Real payment gateway
- Admin dashboard
- Review & rating system
- Email notifications
- Booking history
- Multi-language support
- Map integration
- Advanced search filters

## 🤝 Contributing

This is an educational project. Feel free to fork and enhance!

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Built as a learning project for mastering React + TypeScript.

---

**Happy Booking! 🚗✨**
