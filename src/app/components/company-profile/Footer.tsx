import React from "react";
import {
  Globe,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                PT TELCO
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Leading provider of telecommunications
              infrastructure solutions. Building tomorrow's
              connectivity, today.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Facebook, Twitter, Instagram].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-blue-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="hover:text-blue-400 transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="hover:text-blue-400 transition-colors"
                >
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  FTTH Deployment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Network Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Civil Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 PT TRSJ. All rights reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}