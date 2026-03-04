import { Cross, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-diocese-background text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cross className="h-6 w-6 text-secondary" />
              <span className="font-serif font-bold text-lg">Diocese of Ibadan</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              The Diocese of Ibadan, Anglican Communion, is committed to spreading the Gospel, nurturing believers, and serving the community with the love of Christ.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/churches", label: "Find a Church" },
                { href: "/clergy", label: "Our Clergy" },
                { href: "/events", label: "Events" },
                { href: "/youth", label: "Youth Ministry" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { href: "/media", label: "Sermons & Media" },
                { href: "/news", label: "News" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                <span>Bishopscourt, Oke-Bola, Ibadan, Oyo State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <span>+234 802 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <span>info@ibadananglican.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Diocese of Ibadan, Anglican Communion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
