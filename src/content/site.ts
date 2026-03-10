export const languages = ['es', 'en'] as const
export type Lang = (typeof languages)[number]

export type NavLink = {
  slug: 'home' | 'posts' | 'projects' | 'about' | 'contact'
  label: string
}

export type CallToAction = {
  label: string
  href: string
  variant?: 'default' | 'ghost'
  download?: boolean
}

export type ProjectCard = {
  name: string
  description: string
  stack: string[]
  status: string
  href: string
}

export type PostCard = {
  title: string
  summary: string
  date: string
  readingTime: string
  href: string
}

export type FacetItem = {
  year: string
  title: string
  description: string
}

export type ServiceCard = {
  title: string
  description: string
  deliverables: string[]
}

export type SiteCopy = {
  seo: {
    siteName: string
    description: string
  }
  nav: {
    brand: string
    links: NavLink[]
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    actions: CallToAction[]
  }
  projects: {
    title: string
    caption: string
    items: ProjectCard[]
  }
  services: {
    title: string
    caption: string
    items: ServiceCard[]
  }
  posts: {
    title: string
    caption: string
    items: PostCard[]
  }
  facets: {
    title: string
    caption: string
    items: FacetItem[]
  }
  contact: {
    title: string
    caption: string
    emailLabel: string
    email: string
    newsletterCta: string
    commentsLabel: string
    socials: { label: string; href: string }[]
  }
  footer: {
    note: string
  }
}

