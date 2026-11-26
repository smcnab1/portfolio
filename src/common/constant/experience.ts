export interface ExperienceItem {
  title: string;
  organisation: string;
  dates: string;
  context?: string;
  responsibilities: string[];
}

// Dates and role names are drawn from the October 2026 LinkedIn export.
// Keep concurrent work explicit instead of implying a single career ladder.
export const EXPERIENCE: ExperienceItem[] = [
  {
    title: 'Founder',
    organisation: 'SimHQ',
    dates: 'June 2026 – present',
    context: 'Alongside academic and clinical practice',
    responsibilities: [
      'Design and build software for healthcare simulation operations, from product architecture to full-stack delivery.',
      'Develop multi-tenant workflows, automation and identity and access controls with a focus on practical security.',
    ],
  },
  {
    title: 'Senior Lecturer – Simulation & Immersive Technologies',
    organisation: 'University of West London',
    dates: 'September 2025 – present',
    responsibilities: [
      'Lead simulation-based learning and immersive education across healthcare programmes.',
      'Contribute to curriculum, assessment, quality assurance and responsible digital innovation.',
    ],
  },
  {
    title: 'Deputy / Acting Lead for Simulation & Immersive Technologies',
    organisation: 'University of West London',
    dates: 'November 2025 – March 2026',
    context: 'Concurrent with Senior Lecturer role',
    responsibilities: [
      'Coordinated simulation delivery, staffing and resources across programmes.',
      'Supported academic leadership, team development and service improvement.',
    ],
  },
  {
    title: 'Lecturer – Simulation & Immersive Technologies',
    organisation: 'University of West London',
    dates: 'April 2023 – September 2025',
    responsibilities: [
      'Designed and delivered simulation, immersive learning and multidisciplinary healthcare teaching.',
      'Supported assessment, student learning and improvements in simulation practice.',
    ],
  },
  {
    title: 'Registered Paramedic | Clinical Trainer | Tutor | Coach & Mentor',
    organisation: 'Independent',
    dates: 'February 2022 – present',
    context: 'Concurrent clinical and education practice',
    responsibilities: [
      'Provide autonomous clinical assessment and care in contracted settings.',
      'Teach, coach and mentor clinicians and learners, bringing current practice into education and product work.',
    ],
  },
  {
    title: 'Combat Medical Technician and Clinical Instructor',
    organisation: 'British Army',
    dates: '2016 – 2024',
    responsibilities: [
      'Progressed through military clinical roles, including registered paramedic practice in operational medical settings.',
      'Delivered specialist clinical instruction and supported the development of military healthcare teams.',
    ],
  },
  {
    title: 'Emergency Medical Technician and additional responsibilities',
    organisation: 'London Ambulance Service NHS Trust',
    dates: '2018 – 2023',
    responsibilities: [
      'Progressed from trainee ambulance crew to frontline Emergency Medical Technician.',
      'Contributed to specialist response, end-of-life-care education and staff improvement activity.',
    ],
  },
];

export const ADDITIONAL_RESPONSIBILITIES = [
  'Lead, Neurodivergent Staff Network at the University of West London',
  'Advance UWL mentor and assessor for academic colleagues',
  'Article peer-review for healthcare simulation and public health journals',
];
