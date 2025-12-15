# Artisan Atelier - Boutique Tailor Website

A beautiful, storytelling-based website for a boutique tailor, showcasing the journey of custom-made garments with visual steps and client testimonials.

## Features

### 🎨 Design & User Experience
- **Storytelling Focus**: Emphasizes the journey from sketch to stitch
- **Soft Neutral Colors**: Elegant color palette with primary, neutral, and accent colors
- **Clean Layout**: Modern, responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience

### 📄 Pages
1. **Home**: Hero section with tagline "From sketch to stitch – clothing crafted for you"
2. **The Process**: Step-by-step visual journey (Consultation → Sketch → Measurement → Fitting → Final Piece)
3. **Portfolio**: Before/after transformations and client photos with filtering
4. **About**: Master tailor's story, workshop images, and mission
5. **Book Appointment**: Interactive booking form with date/time selection

### 🛠 Technical Features
- **React 18**: Modern React with functional components and hooks
- **React Router**: Client-side routing for seamless navigation
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Framer Motion**: Smooth animations and transitions
- **Component-Based Architecture**: Reusable, modular components
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### 🏗 Components
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with links and contact info
- **TestimonialCard**: Speech bubble testimonials with ratings
- **ProcessStep**: Visual step component for the process page
- **PortfolioModal**: Detailed view for portfolio items
- **BookingForm**: Interactive appointment booking with validation

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── TestimonialCard.js
│   ├── ProcessStep.js
│   ├── PortfolioModal.js
│   └── BookingForm.js
├── pages/              # Page components
│   ├── Home.js
│   ├── Process.js
│   ├── Portfolio.js
│   ├── About.js
│   └── BookAppointment.js
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles with Tailwind
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- **Primary**: Warm taupe/brown tones
- **Neutral**: Grayscale variations
- **Accent**: Blue accent colors

### Content
- Update text content in individual page components
- Replace placeholder images with actual photos
- Modify service offerings in `BookAppointment.js`
- Update contact information in `Footer.js`

### Styling
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes
- Custom animations defined in Tailwind config

## Features in Detail

### 🎯 Home Page
- Hero section with compelling tagline
- Feature highlights with icons
- Client testimonials
- Call-to-action sections

### 📋 Process Page
- 5-step visual journey
- Interactive timeline
- Detailed step descriptions
- Process animations

### 🖼 Portfolio Page
- Category filtering
- Before/after gallery
- Detailed modal views
- Client testimonials

### 👤 About Page
- Master tailor biography
- Workshop photo gallery
- Company values
- Professional timeline

### 📅 Booking Page
- Service selection
- Date/time picker
- Contact form
- Appointment confirmation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with fallbacks
- Lazy loading for better performance
- Minimal bundle size with code splitting
- SEO-friendly structure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: hello@artisanatelier.com
- Phone: (123) 456-7890
- Address: 123 Artisan Street, Fashion District, NY 10001

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion.