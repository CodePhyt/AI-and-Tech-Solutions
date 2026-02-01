import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const treatments = [
    { name: 'Dental Veneers', slug: 'dental-veneers' },
    { name: 'Dental Implants', slug: 'dental-implants' },
    { name: 'Teeth Whitening', slug: 'teeth-whitening' },
    { name: 'Hollywood Smile', slug: 'hollywood-smile' },
    { name: 'Full Mouth Restoration', slug: 'full-mouth-restoration' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center glow-sm">
                                <span className="text-2xl font-bold">S</span>
                            </div>
                            <span className="text-xl font-bold gradient-text">Smile Türkiye</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Your partner in achieving the perfect smile. Experience world-class dental care in the beautiful city of Antalya, Turkey.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/nnesipogluu/?locale=en_US"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500/20 hover:border-sky-500 border border-transparent transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Treatments */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Treatments</h3>
                        <ul className="space-y-3">
                            {treatments.map((treatment) => (
                                <li key={treatment.slug}>
                                    <Link
                                        href={`/treatments/${treatment.slug}`}
                                        className="text-slate-400 hover:text-sky-400 text-sm transition-colors"
                                    >
                                        {treatment.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/clinics" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                                    Our Clinics
                                </Link>
                            </li>
                            <li>
                                <Link href="/stories" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                                    Success Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/905302876350"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-slate-400 text-sm">
                                <MapPin className="w-5 h-5 mt-0.5 text-sky-500 flex-shrink-0" />
                                <span>Antalya, Turkey</span>
                            </li>
                            <li className="flex items-start space-x-3 text-slate-400 text-sm">
                                <Phone className="w-5 h-5 mt-0.5 text-sky-500 flex-shrink-0" />
                                <a href="tel:+905302876350" className="hover:text-sky-400 transition-colors">
                                    +90 530 287 63 50
                                </a>
                            </li>
                            <li className="flex items-start space-x-3 text-slate-400 text-sm">
                                <Mail className="w-5 h-5 mt-0.5 text-sky-500 flex-shrink-0" />
                                <a href="mailto:nnesipoglu@outlook.com" className="hover:text-sky-400 transition-colors">
                                    nnesipoglu@outlook.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-slate-400 text-sm">
                            © {currentYear} Smile Türkiye. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="/legal/privacy" className="text-slate-400 hover:text-sky-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/legal/terms" className="text-slate-400 hover:text-sky-400 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/legal/cookie-policy" className="text-slate-400 hover:text-sky-400 transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
