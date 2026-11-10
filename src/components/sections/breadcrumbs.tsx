import Link from 'next/link';

export type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: ReadonlyArray<BreadcrumbItem>;
  /** Light text on dark hero backgrounds */
  tone?: 'light' | 'dark';
  className?: string;
};

/**
 * Visible breadcrumb trail. Keep in sync with BreadcrumbList JSON-LD on the page.
 */
export default function Breadcrumbs({
  items,
  tone = 'dark',
  className = '',
}: BreadcrumbsProps) {
  if (items.length < 2) return null;

  const isLight = tone === 'light';
  const listClass = isLight ? 'text-blue-100' : 'text-gray-500';
  const currentClass = isLight
    ? 'text-white font-medium'
    : 'text-[#0A2540] font-medium';
  const linkClass = isLight
    ? 'hover:text-white underline-offset-2 hover:underline'
    : 'hover:text-[#1E6BB8] underline-offset-2 hover:underline';

  return (
    <nav aria-label='Breadcrumb' className={className}>
      <ol
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${listClass}`}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.href}-${item.name}`} className='flex items-center gap-2'>
              {index > 0 ? (
                <span aria-hidden className='opacity-60'>
                  /
                </span>
              ) : null}
              {isLast ? (
                <span className={currentClass} aria-current='page'>
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className={linkClass}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
