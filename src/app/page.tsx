"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Concierge, Sparkles, Spa, Utensils } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125527379-carbn7ie.jpg"
          logoAlt="Luxury Boutique Hotel"
          brandName="Luxe Haven"
          button={{
            text: "Reserve Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Luxe Haven"
          description="Experience timeless elegance and unparalleled luxury at our award-winning boutique hotel. Discover refined accommodations, exceptional dining, and world-class service in the heart of the city."
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "contact"
            },
            {
              text: "Explore Suites",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125528257-9o4zma03.jpg"
          imageAlt="Luxury hotel lobby with elegant interior design"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Where Luxury Meets Hospitality. Our commitment to excellence defines every moment of your stay, from the warmth of our welcome to the refinement of our amenities."
          features={[
            {
              icon: Sparkles,
              title: "Premium Suites",
              description: "Carefully curated rooms and suites featuring bespoke furnishings, marble bathrooms, and panoramic city views."
            },
            {
              icon: Utensils,
              title: "Fine Dining",
              description: "Michelin-inspired cuisine crafted by award-winning chefs using the finest local and international ingredients."
            },
            {
              icon: Spa,
              title: "Wellness Sanctuary",
              description: "Full-service spa with rejuvenating treatments, yoga studios, and state-of-the-art fitness facilities."
            },
            {
              icon: Concierge,
              title: "24/7 Concierge",
              description: "Dedicated team ensuring every request is fulfilled with discretion and excellence."
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="Curated Experiences"
          description="Discover our signature services designed to make your stay unforgettable"
          tag="Our Services"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Luxury Accommodations",
              description: "From elegant classics to modern suites, each room is a sanctuary of comfort and style",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125529127-vi9ienv9.jpg",
              imageAlt: "Luxury hotel suite bedroom"
            },
            {
              id: 2,
              title: "Gourmet Dining",
              description: "Three acclaimed restaurants offering international cuisine and local specialties",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125530009-g98ukjex.jpg",
              imageAlt: "Upscale restaurant fine dining"
            },
            {
              id: 3,
              title: "Spa & Wellness",
              description: "Personalized treatments and holistic wellness programs in our full-service spa",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125530783-3h8ty4tb.jpg",
              imageAlt: "Luxury spa wellness massage"
            },
            {
              id: 4,
              title: "Bespoke Services",
              description: "Custom experiences tailored to your preferences and lifestyle needs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125531520-804thriw.jpg",
              imageAlt: "Hotel concierge service"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Testimonials"
          description="Hear from our valued guests about their exceptional experiences"
          tag="Reviews"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Margaret Thompson",
              role: "CEO, Thomson & Associates",
              testimonial: "Luxe Haven exceeded every expectation. The attention to detail, impeccable service, and luxurious amenities made our stay truly memorable. We'll return again and again.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125531981-v0q683c8.jpg",
              imageAlt: "Margaret Thompson"
            },
            {
              id: "2",
              name: "James Richardson",
              role: "Founder, Richardson Ventures",
              testimonial: "This is the gold standard of boutique hospitality. Every aspect from the welcome to the dining experience reflects true luxury and sophistication.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125533015-t3txlepd.jpg",
              imageAlt: "James Richardson"
            },
            {
              id: "3",
              name: "Elena Martinez",
              role: "Art Director, Creative Studio",
              testimonial: "The design, comfort, and service at Luxe Haven is unparalleled. It's not just a hotel stay, it's an experience of pure elegance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125533669-s9qw5w7y.jpg",
              imageAlt: "Elena Martinez"
            },
            {
              id: "4",
              name: "David Chen",
              role: "Investment Manager",
              testimonial: "From the moment we arrived until departure, everything was seamless and exceptional. The concierge team is truly outstanding.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125534181-al2umfh9.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "5",
              name: "Sophie Laurent",
              role: "Fashion Consultant",
              testimonial: "The spa treatments were divine, the food was exceptional, and the whole ambiance is pure luxury. This is my new favorite hotel.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125534809-mbh4moji.jpg",
              imageAlt: "Sophie Laurent"
            },
            {
              id: "6",
              name: "Robert Williams",
              role: "Executive Director",
              testimonial: "Luxe Haven represents everything that should be in premium hospitality. Highly recommended for discerning travelers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125535539-m2scneyz.jpg",
              imageAlt: "Robert Williams"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Plan Your Luxurious Escape"
          description="Reserve your stay at Luxe Haven and experience the pinnacle of boutique hospitality. Our dedicated reservations team is ready to craft your perfect getaway."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125536831-0pbn3xgo.jpg"
          imageAlt="Concierge desk at luxury hotel"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Reserve Now"
          termsText="By booking, you agree to our terms and conditions. We respect your privacy and will only use your information for your reservation."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764125527379-carbn7ie.jpg"
          logoText="Luxe Haven"
          copyrightText="© 2025 Luxe Haven Boutique Hotel. All rights reserved."
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Rooms & Suites",
                  href: "about"
                },
                {
                  label: "Dining",
                  href: "features"
                },
                {
                  label: "Spa & Wellness",
                  href: "features"
                }
              ]
            },
            {
              title: "Guest Services",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Special Offers",
                  href: "contact"
                },
                {
                  label: "Concierge",
                  href: "contact"
                },
                {
                  label: "Group Booking",
                  href: "contact"
                }
              ]
            },
            {
              title: "Information",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "#"
                },
                {
                  label: "Careers",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}