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
        'Portafolio, blog y laboratorio para proyectos y subdominios como autows.'
    },
    nav: {
      brand: 'raulzarza.com',
      links: [
        { slug: 'posts', label: 'Posts' },
        { slug: 'projects', label: 'Proyectos' },
        { slug: 'about', label: 'Sobre mí' },
        { slug: 'contact', label: 'Contacto' }
      ]
    },
    hero: {
      eyebrow: 'SaaS desde negocios reales',
      title: 'Transformo servicios probados en software escalable',
      description:
        'Trabajo con fundadores y equipos que ya tienen clientes para convertir su operación en productos SaaS claros, medibles y listos para crecer.',
      actions: [
        {
          label: 'Convertir mi servicio en SaaS',
          href: '/es/contact',
          variant: 'default'
        },
        {
          label: 'Ver procesos y casos',
          href: '/es/projects',
          variant: 'ghost'
        }
      ]
    },
    projects: {
      title: 'Casos convertidos en SaaS',
      caption:
        'Subdominios donde pruebo, documento y lanzo productos construidos desde operaciones existentes.',
      items: [
        {
          name: 'raulzarza.com',
          description:
            'Hub público que reúne portafolio, blog y entradas a cada laboratorio SaaS.',
          stack: ['Astro', 'Tailwind', 'shadcn'],
          status: 'Live',
          href: 'https://raulzarza.com'
        },
        {
          name: 'autows',
          description:
            'Servicio de automatización traducido a plataforma multi-tenant para creadores y equipos pequeños.',
          stack: ['tRPC', 'Next.js', 'Supabase'],
          status: 'En curso',
          href: 'https://autows.raulzarza.com'
        },
        {
          name: 'lab',
          description:
            'Colección de playbooks y micro utilidades para validar cobros y métricas en días.',
          stack: ['Cloudflare', 'Workers', 'Bun'],
          status: 'Beta',
          href: 'https://lab.raulzarza.com'
        }
      ]
    },
    services: {
      title: 'Cómo aterrizo un SaaS',
      caption:
        'Proceso en tres capas para pasar de servicio manual a producto escalable.',
      items: [
        {
          title: 'Mapeo Operativo',
          description:
            'Desmenuzo el servicio actual, identifico los momentos de valor y defino métricas de éxito por rol.',
          deliverables: [
            'Blueprint del servicio',
            'Inventario de automatizaciones',
            'Métricas base'
          ]
        },
        {
          title: 'MVP SaaS listo para cobrar',
          description:
            'Diseño UX minimalista, arquitectura, stack y planes. Construyo módulos core con feature flags.',
          deliverables: [
            'Diseño y copy',
            'Stack documentado',
            'Checkout o billing conectado'
          ]
        },
        {
          title: 'Escalamiento y entregables',
          description:
            'Implemento analítica, onboarding guiado, soportes de contenido y experimentos de pricing.',
          deliverables: [
            'Panel de métricas',
            'Playbook de lanzamiento',
            'Roadmap trimestral'
          ]
        }
      ]
    },
    posts: {
      title: 'Últimos escritos',
      caption:
        'Notas tácticas sobre producto, pricing, automatización y hábitos de founders.',
      items: [
        {
          title: 'Autonomía como feature',
          summary:
            'Cómo diseño servicios que pueden operar casi solos usando automatizaciones.',
          date: '11 nov 2025',
          readingTime: '5 min',
          href: '/es/posts/autonomia-como-feature'
        },
        {
          title: 'Notas sobre audio documental',
          summary:
            'Bitácora de producción y equipo para proyectos de audio largos.',
          date: '02 nov 2025',
          readingTime: '7 min',
          href: '/es/posts/notas-audio'
        },
        {
          title: 'Micro SaaS para subdominios',
          summary:
            'Guía rápida para lanzar utilidades en subdominios y medir tracción.',
          date: '26 oct 2025',
          readingTime: '4 min',
          href: '/es/posts/microsaas-subdominios'
        }
      ]
    },
    facets: {
      title: 'Capas de trabajo',
      caption:
        'Porque mezclar servicios, producto y contenido mantiene el laboratorio vivo.',
      items: [
        {
          year: '2025',
          title: 'Traductor de servicios a SaaS',
          description:
            'Convirtiendo estudios, newsletters y consultorías en software con ingresos recurrentes.'
        },
        {
          year: '2023 — 2024',
          title: 'Audio y docuseries',
          description:
            'Producción independiente y mezcla de historias para podcasts narrativos.'
        },
        {
          year: '2018 — 2022',
          title: 'Producto digital',
          description: 'Lideré equipos de producto para startups SaaS en LatAm.'
        }
      ]
    },
    contact: {
      title: 'Agenda una llamada blueprint',
      caption:
        'Usamos 30 minutos para mapear tu servicio actual, costos, métricas y riesgos. Luego recibes un plan de conversión a SaaS.',
      emailLabel: 'Correo directo',
      email: 'hola@raulzarza.com',
      newsletterCta: 'Quiero el plan en mi inbox',
      commentsLabel: 'Comentarios abiertos vía Giscus en cada estudio de caso.',
      socials: [
        // { label: 'Mastodon', href: 'https://indie.codes/@raulzarzadev' },
        { label: 'GitHub', href: 'https://github.com/raulzarzadev' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raulzarzadev' }
      ]
    },
    footer: {
      note: 'Diseñado en Astro + Strapi + Vercel. Analítica mínima con GA4 y planes de newsletter activa.'
    }
  },
  en: {
    seo: {
      siteName: 'Raúl Zarza',
      description:
        'Minimal landing, blog, and directory for subdomain projects like autows.'
    },
    nav: {
      brand: 'raulzarza.com',
      links: [
        { slug: 'posts', label: 'Posts' },
        { slug: 'projects', label: 'Projects' },
        { slug: 'about', label: 'About' },
        { slug: 'contact', label: 'Contact' }
      ]
    },
    hero: {
      eyebrow: 'SaaS from working services',
      title: 'I turn proven operations into scalable software',
      description:
        'Partnering with founders who already sell services to translate their delivery into focused, measurable SaaS products.',
      actions: [
        {
          label: 'Book a SaaS blueprint',
          href: '/en/contact',
          variant: 'default'
        },
        { label: 'Explore playbooks', href: '/en/projects', variant: 'ghost' }
      ]
    },
    projects: {
      title: 'SaaS labs on subdomains',
      caption:
        'Live sandboxes where I document how services evolve into multi-tenant products.',
      items: [
        {
          name: 'raulzarza.com',
          description:
            'Public HQ with portfolio, writing, and entry points to every SaaS experiment.',
          stack: ['Astro', 'Tailwind', 'shadcn'],
          status: 'Live',
          href: 'https://raulzarza.com'
        },
        {
          name: 'autows',
          description:
            'Automation studio evolving into a billing-ready platform for indie operators.',
          stack: ['tRPC', 'Next.js', 'Supabase'],
          status: 'Building',
          href: 'https://autows.raulzarza.com'
        },
        {
          name: 'lab',
          description:
            'Playbooks, pricing sandboxes, and technical snippets released in public.',
          stack: ['Cloudflare', 'Workers', 'Bun'],
          status: 'Beta',
          href: 'https://lab.raulzarza.com'
        }
      ]
    },
    services: {
      title: 'How the SaaS translation works',
      caption:
        'Three stages to move from manual delivery to scalable software.',
      items: [
        {
          title: 'Operational mapping',
          description:
            'Dissect the current service, capture value moments, and assign metrics per role.',
          deliverables: [
            'Service blueprint',
            'Automation inventory',
            'Baseline metrics'
          ]
        },
        {
          title: 'SaaS-ready MVP',
          description:
            'Design minimal UX, define architecture, stack, pricing tiers, and build the core modules.',
          deliverables: [
            'UX + copy kit',
            'Documented stack',
            'Billing + plans connected'
          ]
        },
        {
          title: 'Scale & handoff',
          description:
            'Ship analytics, guided onboarding, content support, and pricing experiments.',
          deliverables: [
            'Metrics dashboard',
            'Launch playbook',
            'Quarterly roadmap'
          ]
        }
      ]
    },
    posts: {
      title: 'Latest writing',
      caption:
        'Tactical notes on product, pricing, automation, and founder habits.',
      items: [
        {
          title: 'Autonomy as a feature',
          summary:
            'How I design services that almost run themselves with automation.',
          date: '11 Nov 2025',
          readingTime: '5 min',
          href: '/en/posts/autonomy-as-a-feature'
        },
        {
          title: 'Documentary audio notes',
          summary: 'Production log and tooling for long-form audio pieces.',
          date: '02 Nov 2025',
          readingTime: '7 min',
          href: '/en/posts/audio-notes'
        },
        {
          title: 'Micro SaaS on subdomains',
          summary:
            'Fast playbook for launching utilities on subdomains and measuring traction.',
          date: '26 Oct 2025',
          readingTime: '4 min',
          href: '/en/posts/micro-saas-subdomains'
        }
      ]
    },
    facets: {
      title: 'Layers of work',
      caption: 'Mixing services, product, and content keeps the lab alive.',
      items: [
        {
          year: '2025',
          title: 'Service-to-SaaS translator',
          description:
            'Transforming studios, newsletters, and consultancies into recurring software revenue.'
        },
        {
          year: '2023 — 2024',
          title: 'Audio + docuseries',
          description:
            'Independent production and story editing for narrative podcasts.'
        },
        {
          year: '2018 — 2022',
          title: 'Product leadership',
          description: 'Led SaaS teams across LatAm, shaping B2B workflows.'
        }
      ]
    },
    contact: {
      title: 'Book a blueprint call',
      caption:
        '30 minutes to map your current delivery, costs, metrics, and risks. Receive a concrete SaaS transition plan after the call.',
      emailLabel: 'Direct email',
      email: 'hello@raulzarza.com',
      newsletterCta: 'Send me the plan',
      commentsLabel: 'Public comments via Giscus on every case study.',
      socials: [
        { label: 'Mastodon', href: 'https://indie.codes/@raulzarza' },
        { label: 'GitHub', href: 'https://github.com/raulzarza' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raulzarza' }
      ]
    },
    footer: {
      note: 'Built with Astro + Strapi + Vercel. GA4 analytics with optional consent banner coming soon.'
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
