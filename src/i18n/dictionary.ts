import type { Locale } from './locales'

export const dictionary = {
  'pt-BR': {
    common: {
      available: 'Disponível',
      readCaseStudy: 'Ler estudo de caso: {title}',
      toggleTheme: 'Alternar tema',
      language: 'Idioma',
      skipToContent: 'Pular para o conteúdo'
    },
    nav: {
      about: 'Sobre',
      work: 'Trabalho',
      experience: 'Experiência',
      pricing: 'Preços',
      contact: 'Contato',
      mode: 'Modo',
      home: 'Início',
      otherWorks: 'Outros trabalhos',
      otherWorksTitle: 'Dê uma olhada nos meus outros trabalhos'
    },
    hero: {
      greeting: 'Olá',
      intro: 'Eu sou {name}',
      title: 'Engenheiro de Design, PhD, DevOps, full-stack — 25+ anos de experiência',
      description:
        'Engenheiro de Design com PhD e certificação DevOps, 25+ anos de experiência em full-stack. Não faço apenas a ponte entre design e engenharia — assumo a experiência inteira, do primeiro rascunho ao produto final.',
      downloadCv: 'Baixar CV',
      contactCta: 'Vamos nos conectar'
    },
    about: {
      eyebrow: 'Sobre mim',
      title: 'A pessoa por trás dos pixels',
      qualifications: 'Qualificações',
      qualificationsList: [
        'Engenheiro Sênior com PhD',
        'Certificação DevOps',
        'Full-stack (25+ anos de experiência)'
      ],
      trip: 'Viagem à Espanha',
      tripPhotos: '{count} fotos',
      surprise: 'Tenho uma surpresa para você 🙃',
      surpriseNotes: [
        'Pegue e veja a surpresa',
        'Tentou de novo? Você é tolo e crédulo',
        'Iniciante :)',
        'Não tente, você não consegue',
        'Haha, você cai em tudo!',
        'Vamos, desisti <'
      ],
      artist: 'Carlos Roberto',
      track: 'Te vejo de novo',
      coverAlt: 'Capa Te vejo de novo'
    },
    featuredWorks: {
      eyebrow: 'Trabalhos em destaque',
      title: 'São aqueles que mais me ensinaram',
      contactTitle: 'Dê uma olhada em alguns dos meus trabalhos'
    },
    experience: {
      eyebrow: 'Stacks & Experiência',
      title: 'Onde sou bom e onde aprendi',
      handle: '@carlosroberto_devops',
      contributions: 'Contribuições no timeline do portfólio',
      timeline: [
        {
          company: 'Lumio',
          role: 'Engenheiro de Design',
          period: '2025 -',
          status: { text: 'Atual', tone: 'positive' as const },
          stack: ['React', 'Figma', 'Design system', 'Tailwind'],
          achievement: 'Criei um design system adotado por 4 times de produto em 30 dias',
          description:
            "Entrei como o primeiro engenheiro de design do time. Fui dono de todo o pipeline design-to-code, construí o design system do produto do zero, enviei novos recursos semanalmente e garanti que nada se perdesse entre o Figma e a produção."
        },
        {
          company: 'Trackflow HQ',
          role: 'Engenheiro Frontend + Designer',
          period: '2023 - 2024, 1 ano',
          stack: ['React', 'Next.js', 'Figma', 'CSS', 'Arquitetura de componentes'],
          achievement: 'Reconstruí toda a UI do dashboard e reduzi a evasão de usuários em 40%',
          description:
            'Comecei como engenheiro frontend, mas rapidamente migrei para um papel híbrido. Reconstruí a UI do dashboard principal, reduzi inconsistências de design em mais de 30 telas e introduzi pensamento baseado em componentes a um time que nunca havia usado um.'
        },
        {
          company: 'Orion Labs',
          role: 'Engenheiro de Design Freelancer',
          period: '2023, 5 meses',
          stack: ['Framer', 'Motion design', 'Design visual', 'Copywriting'],
          achievement: 'Projetei e entreguei um site de marketing completo sozinho em menos de uma semana',
          description:
            'Contratei para projetar e construir um site de marketing de lançamento antes de um anúncio de captação. Entreguei um site Framer totalmente animado em 5 dias — design, build e deploy feitos sozinho.'
        },
        {
          company: 'Auto-initiado',
          role: 'Projetos Paralelos & Open Source',
          period: '2022 -',
          status: { text: 'Em andamento · Pessoal', tone: 'accent' as const },
          stack: ['React', 'Framer', 'TypeScript', 'Paixão por construir'],
          achievement: '3 produtos entregues com usuários reais, 1 biblioteca de componentes open source',
          description:
            'Construí um playground de componentes Framer, um app minimalista de rastreamento de hábitos e uma extensão Chrome para designers. Onde acontece a maior parte do aprendizado real — sem prazos, sem clientes, apenas curiosidade e ofício.'
        }
      ]
    },
    services: {
      eyebrow: 'Serviços que ofereço',
      title: 'Posso ajudar com essas coisas',
      items: [
        {
          title: 'UI & Design de Produto',
          duration: '1 a 3 semanas',
          tools: ['Figma', 'Spline', 'Adobe XD'],
          description:
            'Projeto interfaces limpas, intuitivas e centradas nos seus usuários. Do wireframe ao arquivo final com pixel perfeito.'
        },
        {
          title: 'Engenharia de Design',
          duration: '2 a 4 semanas',
          tools: ['React', 'Tailwind', 'Figma'],
          description:
            'Ponto a ponte entre design e código, transformando mockups polidos em interfaces prontas para produção.'
        },
        {
          title: 'Desenvolvimento Framer',
          duration: '1 a 2 semanas',
          tools: ['Framer', 'CMS', 'SEO'],
          description:
            'Construo e lanço sites de marketing rápidos e animados em Framer — do primeiro rascunho ao domínio ao ar.'
        },
        {
          title: 'Sistemas de Design',
          duration: '3 a 6 semanas',
          tools: ['Figma', 'Tokens', 'Biblioteca de componentes'],
          description:
            'Construo sistemas de design escaláveis que mantêm design e código sincronizados à medida que seu produto cresce.'
        },
        {
          title: 'Interação & Motion Design',
          duration: '1 a 3 semanas',
          tools: ['Framer', 'GSAP', 'Motion'],
          description:
            'Adiciono pequenos detalhes de movimento com propósito que fazem a interface parecer viva e bem pensada.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'Palavras boas',
      title: 'Algumas boas palavras de pessoas com quem trabalhei',
      items: [
        {
          quote:
            "Trabalhar com Carlos Roberto foi uma experiência diferente. Ele não entregou apenas designs, entregou um produto funcionando.",
          name: 'Marcus Reid',
          role: 'Cofundador, Orion Labs'
        },
        {
          quote:
            'Carlos Roberto construiu todo o nosso design system em menos de um mês. Cada componente documentado, cada token conectado.',
          name: 'Priya Nair',
          role: 'Product Lead, Lumio SaaS'
        },
        {
          quote:
            'Já contratei muitos freelancers. Carlos Roberto é o raro que realmente se importa com o ofício. Ele apontou coisas que eu nem tinha notado.',
          name: 'Daniel Hoffmann',
          role: 'CTO, Trackflow HQ'
        }
      ]
    },
    hireMe: {
      eyebrow: 'Como funciona',
      title: 'Sem agências - só eu, totalmente dedicado ao seu produto',
      location: 'Maceió, AL, Brasil',
      stats: {
        totalHours: 'Total de horas',
        rating: 'Avaliação',
        totalJobs: 'Total de projetos'
      },
      verifiedSince: 'Verificado desde abril de 2019',
      backCard: 'Eu me importo com o ofício, os detalhes e em construir coisas que as pessoas gostem de usar.',
      hireTitle: 'Contrate-me hoje',
      hireDescription:
        'Eu assumo apenas poucos projetos por vez, então seu trabalho recebe minha atenção integral.',
      pricingTitle: 'Retainer Mensal',
      pricingSubtitle: 'Um engenheiro de design dedicado ao seu produto.',
      pricingDescription:
        'Eu projeto, construo e envio - do início ao fim, sem intermediários.',
      pricingBadge: 'Pausar ou cancelar a qualquer momento',
      pricingPeriod: '/mês',
      features: [
        'Uma solicitação por vez',
        'Prazo médio de 48 horas',
        'Revisões ilimitadas',
        'Design + código entregues',
        'Até 2 partes interessadas'
      ],
      cta: 'Vamos nos conectar'
    },
    selectService: {
      steps: ['Selecione o serviço', 'Escolha o horário', 'Seus dados'] as const,
      stepOf: 'Passo {current} de {total}',
      back: 'Voltar',
      nextStep: 'Próximo passo',
      services: [
        {
          title: 'Product Design & Engineering',
          price: '$240',
          duration: '20 min',
          description: 'Responsabilidade completa do design ao código'
        },
        {
          title: 'Site ou Landing Page em Framer',
          price: '$120',
          duration: '30 min',
          description: 'Projetado e construído em Framer, pronto para publicar'
        },
        {
          title: 'Setup de Design System',
          price: '$160',
          duration: '15 min',
          description: 'Crio um design system que escala'
        }
      ],
      morning: 'Manhã',
      afternoonEvening: 'Tarde & Noite',
      details: {
        service: 'Serviço',
        dateTime: 'Data & Hora',
        price: 'Preço',
        fullName: 'Nome completo *',
        namePlaceholder: 'Seu nome',
        email: 'Endereço de e-mail *',
        emailPlaceholder: 'seu@email.com',
        notes: 'Notas (opcional)',
        notesPlaceholder: 'Alguma solicitação especial...',
        submit: 'Agendar',
        secureNote: 'Suas informações são seguras e privadas.',
        success: 'Agendamento marcado — enviarei um e-mail de confirmação em breve.',
        confirmTitle: 'Agendamento Confirmado',
        confirmBody:
          'Obrigado, {name}. Seu {service} está agendado para {date} às {time}. Enviamos uma confirmação para o seu e-mail.',
        bookAnother: 'Agendar outro'
      }
    },
    contact: {
      eyebrow: 'Contate-me',
      title: 'Sinta-se à vontade para me enviar uma mensagem,',
      titleEnd: 'responderei o mais breve possível.',
      name: 'Nome*',
      namePlaceholder: 'Seu nome',
      email: 'E-mail*',
      emailPlaceholder: 'seu@email.com',
      service: 'Serviço*',
      selectService: 'Selecione um serviço',
      message: 'Mensagem',
      messagePlaceholder: 'Escreva sua mensagem',
      submit: 'Enviar',
      success: 'Mensagem enviada — retornarei o mais breve possível.',
      nameError: 'O nome deve ter pelo menos 2 caracteres.',
      emailError: 'Digite um endereço de e-mail válido.',
      serviceError: 'Selecione um serviço.',
      messageError: 'A mensagem deve ter pelo menos 10 caracteres.',
      role: 'Engenheiro de Design, PhD, DevOps — full-stack'
    },
    caseStudy: {
      backToHome: 'Voltar ao início',
      organisation: 'Organização',
      role: 'Cargo',
      duration: 'Duração',
      tools: 'Ferramentas & Tecnologias',
      titlePrefix: 'Estudo de Caso',
      points: 'Pontos',
      notFound: '@Oooops',
      notFoundMessage: 'Esta página deu uma curva errada',
      meta: {
        organisation: 'Organização',
        role: 'Cargo',
        duration: 'Duração'
      }
    },
    footer: {
      thankYou: 'Obrigado por visitar esta página',
      create: 'Vamos criar algo bonito',
      seal: 'Selo'
    },
    contactMeta: {
      title: 'Contato',
      description: 'Entre em contato conosco. Estamos aqui para ajudar e responder suas perguntas.',
      jsonLdDescription: 'Engenheiro de Design baseado em Maceió, AL, Brasil.'
    },
    siteMeta: {
      title: 'Carlos Roberto - Portfolio Landing page',
      description:
        'Portfólio pessoal de Carlos Roberto - Engenheiro de Design, PhD, DevOps e full-stack com 25+ anos de experiência.',
      jsonLdDescription: 'Engenheiro de Design baseado em Austin.',
      siteName: 'Carlos Roberto'
    }
  },

  'en-US': {
    common: {
      available: 'Available',
      readCaseStudy: 'Read case study: {title}',
      toggleTheme: 'Toggle theme',
      language: 'Language',
      skipToContent: 'Skip to content'
    },
    nav: {
      about: 'About',
      work: 'Work',
      experience: 'Experience',
      pricing: 'Pricing',
      contact: 'Contact',
      mode: 'Mode',
      home: 'Home',
      otherWorks: 'Other works',
      otherWorksTitle: 'Have a look at my other work'
    },
    hero: {
      greeting: 'Hello',
      intro: 'I am {name}',
      title: 'Senior Engineer, PhD, DevOps, full-stack — 25+ years of experience',
      description:
        "Design engineer with a PhD and DevOps certification, 25+ years of full-stack experience. I don't just bridge design and engineering - I own the entire experience, from the first sketch to the final shipped product.",
      downloadCv: 'Download CV',
      contactCta: "Let's connect"
    },
    about: {
      eyebrow: 'About me',
      title: 'The person behind the pixels',
      qualifications: 'Qualifications',
      qualificationsList: [
        'Senior Engineer with a PhD',
        'DevOps certification',
        'Full-stack (25+ years of experience)'
      ],
      trip: 'Spain trip',
      tripPhotos: '{count} photos',
      surprise: 'I have a surprise for you 🙃',
      surpriseNotes: [
        'Grab it and get surprise',
        'Did you try it again? You silly gullible',
        'Noob :)',
        "Don't try, U can't",
        'Haha, you fall for everything!',
        'Come on, I gave up <'
      ],
      artist: 'Tyler',
      track: 'See you again',
      coverAlt: 'See you again cover art'
    },
    featuredWorks: {
      eyebrow: 'Featured works',
      title: 'These are ones that taught me the most',
      contactTitle: 'Have a look at some of my work'
    },
    experience: {
      eyebrow: 'Stacks & Experience',
      title: "Where I'm good and where I learned from",
      handle: '@carlosroberto_devops',
      contributions: 'Contributions in the portfolio timeline',
      timeline: [
        {
          company: 'Lumio',
          role: 'Design Engineer',
          period: '2025 -',
          status: { text: 'Present', tone: 'positive' as const },
          stack: ['React', 'Figma', 'Design system', 'Tailwind'],
          achievement: 'Built a design system adopted by 4 product teams within 30 days',
          description:
            "Joined as the first design engineer on the team. Owned the entire design-to-code pipeline, built the product's design system from scratch, shipped new features weekly, and made sure nothing got lost between Figma and production."
        },
        {
          company: 'Trackflow HQ',
          role: 'Frontend Engineer + Designer',
          period: '2023 - 2024, 1 year',
          stack: ['React', 'Next.js', 'Figma', 'CSS', 'Component architecture'],
          achievement: 'Rebuilt the entire dashboard UI and cut user drop-off by 40%',
          description:
            'Started as a frontend engineer but quickly moved into a hybrid role. Rebuilt the core dashboard UI, reduced design inconsistencies across 30+ screens, and introduced component-based thinking to a team that had never used one.'
        },
        {
          company: 'Orion Labs',
          role: 'Freelance Design Engineer',
          period: '2023, 5 Months',
          stack: ['Framer', 'Motion design', 'Visual design', 'Copywriting'],
          achievement: 'Designed and shipped a full marketing site solo in under a week',
          description:
            'Brought in to design and build a launch marketing site before a funding announcement. Delivered a fully animated Framer site in 5 days — design, build, and deployment handled solo.'
        },
        {
          company: 'Self-initiated',
          role: 'Side Projects & Open Source',
          period: '2022 -',
          status: { text: 'Ongoing · Personal', tone: 'accent' as const },
          stack: ['React', 'Framer', 'TypeScript', 'Passion for building'],
          achievement: '3 shipped products with real users, 1 open source component library',
          description:
            'Built a Framer component playground, a minimal habit tracker app, and a Chrome extension for designers. Where most of the real learning happens — no deadlines, no clients, just curiosity and craft.'
        }
      ]
    },
    services: {
      eyebrow: 'Services I provide',
      title: 'I can help you with these things',
      items: [
        {
          title: 'UI & Product Design',
          duration: '1 to 3 weeks',
          tools: ['Figma', 'Spline', 'Adobe XD'],
          description:
            'I design interfaces that are clean, intuitive, and built around your users. From the wireframe to the final pixel-perfect file.'
        },
        {
          title: 'Design Engineering',
          duration: '2 to 4 weeks',
          tools: ['React', 'Tailwind', 'Figma'],
          description:
            'I bridge the gap between design and code, turning polished mockups into production-ready interfaces.'
        },
        {
          title: 'Framer Development',
          duration: '1 to 2 weeks',
          tools: ['Framer', 'CMS', 'SEO'],
          description:
            'I build and launch fast, animated marketing sites in Framer — from first draft to live domain.'
        },
        {
          title: 'Design Systems',
          duration: '3 to 6 weeks',
          tools: ['Figma', 'Tokens', 'Component library'],
          description:
            'I build scalable design systems that keep design and code in sync as your product grows.'
        },
        {
          title: 'Interaction & Motion Design',
          duration: '1 to 3 weeks',
          tools: ['Framer', 'GSAP', 'Motion'],
          description:
            'I add the small, purposeful motion details that make an interface feel alive and considered.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'Good words',
      title: "some good words from people I've worked with",
      items: [
        {
          quote:
            "Working with Carlos Roberto was a different experience. He didn't just deliver designs he delivered a working product.",
          name: 'Marcus Reid',
          role: 'Co-founder, Orion Labs'
        },
        {
          quote:
            'Carlos Roberto built our entire design system in under a month. Every component was documented, every token was connected.',
          name: 'Priya Nair',
          role: 'Product Lead, Lumio SaaS'
        },
        {
          quote:
            "I've hired a lot of freelancers. Carlos Roberto is the rare one who actually cares about the craft. He flagged things I hadn't even noticed.",
          name: 'Daniel Hoffmann',
          role: 'CTO, Trackflow HQ'
        }
      ]
    },
    hireMe: {
      eyebrow: 'How it works',
      title: 'No agencies - just me, fully in on your product',
      location: 'Maceió, AL, Brazil',
      stats: {
        totalHours: 'Total hours',
        rating: 'Rating',
        totalJobs: 'Total jobs'
      },
      verifiedSince: 'Verified since April 2019',
      backCard: 'I care about craft, details, and building things people actually enjoy using.',
      hireTitle: 'Hire me today',
      hireDescription:
        'I take on only a small number of projects at a time, so your work always gets my full focus.',
      pricingTitle: 'Monthly Retainer',
      pricingSubtitle: 'One design engineer dedicated to your product.',
      pricingDescription: 'I design it, build it, and ship it - start to finish, no middleman.',
      pricingBadge: 'Pause or cancel anytime',
      pricingPeriod: '/month',
      features: [
        'One request at a time',
        'Avg. 48 hour turnaround',
        'Unlimited revisions',
        'Design + code delivered',
        'Up to 2 stakeholders'
      ],
      cta: "Let's connect"
    },
    selectService: {
      steps: ['Select Service', 'Choose Time', 'Your Details'] as const,
      stepOf: 'Step {current} of {total}',
      back: 'Back',
      nextStep: 'Next step',
      services: [
        {
          title: 'Product Design & Engineering',
          price: '$240',
          duration: '20 min',
          description: 'End-to-end ownership from design to code'
        },
        {
          title: 'Framer Site or Landing Page',
          price: '$120',
          duration: '30 min',
          description: 'Designed and built in Framer, live ready to launch'
        },
        {
          title: 'Design System Setup',
          price: '$160',
          duration: '15 min',
          description: 'I create design system that can scale'
        }
      ],
      morning: 'Morning',
      afternoonEvening: 'Afternoon & Evening',
      details: {
        service: 'Service',
        dateTime: 'Date & Time',
        price: 'Price',
        fullName: 'Full Name *',
        namePlaceholder: 'Your name',
        email: 'Email Address *',
        emailPlaceholder: 'you@example.com',
        notes: 'Notes (optional)',
        notesPlaceholder: 'Any special requests...',
        submit: 'Book Appointment',
        secureNote: 'Your information is secure and private.',
        success: "Appointment booked — I'll send a confirmation email shortly.",
        confirmTitle: 'Booking Confirmed',
        confirmBody:
          "Thank you, {name}. Your {service} is scheduled for {date} at {time}. We've sent a confirmation to your email.",
        bookAnother: 'Book Another'
      }
    },
    contact: {
      eyebrow: 'Contact me',
      title: 'Feel free to send me a message,',
      titleEnd: 'I will get back to you as soon as possible.',
      name: 'Name*',
      namePlaceholder: 'Your name',
      email: 'Email*',
      emailPlaceholder: 'you@example.com',
      service: 'Service*',
      selectService: 'Select a service',
      message: 'Message',
      messagePlaceholder: 'Enter your message',
      submit: 'Submit',
      nameError: 'Name must be at least 2 characters.',
      emailError: 'Enter a valid email address.',
      serviceError: 'Please select a service.',
      messageError: 'Message must be at least 10 characters.',
      success: "Message sent — I'll get back to you as soon as possible.",
      role: 'Design engineer'
    },
    caseStudy: {
      backToHome: 'Back to home',
      organisation: 'Organisation',
      role: 'Role',
      duration: 'Duration',
      tools: 'Tools & Technologies',
      titlePrefix: 'Case Study',
      points: 'Points',
      notFound: '@Oooops',
      notFoundMessage: 'This page took a wrong turn somewhere',
      meta: {
        organisation: 'Organisation',
        role: 'Role',
        duration: 'Duration'
      }
    },
    footer: {
      thankYou: 'Thank you, for visiting here',
      create: "Let's create something beautiful",
      seal: 'Seal'
    },
    contactMeta: {
      title: 'Contact Us',
      description: "Get in touch with us. We're here to help and answer any questions you may have.",
      jsonLdDescription: 'Design engineer based in Maceió, AL, Brazil.'
    },
    siteMeta: {
      title: 'Carlos Roberto - Portfolio Landing page',
      description:
        'Personal portfolio of Carlos Roberto - Design Engineer, PhD, DevOps and full-stack with 25+ years of experience.',
      jsonLdDescription: 'Design engineer based in Austin.',
      siteName: 'Carlos Roberto'
    }
  },

  'es-ES': {
    common: {
      available: 'Disponible',
      readCaseStudy: 'Leer caso de estudio: {title}',
      toggleTheme: 'Alternar tema',
      language: 'Idioma',
      skipToContent: 'Saltar al contenido'
    },
    nav: {
      about: 'Sobre mí',
      work: 'Trabajo',
      experience: 'Experiencia',
      pricing: 'Precios',
      contact: 'Contacto',
      mode: 'Modo',
      home: 'Inicio',
      otherWorks: 'Otros trabajos',
      otherWorksTitle: 'Echa un vistazo a mis otros trabajos'
    },
    hero: {
      greeting: 'Hola',
      intro: 'Soy {name}',
      title: 'Ingeniero Senior, PhD, DevOps, full-stack — más de 25 años de experiencia',
      description:
        'Ingeniero de diseño con doctorado y certificación DevOps, más de 25 años de experiencia full-stack. No solo hago de puente entre diseño e ingeniería: asumo la experiencia completa, del primer boceto hasta el producto final.',
      downloadCv: 'Descargar CV',
      contactCta: 'Conectemos'
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'La persona detrás de los píxeles',
      qualifications: 'Cualificaciones',
      qualificationsList: [
        'Ingeniero Senior con doctorado',
        'Certificación DevOps',
        'Full-stack (más de 25 años de experiencia)'
      ],
      trip: 'Viaje a España',
      tripPhotos: '{count} fotos',
      surprise: 'Tengo una sorpresa para ti 🙃',
      surpriseNotes: [
        'Coge y descubre la sorpresa',
        '¿Lo intentaste de nuevo? Qué ingenuo y crédulo',
        'Novato :)',
        'No lo intentes, no puedes',
        'Jaja, ¡te caes en todo!',
        'Venga, me rindo <'
      ],
      artist: 'Tyler',
      track: 'See you again',
      coverAlt: 'Carátula See you again'
    },
    featuredWorks: {
      eyebrow: 'Trabajos destacados',
      title: 'Son los que más me enseñaron',
      contactTitle: 'Echa un vistazo a algunos de mis trabajos'
    },
    experience: {
      eyebrow: 'Stacks & Experiencia',
      title: 'Donde soy bueno y donde aprendí',
      handle: '@carlosroberto_devops',
      contributions: 'Contribuciones en la línea de tiempo del portafolio',
      timeline: [
        {
          company: 'Lumio',
          role: 'Ingeniero de Diseño',
          period: '2025 -',
          status: 'Actual',
          stack: ['React', 'Figma', 'Design system', 'Tailwind'],
          achievement: 'Creé un design system adoptado por 4 equipos de producto en 30 días',
          description:
            'Entré como el primer ingeniero de diseño del equipo. Asumí todo el pipeline design-to-code, construí el design system del producto desde cero, lancé nuevas funcionalidades cada semana y me aseguré de que no se perdiera nada entre Figma y producción.'
        },
        {
          company: 'Trackflow HQ',
          role: 'Ingeniero Frontend + Diseñador',
          period: '2023 - 2024, 1 año',
          stack: ['React', 'Next.js', 'Figma', 'CSS', 'Arquitectura de componentes'],
          achievement: 'Reconstruí toda la UI del dashboard y reduci el abandono de usuarios un 40 %',
          description:
            'Empecé como ingeniero frontend, pero pronto pasé a un rol híbrido. Reconstruí la UI del dashboard principal, reduje las inconsistencias de diseño en más de 30 pantallas e introduje el pensamiento basado en componentes a un equipo que nunca lo había usado.'
        },
        {
          company: 'Orion Labs',
          role: 'Ingeniero de Diseño Freelance',
          period: '2023, 5 meses',
          stack: ['Framer', 'Motion design', 'Diseño visual', 'Copywriting'],
          achievement: 'Diseñé y entregué un sitio de marketing completo en solitario en menos de una semana',
          description:
            'Me contrataron para diseñar y construir un sitio de marketing de lanzamiento antes de un anuncio de financiación. Entregué un sitio Framer totalmente animado en 5 días: diseño, build y despliegue hechos por mí.'
        },
        {
          company: 'Autoiniciado',
          role: 'Proyectos Paralelos & Open Source',
          period: '2022 -',
          status: { text: 'En curso · Personal', tone: 'accent' as const },
          stack: ['React', 'Framer', 'TypeScript', 'Pasión por construir'],
          achievement: '3 productos lanzados con usuarios reales, 1 biblioteca de componentes open source',
          description:
            'Construí un playground de componentes Framer, una app minimalista de seguimiento de hábitos y una extensión de Chrome para diseñadores. Donde ocurre el verdadero aprendizaje: sin plazos, sin clientes, solo curiosidad y oficio.'
        }
      ]
    },
    services: {
      eyebrow: 'Servicios que ofrezco',
      title: 'Puedo ayudarte con estas cosas',
      items: [
        {
          title: 'UI & Diseño de Producto',
          duration: '1 a 3 semanas',
          tools: ['Figma', 'Spline', 'Adobe XD'],
          description:
            'Diseño interfaces limpias, intuitivas y pensadas para tus usuarios. Del wireframe al archivo final perfecto al píxel.'
        },
        {
          title: 'Ingeniería de Diseño',
          duration: '2 a 4 semanas',
          tools: ['React', 'Tailwind', 'Figma'],
          description:
            'Hago de puente entre diseño y código, convirtiendo mockups pulidos en interfaces listas para producción.'
        },
        {
          title: 'Desarrollo en Framer',
          duration: '1 a 2 semanas',
          tools: ['Framer', 'CMS', 'SEO'],
          description:
            'Construyo y lanzo sitios de marketing rápidos y animados en Framer: del primer borrador al dominio en vivo.'
        },
        {
          title: 'Sistemas de Design',
          duration: '3 a 6 semanas',
          tools: ['Figma', 'Tokens', 'Biblioteca de componentes'],
          description:
            'Construyo sistemas de diseño escalables que mantienen el diseño y el código sincronizados a medida que tu producto crece.'
        },
        {
          title: 'Interacción & Motion Design',
          duration: '1 a 3 semanas',
          tools: ['Framer', 'GSAP', 'Motion'],
          description:
            'Añado pequeños detalles de movimiento con propósito que hacen que una interfaz parezca viva y cuidada.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'Buenas palabras',
      title: 'Algunas buenas palabras de gente con la que he trabajado',
      items: [
        {
          quote:
            'Trabajar con Carlos Roberto fue una experiencia distinta. No solo entregó diseños, entregó un producto que funcionaba.',
          name: 'Marcus Reid',
          role: 'Cofundador, Orion Labs'
        },
        {
          quote:
            'Carlos Roberto construyó todo nuestro design system en menos de un mes. Cada componente documentado, cada token conectado.',
          name: 'Priya Nair',
          role: 'Product Lead, Lumio SaaS'
        },
        {
          quote:
            'He contratado a muchos freelancers. Carlos Roberto es el raro que realmente se importa por el oficio. Señaló cosas que ni yo había notado.',
          name: 'Daniel Hoffmann',
          role: 'CTO, Trackflow HQ'
        }
      ]
    },
    hireMe: {
      eyebrow: 'Cómo funciona',
      title: 'Sin agencias: solo yo, totalmente entregado a tu producto',
      location: 'Maceió, AL, Brasil',
      stats: {
        totalHours: 'Total de horas',
        rating: 'Valoración',
        totalJobs: 'Total de proyectos'
      },
      verifiedSince: 'Verificado desde abril de 2019',
      backCard: 'Me importa el oficio, los detalles y construir cosas que la gente disfruta usar.',
      hireTitle: 'Contrátame hoy',
      hireDescription:
        'Solo acepto unos pocos proyectos a la vez, así que tu trabajo siempre recibe toda mi atención.',
      pricingTitle: 'Retainer Mensual',
      pricingSubtitle: 'Un ingeniero de diseño dedicado a tu producto.',
      pricingDescription: 'Lo diseño, lo construyo y lo lanzo: de principio a fin, sin intermediarios.',
      pricingBadge: 'Pausa o cancela cuando quieras',
      pricingPeriod: '/mes',
      features: [
        'Una solicitud a la vez',
        'Plazo medio de 48 horas',
        'Revisiones ilimitadas',
        'Diseño + código entregados',
        'Hasta 2 partes interesadas'
      ],
      cta: 'Conectemos'
    },
    selectService: {
      steps: ['Selecciona el servicio', 'Elige la hora', 'Tus datos'] as const,
      stepOf: 'Paso {current} de {total}',
      back: 'Atrás',
      nextStep: 'Siguiente paso',
      services: [
        {
          title: 'Product Design & Engineering',
          price: '$240',
          duration: '20 min',
          description: 'Responsabilidad completa del diseño al código'
        },
        {
          title: 'Sitio o Landing Page en Framer',
          price: '$120',
          duration: '30 min',
          description: 'Diseñado y construido en Framer, listo para publicar'
        },
        {
          title: 'Configuración de Design System',
          price: '$160',
          duration: '15 min',
          description: 'Creo un design system que puede escalar'
        }
      ],
      morning: 'Mañana',
      afternoonEvening: 'Tarde y Noche',
      details: {
        service: 'Servicio',
        dateTime: 'Fecha y hora',
        price: 'Precio',
        fullName: 'Nombre completo *',
        namePlaceholder: 'Tu nombre',
        email: 'Correo electrónico *',
        emailPlaceholder: 'tu@email.com',
        notes: 'Notas (opcional)',
        notesPlaceholder: 'Alguna petición especial...',
        submit: 'Reservar',
        secureNote: 'Tu información es segura y privada.',
        success: 'Cita reservada: enviaré un correo de confirmación en breve.',
        confirmTitle: 'Reserva Confirmada',
        confirmBody:
          'Gracias, {name}. Tu {service} está programado para el {date} a las {time}. Hemos enviado una confirmación a tu correo.',
        bookAnother: 'Reservar otra'
      }
    },
    contact: {
      eyebrow: 'Contáctame',
      title: 'No dudes en enviarme un mensaje,',
      titleEnd: 'te responderé lo antes posible.',
      name: 'Nombre*',
      namePlaceholder: 'Tu nombre',
      email: 'Correo electrónico*',
      emailPlaceholder: 'tu@email.com',
      service: 'Servicio*',
      selectService: 'Selecciona un servicio',
      message: 'Mensaje',
      messagePlaceholder: 'Escribe tu mensaje',
      submit: 'Enviar',
      success: 'Mensaje enviada: te responderé lo antes posible.',
      nameError: 'El nombre debe tener al menos 2 caracteres.',
      emailError: 'Introduce una dirección de correo válida.',
      serviceError: 'Selecciona un servicio.',
      messageError: 'El mensaje debe tener al menos 10 caracteres.',
      role: 'Ingeniero de diseño'
    },
    caseStudy: {
      backToHome: 'Volver al inicio',
      organisation: 'Organización',
      role: 'Cargo',
      duration: 'Duración',
      tools: 'Herramientas y Tecnologías',
      titlePrefix: 'Caso de Estudio',
      points: 'Puntos',
      notFound: '@Oooops',
      notFoundMessage: 'Esta página tomó un camino equivocado',
      meta: {
        organisation: 'Organización',
        role: 'Cargo',
        duration: 'Duración'
      }
    },
    footer: {
      thankYou: 'Gracias por visitar esta página',
      create: 'Vamos a crear algo bonito',
      seal: 'Sello'
    },
    contactMeta: {
      title: 'Contacto',
      description: 'Ponte en contacto con nosotros. Estamos aquí para ayudarte y responder tus preguntas.',
      jsonLdDescription: 'Ingeniero de diseño basado en Maceió, AL, Brasil.'
    },
    siteMeta: {
      title: 'Carlos Roberto - Portfolio Landing page',
      description:
        'Portafolio personal de Carlos Roberto: ingeniero de diseño, PhD, DevOps y full-stack con más de 25 años de experiencia.',
      jsonLdDescription: 'Ingeniero de diseño basado en Austin.',
      siteName: 'Carlos Roberto'
    }
  }
} as const

export type Dictionary = (typeof dictionary)['pt-BR']

export const getDictionary = (locale: Locale): Dictionary => dictionary[locale] as Dictionary
