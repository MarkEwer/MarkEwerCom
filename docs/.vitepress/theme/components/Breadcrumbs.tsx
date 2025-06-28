import React from 'react';

interface Crumb {
  text: string;
  link: string;
}

function getBreadcrumbs(pathname: string, pageTitle?: string): Crumb[] {
  const segments = pathname.split('/').filter(Boolean);
  const crumbs: Crumb[] = [
    { text: 'Home', link: '/' },
  ];
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    if (segment === 'blog') {
      crumbs.push({ text: 'Blog', link: '/blog/' });
    } else if (segment === 'category') {
      crumbs.push({ text: 'Categories', link: '/blog/' });
    } else if (segments[index - 1] === 'category') {
      const categoryName = segment.charAt(0).toUpperCase() + segment.slice(1);
      crumbs.push({ text: categoryName, link: currentPath });
    } else if (segments[0] === 'blog' && index === segments.length - 1) {
      crumbs.push({ text: pageTitle || 'Post', link: currentPath });
    } else {
      const segmentName = segment.charAt(0).toUpperCase() + segment.slice(1);
      crumbs.push({ text: segmentName, link: currentPath });
    }
  });
  return crumbs;
}

const Breadcrumbs: React.FC<{ pageTitle?: string }> = ({ pageTitle }) => {
  const [breadcrumbs, setBreadcrumbs] = React.useState<Crumb[]>([]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setBreadcrumbs(getBreadcrumbs(window.location.pathname, pageTitle));
    }
  }, [pageTitle]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="breadcrumbs" style={{ marginBottom: '1.5rem', paddingTop: '1rem' }}>
      <ol className="breadcrumb-list" style={{ display: 'flex', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.875rem' }}>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.link} className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
            {index < breadcrumbs.length - 1 ? (
              <a href={crumb.link} className="breadcrumb-link" style={{ color: 'var(--vp-c-text-2)', textDecoration: 'none', transition: 'color 0.2s' }}>
                {crumb.text}
              </a>
            ) : (
              <span className="breadcrumb-current" style={{ color: 'var(--vp-c-text-1)', fontWeight: 500 }}>
                {crumb.text}
              </span>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="breadcrumb-separator" style={{ margin: '0 0.5rem', color: 'var(--vp-c-text-3)' }}>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
