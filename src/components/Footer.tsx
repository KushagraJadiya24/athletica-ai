import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-rborder-b border-white/10 bg-gray-950/70 backdrop-blur-md">
      {/* Subtle top glow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo + Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1.5 bg-primary/10 rounded-md">
                <ZapIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-bold font-mono text-white">
                Athletica<span className="text-primary">-AI</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} athletica.ai — All rights reserved
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
            <Link
              href="/about"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/help"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Help
            </Link>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-muted/50">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px] shadow-green-500/70" />
            <span className="text-xs font-mono text-gray-300">
              SYSTEM OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
