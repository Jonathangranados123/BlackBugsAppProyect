import { Instagram, Facebook, Mail, Phone } from "lucide-react";

interface ContactButton {
  icon: typeof Instagram;
  label: string;
  value: string;
  href: string;
}

const contactMethods: ContactButton[] = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@blackbugs",
    href: "https://instagram.com/blackbugs",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Black Bugs",
    href: "https://facebook.com/blackbugs",
  },
  {
    icon: Mail,
    label: "Correo Electrónico",
    value: "info@blackbugs.com",
    href: "mailto:info@blackbugs.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
];

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Black Background */}
      <div className="bg-black text-white px-6 py-6">
        <h1 className="text-2xl tracking-wide">Contacto</h1>
        <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">Ponte en Contacto</p>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        {/* Intro Text */}
        <div className="mb-8 text-center">
          <p className="text-sm text-zinc-600 leading-relaxed font-light">
            ¿Tienes preguntas sobre nuestras especies exóticas
            <br />
            o alimento vivo? Contáctanos por cualquier canal.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="space-y-3">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-black p-5 transition-all hover:bg-black hover:text-white">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="p-3 rounded-xl border-2 border-black group-hover:border-white transition-colors">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-xs text-zinc-500 group-hover:text-zinc-300 uppercase tracking-wider mb-1">
                        {method.label}
                      </p>
                      <p className="tracking-wide text-black group-hover:text-white transition-colors">{method.value}</p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 rounded-xl bg-zinc-50 border border-zinc-200">
            <p className="text-xs text-zinc-600 uppercase tracking-wider">
              Criadores Profesionales Desde 2015
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
