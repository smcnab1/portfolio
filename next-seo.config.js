const canonicalUrl = 'https://sammcnab.co.uk';
const metaImage = 'https://sammcnab.co.uk/images/projects/portfolio-home.webp';
const metaDescription =
  'Sam McNab is a Senior Lecturer, Registered Paramedic and founder of SimHQ, working across healthcare simulation, education and software development.';

const defaultSEOConfig = {
  defaultTitle: 'Sam McNab | Healthcare, education and software',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Sam McNab | Healthcare, education and software',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'Sam McNab portfolio homepage',
        width: 1200,
        height: 630,
      },
    ],
    site_name: 'sammcnab.co.uk',
  },
};

export default defaultSEOConfig;