const copy: Record<Lang, SiteCopy> = {
  es: {
    seo: {
      siteName: 'Raúl Zarza',
      description:
        'Desarrollador web con +10 años de experiencia creando SaaS, plataformas y herramientas digitales para negocios reales. Desde La Paz, BCS.'
    },
    nav: {
      brand: 'raulzarza.com',
      links: [
        { slug: 'projects', label: 'Proyectos' },
        { slug: 'about', label: 'Sobre mí' },
        { slug: 'contact', label: 'Contacto' }
      ]
    },
    hero: {
      eyebrow: 'Desarrollador web · La Paz, BCS',
      title: 'Creo herramientas digitales para negocios que necesitan funcionar mejor',
      description:
        'Llevo más de 10 años diseñando y desarrollando plataformas web, SaaS y herramientas que ayudan a negocios reales a digitalizar y optimizar su operación. Me gusta construir cosas nuevas y siempre tengo algo en marcha.',
      actions: [
        {
          label: 'Conoce mis proyectos',
          href: '/es/projects',
          variant: 'default'
        },
        {
          label: 'Escríbeme',
          href: '/es/contact',
          variant: 'ghost'
        },
        {
          label: 'Descargar CV',
          href: '/cv-raul-zarza.pdf',
          variant: 'ghost',
          download: true
        }
      ]
    },
    projects: {
      title: 'Proyectos',
      caption:
        'Productos propios que he construido para resolver problemas reales. Cada uno nació de una necesidad concreta.',
      items: [
        {
          name: 'Mi Granja',
          description:
            'SaaS para administración de ganado. Control de inventario, reproducción, salud y eventos del hato desde cualquier dispositivo.',
          stack: ['Next.js', 'Firebase', 'PWA'],
          status: 'Activo',
          href: 'https://migranja.app'
        },
        {
          name: 'Baja Rent',
          description:
            'Plataforma para negocios de renta: lavadoras, bicicletas, herramientas y más. Gestión de clientes, inventario y pagos.',
          stack: ['Next.js', 'Firebase', 'Tailwind'],
          status: 'Activo',
          href: 'https://bajarent.app'
        },
        {
          name: 'HUAM Deportiva',
          description:
            'Plataforma para crear, promover y gestionar eventos deportivos en Baja California Sur.',
          stack: ['Next.js', 'Firebase', 'Maps'],
          status: 'Activo',
          href: 'https://huamdeportiva.com'
        },
        {
          name: 'Baja Minigolf',
          description:
            'Sistema de puntaje digital para un campo de minigolf en La Paz. Los jugadores registran sus scores en tiempo real.',
          stack: ['Next.js', 'Firebase', 'Realtime DB'],
          status: 'Activo',
          href: 'https://bajaminigolf.com'
        }
      ]
    },
    services: {
      title: 'Lo que hago',
      caption:
        'Trabajo con negocios que quieren digitalizar parte de su operación o necesitan una herramienta a la medida.',
      items: [
        {
          title: 'Desarrollo de plataformas web',
          description:
            'Diseño y construyo plataformas completas: desde la idea hasta el producto funcionando. Dashboards, paneles de administración, sistemas de gestión.',
          deliverables: [
            'Aplicaciones web completas',
            'Paneles de administración',
            'APIs y bases de datos'
          ]
        },
        {
          title: 'Productos SaaS',
          description:
            'Creo software como servicio para nichos específicos. Me especializo en tomar un problema real y convertirlo en una herramienta que cualquiera pueda usar.',
          deliverables: [
            'MVPs funcionales',
            'Sistemas multi-tenant',
            'Cobros y suscripciones'
          ]
        },
        {
          title: 'Digitalización de operaciones',
          description:
            'Ayudo a negocios a pasar de hojas de cálculo y procesos manuales a sistemas digitales que ahorran tiempo y reducen errores.',
          deliverables: [
            'Automatización de procesos',
            'Migración de datos',
            'Capacitación de equipos'
          ]
        }
      ]
    },
    posts: {
      title: 'Próximamente',
      caption:
        'Estoy preparando contenido sobre desarrollo web, producto y las cosas que aprendo construyendo proyectos propios.',
      items: []
    },
    facets: {
      title: 'Trayectoria',
      caption:
        'Siempre construyendo algo. Estas son las etapas que me trajeron hasta aquí.',
      items: [
        {
          year: '2024 — presente',
          title: 'Productos propios y desarrollo independiente',
          description:
            'Enfocado en mis propios SaaS: Mi Granja, Baja Rent, HUAM Deportiva. Combino trabajo independiente con proyectos personales desde La Paz.'
        },
        {
          year: '2020 — 2024',
          title: 'Plataformas web y digitalización',
          description:
            'Desarrollo de plataformas completas para negocios. Desde sistemas de gestión hasta herramientas internas para equipos.'
        },
        {
          year: '2014 — 2020',
          title: 'Desarrollo web y primeros proyectos',
          description:
            'Sitios web, tiendas en línea y mis primeras aplicaciones. Aprendí haciendo, probando tecnologías y resolviendo problemas reales para clientes.'
        }
      ]
    },
    contact: {
      title: 'Platiquemos',
      caption:
        'Si tienes un proyecto en mente, quieres digitalizar algo de tu negocio o simplemente quieres saludar, escríbeme. Siempre me gusta conocer ideas nuevas.',
      emailLabel: 'Correo',
      email: 'hola@raulzarza.com',
      newsletterCta: 'Próximamente newsletter',
      commentsLabel: '',
      socials: [
        { label: 'GitHub', href: 'https://github.com/raulzarzadev' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raulzarzadev' }
      ]
    },
    footer: {
      note: 'Hecho con Astro y Tailwind desde La Paz, BCS.'
    }
  },
  en: {
    seo: {
      siteName: 'Raúl Zarza',
      description:
        'Web developer with 10+ years building SaaS, platforms, and digital tools for real businesses. Based in La Paz, Mexico.'
    },
    nav: {
      brand: 'raulzarza.com',
      links: [
        { slug: 'projects', label: 'Projects' },
        { slug: 'about', label: 'About' },
        { slug: 'contact', label: 'Contact' }
      ]
    },
    hero: {
      eyebrow: 'Web developer · La Paz, Mexico',
      title: 'I build digital tools for businesses that need to work better',
      description:
        'For over 10 years I\'ve been designing and developing web platforms, SaaS products, and tools that help real businesses digitize and optimize their operations. I like building new things and always have something in the works.',
      actions: [
        {
          label: 'See my projects',
          href: '/en/projects',
          variant: 'default'
        },
        {
          label: 'Get in touch',
          href: '/en/contact',
          variant: 'ghost'
        },
        {
          label: 'Download CV',
          href: '/cv-raul-zarza-en.pdf',
          variant: 'ghost',
          download: true
        }
      ]
    },
    projects: {
      title: 'Projects',
      caption:
        'Products I\'ve built to solve real problems. Each one started from an actual need.',
      items: [
        {
          name: 'Mi Granja',
          description:
            'SaaS for livestock management. Track inventory, reproduction, health records, and herd events from any device.',
          stack: ['Next.js', 'Firebase', 'PWA'],
          status: 'Active',
          href: 'https://migranja.app'
        },
        {
          name: 'Baja Rent',
          description:
            'Platform for rental businesses: washers, bikes, tools, and more. Customer management, inventory, and payments.',
          stack: ['Next.js', 'Firebase', 'Tailwind'],
          status: 'Active',
          href: 'https://bajarent.app'
        },
        {
          name: 'HUAM Deportiva',
          description:
            'Platform to create, promote, and manage sports events in Baja California Sur, Mexico.',
          stack: ['Next.js', 'Firebase', 'Maps'],
          status: 'Active',
          href: 'https://huamdeportiva.com'
        },
        {
          name: 'Baja Minigolf',
          description:
            'Digital scoring system for a mini golf course in La Paz. Players track their scores in real time.',
          stack: ['Next.js', 'Firebase', 'Realtime DB'],
          status: 'Active',
          href: 'https://bajaminigolf.com'
        }
      ]
    },
    services: {
      title: 'What I do',
      caption:
        'I work with businesses that want to digitize part of their operations or need a custom-built tool.',
      items: [
        {
          title: 'Web platform development',
          description:
            'I design and build full platforms: from idea to working product. Dashboards, admin panels, management systems.',
          deliverables: [
            'Full web applications',
            'Admin panels',
            'APIs and databases'
          ]
        },
        {
          title: 'SaaS products',
          description:
            'I create software as a service for specific niches. I specialize in taking a real problem and turning it into a tool anyone can use.',
          deliverables: [
            'Functional MVPs',
            'Multi-tenant systems',
            'Billing and subscriptions'
          ]
        },
        {
          title: 'Operations digitization',
          description:
            'I help businesses move from spreadsheets and manual processes to digital systems that save time and reduce errors.',
          deliverables: [
            'Process automation',
            'Data migration',
            'Team training'
          ]
        }
      ]
    },
    posts: {
      title: 'Coming soon',
      caption:
        'I\'m working on content about web development, product building, and things I learn from my own projects.',
      items: []
    },
    facets: {
      title: 'Background',
      caption:
        'Always building something. These are the stages that brought me here.',
      items: [
        {
          year: '2024 — present',
          title: 'Own products and independent development',
          description:
            'Focused on my own SaaS products: Mi Granja, Baja Rent, HUAM Deportiva. Combining independent work with personal projects from La Paz.'
        },
        {
          year: '2020 — 2024',
          title: 'Web platforms and digitization',
          description:
            'Building full platforms for businesses. From management systems to internal tools for teams.'
        },
        {
          year: '2014 — 2020',
          title: 'Web development and first projects',
          description:
            'Websites, online stores, and my first applications. I learned by doing, testing technologies, and solving real problems for clients.'
        }
      ]
    },
    contact: {
      title: 'Let\'s talk',
      caption:
        'If you have a project in mind, want to digitize something in your business, or just want to say hi, write me. I always enjoy hearing new ideas.',
      emailLabel: 'Email',
      email: 'hola@raulzarza.com',
      newsletterCta: 'Newsletter coming soon',
      commentsLabel: '',
      socials: [
        { label: 'GitHub', href: 'https://github.com/raulzarzadev' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raulzarzadev' }
      ]
    },
    footer: {
      note: 'Built with Astro and Tailwind from La Paz, BCS, Mexico.'
    }
  }
}

export function getCopy(lang: Lang): SiteCopy {
  return copy[lang] ?? copy.es
}

export function pathFor(lang: Lang, slug?: string) {
  if (!slug || slug === 'home') return `/${lang}`
  return `/${lang}/${slug}`
}
