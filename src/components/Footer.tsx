import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-700">
      <div className="container mx-auto px-4 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1 */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-3xl font-bold text-white">BITS</div>
              <div className="border-l-2 border-yellow-500 pl-2 flex flex-col text-sm leading-tight">
                <span className="font-semibold text-yellow-500">Adoni</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering students with quality technical education and ethical values to become responsible citizens and future leaders.
            </p>
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} Bheema Institute of Technology & Science. All rights reserved.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-yellow-500 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-yellow-400 transition-colors">Admissions</Link></li>
              <li><Link href="/placements" className="hover:text-yellow-400 transition-colors">Placements</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-yellow-500 inline-block pb-1">
              Programs
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#">Computer Science & Engg</Link></li>
              <li><Link href="#">Electronics & Comm. Engg</Link></li>
              <li><Link href="#">Electrical & Electronics</Link></li>
              <li><Link href="#">Mechanical Engineering</Link></li>
              <li><Link href="#">Civil Engineering</Link></li>
            </ul>
          </div>

          {/* Column 4 - CONTACT (MAP CLICK ENABLED) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-yellow-500 inline-block pb-1">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">

              {/* Location Clickable */}
              <li>
                <a 
                  href="https://maps.app.goo.gl/B6DSawMjEEpnhAgt7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-yellow-400 transition-colors"
                >
                  <MapPinIcon className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    Bheema Institute of Technology & Science,<br />
                    Adoni, Kurnool Dist,<br />
                    Andhra Pradesh - 518301
                  </span>
                </a>
              </li>

              {/* Phone Click to Call */}
              <li>
                <a 
                  href="tel:+911234567890"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span>+91 12345 67890</span>
                </a>
              </li>

              {/* Email Click */}
              <li>
                <a 
                  href="mailto:info@bitsadoni.ac.in"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <EnvelopeIcon className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span>info@bitsadoni.ac.in</span>
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} BITS Adoni. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}