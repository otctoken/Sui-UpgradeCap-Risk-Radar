import React from 'react';

import { twMerge } from 'tailwind-merge';

interface RiskBadgeProps {
  label: string;
  variant: 'success' | 'warning' | 'error' | 'neutral' | 'info';
  className?: string;
  icon?: React.ReactNode;
}

const RiskBadge: React.FC<RiskBadgeProps> = ({ label, variant, className, icon }) => {
  const styles = {
    // Dark mode compatible styles: transparent backgrounds with bright text/borders
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    error: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    neutral: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  };

  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border select-none',
        styles[variant],
        className
      )}
    >
      {/* Use flex to align icon and text perfectly. Removed fixed w-3 h-3 to allow sizing via icon prop. */}
      {icon && <span className="flex shrink-0 items-center justify-center">{icon}</span>}
      <span className="leading-normal">{label}</span>
    </span>
  );
};

export default RiskBadge;