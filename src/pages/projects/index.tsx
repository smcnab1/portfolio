import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { PROJECTS } from '@/common/constant/projects';
import Projects from '@/modules/projects';

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Selected software projects and case studies, including SimHQ and this portfolio website.';

const ProjectsPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${PAGE_TITLE} | Sam McNab`}
        description={PAGE_DESCRIPTION}
        canonical='https://sammcnab.co.uk/projects'
      />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects projects={PROJECTS} />
      </Container>
    </>
  );
};

export default ProjectsPage;
