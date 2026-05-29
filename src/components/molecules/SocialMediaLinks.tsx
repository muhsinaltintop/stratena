const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/stratenawise",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/stratenawise",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.55.21.95.47 1.36.88.42.41.67.81.89 1.36.16.43.36 1.06.41 2.23.06 1.27.08 1.65.08 4.85s-.02 3.58-.08 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.55-.47.95-.89 1.36-.41.42-.81.67-1.36.89-.43.16-1.06.36-2.23.41-1.27.06-1.65.08-4.85.08s-3.58-.02-4.85-.08c-1.17-.05-1.8-.25-2.23-.41a3.67 3.67 0 0 1-1.36-.89 3.67 3.67 0 0 1-.89-1.36c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.08-1.65-.08-4.85s.02-3.58.08-4.85c.05-1.17.25-1.8.41-2.23.22-.55.47-.95.89-1.36.41-.41.81-.67 1.36-.88.43-.17 1.06-.37 2.23-.42 1.27-.06 1.65-.07 4.85-.07Zm0-2.16C8.75 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.39A5.82 5.82 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.75 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.39 2.12.66.67 1.33 1.09 2.12 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.75 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.39.67-.66 1.09-1.33 1.39-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.7.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.39-2.12A5.82 5.82 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.25 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.84-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
      </svg>
    )
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Stratenawise",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.13-2.14C19.49 3.55 12 3.55 12 3.55s-7.49 0-9.37.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.13 2.14c1.88.5 9.37.5 9.37.5s7.49 0 9.37-.5a3.02 3.02 0 0 0 2.13-2.14c.5-1.88.5-5.81.5-5.81s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
      </svg>
    )
  }
];

type SocialMediaLinksProps = {
  className?: string;
  linkClassName?: string;
  showLabels?: boolean;
};

export function SocialMediaLinks({
  className = "",
  linkClassName = "",
  showLabels = false
}: SocialMediaLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Stratena on ${link.name}`}
          className={`inline-flex items-center gap-2 rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-primary hover:text-primary ${linkClassName}`}
        >
          {link.icon}
          {showLabels ? <span className="text-sm font-medium">{link.name}</span> : null}
        </a>
      ))}
    </div>
  );
}
