import "./style.scss";
import Header from './components/header.jsx';
import Footer from "./components/footer.jsx";
 

export const metadata = {

  //GENERIC
  title: 'JARDINERO LA SAFOR | Jardinería en Gandía para particulares y empresas',
  description: 'Jardinero con 14 años de experiencia en la Safor. Poda en altura, diseño de jardines, desbroces, plantación y mantenimiento profesional para particulares y empresas. Resultados garantizados a buen precio.',
  applicationName: 'LA SAFOR',
  keywords: [
  'jardinero particular en Real de Gandía',
  'servicios de jardinería en Gandía',
  'mantenimiento de jardines en Oliva',
  'diseño de jardines en Daimús',
  'poda y tala en Bellreguard',
  'instalación de sistemas de riego en Potries',
  'jardinero profesional en Villalonga',
  'cuidado de jardines en Beniarjó',
  'jardinero barato en Almoines',
  'limpieza de parcelas en Benirredrà',
  'jardinero empresa en Beniflá',
  'diseño paisajístico en Rafelcofer',
  'jardinero a domicilio en Palma de Gandia',
  'servicio de poda en Palmera',
  'mantenimiento de piscinas en Platja de Gandia',
  'renovación de jardines en Grau de Gandia',
  'jardinería sostenible en L’Alqueria de la Comtessa',
  'cuidado de césped en Miramar',
  'jardinero profesional en Guardamar de la Safor',
  'servicios de paisajismo en Ador',
  'planificación de jardines en Xeresa',
  'jardinero económico en Ròtova',
  'tala de árboles en Alfauir',
  'mantenimiento de zonas verdes en Piles',
  'jardinero experto en Castellonet de la Conquesta',
  'diseño de exteriores en Llocnou de Sant Jeroni',
  'servicios de jardinería ecológica en Marxuquera',
  'mantenimiento de parques en Barx',
  'jardinero con experiencia en La Drova',
  'contratar jardinero en Pla de Corrals'
],

  
  authors: [{ name: 'Andrés Ortega', url: 'https://www.ermo.es' }],
  creator: 'Andrés Ortega',
  publisher: 'Andrés Ortega',
  robots: 'index, follow',
  revisitAfter: '7 days',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  contentLanguage: 'es',
  language: 'es',
  
  // META
  openGraph: {
    title: 'JARDINERO LA SAFOR | Jardinería en Gandía para particulares y empresas',
    description: 'Jardinero con 14 años de experiencia en la Safor. Poda en altura, diseño de jardines, desbroces, plantación y mantenimiento profesional para particulares y empresas. Resultados garantizados a buen precio.',
    url: 'https://jardinerolasafor.com',
    type: 'website',
    images: [
      {
        url: 'https://jardinerolasafor.com/seo/meta-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Descripción de la imagen',
      },
    ],
    site_name: 'JARDINERO LA SAFOR | Jardinería en Gandía para particulares y empresas',
    locale: 'es_ES',
  },

  // TWITTER
  twitter: {
    card: 'summary_large_image',
    site: '@jardinerolasafor',
    creator: '@jardinerolasafor',
    title: 'JARDINERO LA SAFOR | Jardinería en Gandía para particulares y empresas',
    description: 'Jardinero con 14 años de experiencia en la Safor. Poda en altura, diseño de jardines, desbroces, plantación y mantenimiento profesional para particulares y empresas. Resultados garantizados a buen precio.',
    image: 'https://jardinerolasafor.com/seo/twitter-1200-600.jpg',
    imageAlt: 'Jardinería integral en Valencia con 20 años de experiencia',
  },

  //APPLE
  appleTouchIcon: 'https://jardinerolasafor.com/seo/favicon_500x500.png', 
  appleTouchStartupImage: 'https://jardinerolasafor.com/seo/favicon_500x500.png',

  



  //SECURITY
  contentSecurityPolicy: "default-src 'self'; img-src 'self' https://jardinerolasafor.com; script-src 'self' https://apis.google.com",
  referrerPolicy: 'no-referrer-when-downgrade', 
  xContentTypeOptions: 'nosniff', 
  xFrameOptions: 'DENY', 
  xXssProtection: '1; mode=block',
  permissionsPolicy: "geolocation=(self)",

  
}
 

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/usg7enf.css"></link>

     
       
        <meta name="theme-color" content="#6BDB8A" />
        <meta name="background-color" content="#0D403B" />
        <link rel="canonical" href="https://jardinerolasafor.com" hrefLang="es-ES" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="https://jardinerolasafor.com/seo/favicon_500x500.jpg" title="Ícono de la pestaña" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://jardinerolasafor.com/seo/ios_180x180.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "http://schema.org",
                "@type": "WebSite",
                "url": "https://jardinerolasafor.com",
                "name": "Jardinero La Safor"
              },
              {
                "@context": "http://schema.org",
                "@type": "Organization",
                "name": "Jardinero La Safor",
                "description": "Jardinería integral en Valencia con 14 años de experiencia",
                "email": "jardin@jardinerolasafor.com",
                "logo": "https://jardinerolasafor.com/seo/favicon_500x500.jpg",
                "url": "https://jardinerolasafor.com"
              },
              {
                "@context": "http://schema.org",
                "@type": "LocalBusiness",
                "logo": "https://jardinerolasafor.com/seo/favicon_500x500.jpg",
                "name": "Jardinero La Safor",
                "description": "Jardinería integral en Valencia con 14 años de experiencia",
                "image": "https://jardinerolasafor.com/seo/meta-1200x630.jpg",
                "url": "https://jardinerolasafor.com",
                "hasMap": "#",
                "telephone": "658677423",
                "priceRange": "$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Av. de l'Equador, 103, Benicalap",
                  "addressLocality": "València",
                  "addressRegion": "València",
                  "postalCode": "46025"
                }
              }
            ])
          }}
        />
      </head>
      <body>

   


        <div className="master__gartalia">
        <Header />
          {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}