export const sitemapData = {
  id: 'root',
  title: 'IMSERC',
  url: '/',
  type: 'main',
  description: 'Integrated Molecular Structure Education and Research Center',
  children: [
    {
      id: 'about',
      title: 'About',
      url: '/about.html',
      type: 'main',
      description: 'History and information about IMSERC',
      children: [
        {
          id: 'onboarding',
          title: 'Onboarding',
          url: '/about-onboarding.html',
          type: 'secondary'
        },
        {
          id: 'general-faq',
          title: 'General FAQ\'s',
          url: '/about-general-faq.html',
          type: 'secondary'
        },
        {
          id: 'training',
          title: 'Training',
          url: '/about-training.html',
          type: 'secondary'
        },
        {
          id: 'acknowledgements',
          title: 'Acknowledgements',
          url: '/about-acknowledgements.html',
          type: 'secondary'
        },
        {
          id: 'fees',
          title: 'Fees',
          url: '/about-fees.html',
          type: 'secondary'
        },
        {
          id: 'policies',
          title: 'Policies',
          url: '/about-policies.html',
          type: 'secondary'
        },
        {
          id: 'publications',
          title: 'Publications',
          url: '/about-publications.html',
          type: 'secondary'
        },
        {
          id: 'location',
          title: 'Location',
          url: '/about-location.html',
          type: 'secondary'
        }
      ]
    },
    {
      id: 'research',
      title: 'Research',
      url: '/research.html',
      type: 'main',
      description: 'More than 100 years of combined expertise',
      children: [
        {
          id: 'synthetic-chemistry',
          title: 'Synthetic Chemistry',
          url: '/research-synthetic-chemistry.html',
          type: 'secondary'
        },
        {
          id: 'natural-products',
          title: 'Natural Products',
          url: '/research-natural-products.html',
          type: 'secondary'
        },
        {
          id: 'materials-nano',
          title: 'Materials / Nano Science',
          url: '/research-materials-nano.html',
          type: 'secondary'
        },
        {
          id: 'environmental',
          title: 'Environmental',
          url: '/research-enviromental.html',
          type: 'secondary'
        },
        {
          id: 'medicinal',
          title: 'Drug Discovery / Medicinal',
          url: '/research-medicinal.html',
          type: 'secondary'
        },
        {
          id: 'bioanalytical',
          title: 'Bioanalytical',
          url: '/research-bioanalytical.html',
          type: 'secondary'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      url: '/services.html',
      type: 'main',
      description: 'Consultation and high quality services',
      children: [
        {
          id: 'crystallography-service',
          title: 'Crystallography',
          url: '/services-crystallography.html',
          type: 'form'
        },
        {
          id: 'ms-submission',
          title: 'MS Sample Submission',
          url: '/services-ms.html',
          type: 'form'
        },
        {
          id: 'nmr-service',
          title: 'NMR Service Request',
          url: '/services-nmr.html',
          type: 'form'
        },
        {
          id: 'pcm-service',
          title: 'Physical Characterization',
          url: '/services-pcm.html',
          type: 'form'
        }
      ]
    },
    {
      id: 'techniques',
      title: 'Techniques',
      url: '/techniques.html',
      type: 'main',
      description: 'A comprehensive fleet of instrumentation',
      children: [
        {
          id: 'crystallography-tech',
          title: 'Crystallography',
          url: '/techniques-crystallography.html',
          type: 'secondary'
        },
        {
          id: 'mass-spectrometry',
          title: 'Mass Spectrometry',
          url: '/techniques-ms.html',
          type: 'secondary'
        },
        {
          id: 'nmr-spectroscopy',
          title: 'NMR Spectroscopy',
          url: '/techniques-nmr.html',
          type: 'secondary'
        },
        {
          id: 'physical-characterization',
          title: 'Physical Characterization',
          url: '/techniques-pcm.html',
          type: 'secondary'
        }
      ]
    },
    {
      id: 'contact',
      title: 'Contact',
      url: '/contact-staff.html',
      type: 'main',
      description: 'Contact us',
      children: [
        {
          id: 'staff',
          title: 'Staff',
          url: '/contact-staff.html',
          type: 'secondary'
        },
        {
          id: 'issue-reporting',
          title: 'Issue Reporting',
          url: '/contact-issue.html',
          type: 'form'
        }
      ]
    },
    {
      id: 'news',
      title: 'News',
      url: '/news-general.html',
      type: 'main',
      description: 'News',
      children: [
        {
          id: 'all-news',
          title: 'All News',
          url: '/news-general.html',
          type: 'content'
        }
      ]
    }
  ]
};