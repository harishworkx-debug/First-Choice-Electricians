import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-slate-600" />
            {item.path ? (
              <Link to={item.path} className="hover:text-amber-400 transition-colors">{item.name}</Link>
            ) : (
              <span className="text-slate-300">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
