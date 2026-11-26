import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import About from '@/modules/about';

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION =
  'Experience across clinical practice, healthcare simulation, academic leadership and software development.';

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${PAGE_TITLE} | Sam McNab`}
        description={PAGE_DESCRIPTION}
        canonical='https://sammcnab.co.uk/about'
      />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container>
    </>
  );
};

export default AboutPage;
