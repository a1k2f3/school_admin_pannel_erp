import React from 'react';
import { 
  Shield, 
  GraduationCap, 
  Users, 
  BookOpen, 
  ClipboardCheck, 
  CreditCard, 
  LayoutDashboard,
  Bell
} from 'lucide-react';
import Link from 'next/link';

// --- Types & Interfaces ---

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface PortalProps {
  title: string;
  desc: string;
  features: string[];
  color: string;
}

interface PricingProps {
  tier: string;
  price: string;
  per: string;
  desc: string;
  features: string[];
  highlight?: boolean;
}

// --- Main Component ---

const SchoolERP: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* --- Navigation --- */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="text-2xl font-bold text-emerald-600 tracking-tight flex items-center gap-2">
          <GraduationCap size={32} />
          <span>EduFlow<span className="text-slate-400 font-light">ERP</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#solutions" className="hover:text-emerald-600 transition">Portals</a>
          <a href="#features" className="hover:text-emerald-600 transition">Academic Modules</a>
          <a href="#pricing" className="hover:text-emerald-600 transition">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="text-slate-600 font-semibold hover:text-emerald-600 transition">
            Log In
          </Link>
          <Link href="/auth/register">
            <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-sm">
              Enroll School
            </button>
          </Link>
        </div>
      </nav>

      {/* --- Hero --- */}
      <header className="px-8 py-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-6 border border-emerald-100">
          <Bell size={14} />
          <span>Trusted by 500+ Institutions Worldwide</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Next-Gen School <br />
          <span className="text-emerald-600">Management System.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed">
          From digital admissions to automated grading. EduFlow simplifies the administrative burden so you can focus on teaching.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg">
            Get Started for Free
          </button>
          <button className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition">
            Book Demo
          </button>
        </div>
      </header>

      {/* --- Solution Portals --- */}
      <section id="solutions" className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">One System, Three Experiences</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <PortalCard 
            title="Administrator"
            desc="Centralized control over finances, staff performance, and regulatory compliance."
            features={["Fee Collection", "Payroll", "Inventory"]}
            color="bg-emerald-600"
          />
          <PortalCard 
            title="Teacher"
            desc="Automated attendance, digital gradebooks, and classroom management tools."
            features={["E-Homework", "Exam Creator", "Reports"]}
            color="bg-blue-600"
          />
          <PortalCard 
            title="Parent & Student"
            desc="Mobile app for tracking progress, paying fees, and checking timetables."
            features={["Daily Diary", "Online Fees", "Results"]}
            color="bg-purple-600"
          />
        </div>
      </section>

      {/* --- Academic Features --- */}
      <section id="features" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureCard 
              icon={<ClipboardCheck size={28} />}
              title="Smart Attendance"
              desc="Automatic SMS alerts to parents for absences."
            />
            <FeatureCard 
              icon={<CreditCard size={28} />}
              title="Fee Automation"
              desc="Direct bank integration and automated receipts."
            />
            <FeatureCard 
              icon={<BookOpen size={28} />}
              title="LMS Integration"
              desc="Upload study materials and host online tests."
            />
            <FeatureCard 
              icon={<LayoutDashboard size={28} />}
              title="Result Analytics"
              desc="Deep insights into student & subject performance."
            />
          </div>
        </div>
      </section>

      {/* --- Pricing --- */}
      <section id="pricing" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pricing Built to Scale</h2>
            <p className="text-slate-500">Choose a plan that fits your student count.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              tier="Basic"
              price="$1.50"
              per="per student / month"
              desc="Essential tools for small schools."
              features={["Admission Management", "Attendance", "Fee Tracking"]}
            />
            <PricingCard 
              tier="Pro"
              price="$3.00"
              per="per student / month"
              highlight={true}
              desc="Everything needed for high growth."
              features={["Mobile App", "LMS Portal", "Library Management", "Inventory"]}
            />
            <PricingCard 
              tier="Custom"
              price="Quote"
              per="Custom solution"
              desc="For large school districts."
              features={["Multi-branch HQ", "Custom Domains", "On-site Training", "Dedicated Support"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Sub-Components (Typed) ---

const PortalCard: React.FC<PortalProps> = ({ title, desc, features, color }) => (
  <div className="group p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl transition duration-300">
    <div className={`w-12 h-1.5 rounded-full mb-6 ${color}`} />
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 mb-8 leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {features.map((f, i) => (
        <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-2 py-1 rounded text-slate-500">
          {f}
        </span>
      ))}
    </div>
  </div>
);

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, desc }) => (
  <div className="flex flex-col gap-4">
    <div className="text-emerald-400">{icon}</div>
    <h4 className="text-lg font-bold">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const PricingCard: React.FC<PricingProps> = ({ tier, price, per, desc, features, highlight }) => (
  <div className={`p-10 rounded-3xl border ${highlight ? 'border-emerald-500 ring-4 ring-emerald-50 shadow-2xl scale-105' : 'border-slate-100'}`}>
    <h3 className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-1">{tier}</h3>
    <div className="flex items-baseline gap-1 mb-4">
      <span className="text-4xl font-black">{price}</span>
      <span className="text-slate-400 text-sm font-medium">{per}</span>
    </div>
    <p className="text-slate-500 text-sm mb-8">{desc}</p>
    <ul className="space-y-4 mb-10">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
          <Shield size={16} className="text-emerald-500" />
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-xl font-bold transition ${highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
      Choose {tier}
    </button>
  </div>
);

export default SchoolERP;