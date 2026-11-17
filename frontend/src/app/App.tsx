import { useEffect, useState } from 'react';
import {
  ArrowRight, Bell, Building2, ChevronDown, ChevronRight, CircleHelp,
  House, Layers3, LayoutGrid, ListChecks, Menu, Network,
  Search, ShieldCheck, Sparkles, Sun, Moon, Users,
  ChartNoAxesColumnIncreasing, Binoculars, BedDouble,
} from 'lucide-react';
import '../styles/globals.css';

type Theme = 'light' | 'dark';

const features = [
  { icon: Layers3, title: 'Multi-supplier', subtitle: 'Unification' },
  { icon: Network, title: 'AI Matching', subtitle: '& Mapping' },
  { icon: ChartNoAxesColumnIncreasing, title: 'Best Offer', subtitle: 'Selection' },
  { icon: Layers3, title: 'Listing Ranking', subtitle: '& Conversion' },
];

const stats = [
  { icon: Building2, value: '4,32,781', label: 'Total Inventory', growth: '+3.9%', tone: 'blue' },
  { icon: BedDouble, value: '3,18,420', label: 'Hotels', growth: '+4.2%', tone: 'violet' },
  { icon: Binoculars, value: '1,14,361', label: 'Sightseeing', growth: '+3.1%', tone: 'cyan' },
  { icon: Layers3, value: '92', label: 'Active Suppliers', growth: '+8.2%', tone: 'slate' },
];

const navigation = [
  { label: 'Home', icon: House, active: true },
  { label: 'Platform', icon: LayoutGrid, expandable: true },
  { label: 'Solutions', icon: ShieldCheck, expandable: true },
  { label: 'Resources', icon: ListChecks, expandable: true },
  { label: 'Company', icon: Users, expandable: true },
];

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Copia AI home">
      <span className="brand-mark" aria-hidden="true"><i /><i /></span>
      <span className="brand-name">Copia AI</span>
    </a>
  );
}

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <button className={`mobile-scrim ${open ? 'is-visible' : ''}`} onClick={onClose} aria-label="Close navigation" />
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="sidebar-brand"><Brand /><p>Unifying Travel Inventory<br />Through AI Intelligence</p></div>
        <nav className="side-nav" aria-label="Main navigation">
          {navigation.map(({ label, icon: Icon, active, expandable }) => (
            <a key={label} href={label === 'Home' ? '/' : `#${label.toLowerCase()}`} className={`nav-item ${active ? 'active' : ''}`}>
              <Icon size={19} strokeWidth={2.15} /><span>{label}</span>
              {expandable && <ChevronRight className="nav-chevron" size={16} />}
            </a>
          ))}
        </nav>
        <div className="sidebar-note"><span className="note-icon"><Sparkles size={16} /></span><span>One trusted view of<br />your travel inventory.</span></div>
      </aside>
    </>
  );
}

function Topbar({ theme, onToggle, onMenu }: { theme: Theme; onToggle: () => void; onMenu: () => void }) {
  return (
    <header className="topbar">
      <button className="mobile-menu icon-control" onClick={onMenu} aria-label="Open navigation"><Menu size={20} /></button>
      <label className="global-search">
        <Search size={19} />
        <input aria-label="Search" placeholder="Search hotels, suppliers, offers..." />
        <kbd>⌘ K</kbd>
      </label>
      <div className="topbar-actions">
        <button className="workspace-control"><Building2 size={17} /><span>TBO Workspace</span><ChevronDown size={15} /></button>
        <button className="icon-control notification-control" aria-label="Notifications"><Bell size={20} /><span className="notification-dot" /></button>
        <button className="icon-control help-control" aria-label="Help"><CircleHelp size={20} /></button>
        <span className="topbar-divider" />
        <button className="theme-toggle" onClick={onToggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
          <span className="toggle-icon">{theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}</span>
          <span className="toggle-label">{theme === 'light' ? 'Dark' : 'Light'} mode</span>
          <span className="toggle-track"><span className="toggle-thumb" /></span>
        </button>
      </div>
    </header>
  );
}

function HotelVisual() {
  return (
    <div className="visual-stage" aria-label="Illustration of connected hotel inventory">
      <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
      <div className="orbit-node node-one"><Building2 size={28} /></div>
      <div className="orbit-node node-two"><Building2 size={28} /></div>
      <div className="orbit-node node-three"><Building2 size={28} /></div>
      <div className="orbit-node node-four"><Building2 size={28} /></div>
      <div className="orbit-node node-five"><Building2 size={28} /></div>
      <div className="hotel-card">
        <div className="hotel-card-top"><span /><span /><span /></div>
        <div className="hotel-card-content">
          <div className="hotel-photo"><div className="hotel-sky" /><div className="hotel-building"><i /><i /><i /><i /><i /><i /></div><div className="hotel-palm palm-one" /><div className="hotel-palm palm-two" /></div>
          <div className="hotel-info"><strong>Grand View Hotel</strong><div className="hotel-stars">★★★★★</div><span className="skeleton-line long" /><span className="skeleton-line short" /><span className="hotel-action" /></div>
        </div>
        <div className="hotel-card-foot"><span /><span /></div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="eyebrow"><span className="mini-brand-mark"><i /><i /></span><span>Copia AI</span></div>
        <h1>Supplier &amp; Hotel Data<br className="desktop-break" /> Intelligence Platform</h1>
        <p className="hero-description">Unify, match and enrich multi-supplier hotel and sightseeing inventory, select the best offers and power higher-converting listings with trusted, AI-driven data.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/request-access">Request access <ArrowRight size={18} /></a>
          <a className="button button-secondary" href="/login">Log in</a>
        </div>
        <div className="feature-strip">
          {features.map(({ icon: Icon, title, subtitle }) => (
            <div className="feature-item" key={title}><span className="feature-icon"><Icon size={23} /></span><span><strong>{title}</strong><small>{subtitle}</small></span></div>
          ))}
        </div>
      </div>
      <HotelVisual />
    </section>
  );
}

function InventoryStats() {
  return (
    <section className="stats-grid" aria-label="Platform overview">
      {stats.map(({ icon: Icon, value, label, growth, tone }) => (
        <article className={`stat-card tone-${tone}`} key={label}>
          <span className="stat-icon"><Icon size={31} strokeWidth={2} /></span>
          <div className="stat-content"><strong className="stat-value">{value}</strong><span className="stat-label">{label}</span><span className="stat-growth">↑ &nbsp;{growth}</span></div>
        </article>
      ))}
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('copia-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('copia-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light');

  return (
    <div className={`copia-app theme-${theme}`}>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="main-shell">
        <Topbar theme={theme} onToggle={toggleTheme} onMenu={() => setMenuOpen(true)} />
        <div className="page-content">
          <Hero />
          <InventoryStats />
          <footer className="page-footer"><span>© 2026 Copia AI</span><span>Trusted intelligence for travel inventory</span></footer>
        </div>
      </main>
    </div>
  );
}
