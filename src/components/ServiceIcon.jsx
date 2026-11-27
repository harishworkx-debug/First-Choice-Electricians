import {
  Wrench,
  Zap,
  Lightbulb,
  AlertTriangle,
  ShieldCheck,
  Home,
  Plug,
  Fan,
  BatteryCharging,
  Cable,
  Search,
} from 'lucide-react';

const map = {
  Wrench,
  Zap,
  Lightbulb,
  AlertTriangle,
  ShieldCheck,
  Home,
  Plug,
  Fan,
  BatteryCharging,
  Cable,
  Search,
};

export function ServiceIcon({ name, className }) {
  const C = map[name] || Zap;
  return <C className={className} />;
}
