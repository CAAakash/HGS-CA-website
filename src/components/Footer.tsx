
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">HGS & CO</div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted chartered accountancy firm in Chennai, providing comprehensive financial services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Tax Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Auditing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financial Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Company Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payroll Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accounting Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5" />
                <div>
                  <p>No 4, Ayshwarya Apartments, 6, Coastal Road, Besant Nagar, Chennai, TamilNadu-600090</p>
                  
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <p>+91 97863 36176</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <p>info@cahsco.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 HGS & CO. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;