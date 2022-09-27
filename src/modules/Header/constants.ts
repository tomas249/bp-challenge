export type Anchor = {
  label: string;
  href: string;
};

export type ItemProps = Anchor & {
  list?: Anchor[];
};

export const LINKS: ItemProps[] = [
  {
    href: "/digital-services",
    label: "Digital Services",
    list: [
      {
        href: "/digital-services/digital-journey-assessment",
        label: "Digital journey assessment",
      },
      { href: "/demo", label: "Digital product management" },
      { href: "/demo", label: "Application development" },
    ],
  },
  {
    href: "/demo",
    label: "Cloud & Cybersecurity",
    list: [
      { href: "/demo", label: "Cloud Services" },
      { href: "/demo", label: "Data Center & Network" },
      { href: "/demo", label: "Engineering" },
      { href: "/demo", label: "Cybersecurity" },
    ],
  },
  {
    href: "/demo",
    label: "Data Services",
    list: [
      { href: "/demo", label: "Data strategy assessment" },
      { href: "/demo", label: "Robotic Process Automation" },
      { href: "/demo", label: "ML Data Models" },
    ],
  },
  {
    href: "/demo",
    label: "About us",
  },
  {
    href: "/contact-us",
    label: "Contact us",
  },
];
