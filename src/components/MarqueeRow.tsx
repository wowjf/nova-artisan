import type { ReactNode } from 'react';

export function MarqueeRow({
  children,
  direction = 'left',
  className = '',
}: {
  children: ReactNode;
  direction?: 'left' | 'right';
  className?: string;
}) {
  const animation =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div className={`flex w-max ${animation}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
