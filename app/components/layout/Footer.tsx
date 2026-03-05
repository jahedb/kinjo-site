import { ShieldCheck, Users, Mail, MapPin } from "lucide-react";

export default function Footer() {
return ( <footer className="bg-[#1A2B22] text-white pt-16 pb-10 px-6">

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

    {/* Brand */}
    <div>

      <div className="font-serif text-2xl mb-3">
        Kinjo
      </div>

      <p className="text-sm text-white/70 leading-relaxed mb-4">
        Kinjo is building trusted digital infrastructure for neighbourhoods,
        clubs and local communities.
      </p>

      <div className="text-[#A3B18A] text-sm">
        近所 · きんじょ · neighbourhood
      </div>

    </div>

    {/* Platform */}
    <div>

      <h4 className="text-sm font-semibold mb-4 text-[#A3B18A]">
        Platform
      </h4>

      <ul className="space-y-3 text-sm text-white/70">

        <li>
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
        </li>

        <li>
          <a href="#trust" className="hover:text-white transition">
            Trust & Safety
          </a>
        </li>

        <li>
          <a href="#founding" className="hover:text-white transition">
            Founding Members
          </a>
        </li>

        <li>
          <a href="#waitlist" className="hover:text-white transition">
            Request Access
          </a>
        </li>

      </ul>

    </div>

    {/* Trust */}
    <div>

      <h4 className="text-sm font-semibold mb-4 text-[#A3B18A]">
        Trust
      </h4>

      <ul className="space-y-3 text-sm text-white/70">

        <li className="flex items-center gap-2">
          <ShieldCheck size={14} />
          Verified community members
        </li>

        <li className="flex items-center gap-2">
          <Users size={14} />
          Moderated neighbourhood spaces
        </li>

        <li className="flex items-center gap-2">
          <MapPin size={14} />
          Local-first privacy model
        </li>

      </ul>

    </div>

    {/* Legal */}
    <div>

      <h4 className="text-sm font-semibold mb-4 text-[#A3B18A]">
        Legal
      </h4>

      <ul className="space-y-3 text-sm text-white/70">

        <li>
          <a href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </a>
        </li>

        <li>
          <a href="/terms" className="hover:text-white transition">
            Terms of Service
          </a>
        </li>

        <li>
          <a href="/acceptable-use" className="hover:text-white transition">
            Acceptable Use
          </a>
        </li>

        <li>
          <a href="/cookies" className="hover:text-white transition">
            Cookie Policy
          </a>
        </li>

      </ul>

    </div>

  </div>

  {/* bottom row */}
  <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-4">

    <div>
      © 2026 Kinjo. Private beta.
    </div>

    <div className="flex items-center gap-2">
      <Mail size={14} />
      hello@kinjo.cloud
    </div>

  </div>

</footer>

);
}
