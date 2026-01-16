import React from 'react';
import { Lock, Users, Shield, Clock, Activity, FileCode } from 'lucide-react';

const ScoreGuide = () => {
  const Section = ({
    icon: Icon,
    title,
    maxScore,
    description,
    children
  }: {
    icon: any,
    title: string,
    maxScore: number,
    description: string,
    children?: React.ReactNode
  }) => (
    <section className="mb-10">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700 text-sui-blue shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xl font-bold text-slate-100">{title}</h3>
            <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-300">Max {maxScore} pts</span>
          </div>
          <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="ml-0 md:ml-16 grid gap-2">
        {children}
      </div>
    </section>
  );

  const ScoreItem = ({ label, score, variant = 'neutral' }: { label: string, score: number, variant?: 'good' | 'mid' | 'bad' | 'neutral' }) => {
    const colors = {
      good: 'text-emerald-400',
      mid: 'text-amber-400',
      bad: 'text-rose-400',
      neutral: 'text-slate-200'
    };
    return (
      <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded-lg border border-slate-800/60 hover:border-slate-700 transition-colors">
        <span className="text-slate-300 text-sm md:text-base">{label}</span>
        <span className={`font-mono font-bold ${colors[variant]}`}>{score} pts</span>
      </div>
    );
  };

  return (
    <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 p-6 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Risk Scoring Methodology</h2>
          <p className="text-slate-400 text-lg">
            Our safety score is a weighted aggregate of 6 security dimensions, designed to measure the <span className="text-white font-medium">centralization risk</span> and <span className="text-white font-medium">upgrade authority</span> of a Sui protocol.
          </p>
          <div className="mt-4 pt-2 border-t border-slate-800">
            <a
              href="https://github.com/otctoken/Sui-Move-contract-upgrade-delayed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-sui-blue hover:text-blue-300 transition-colors"
            >
              <span>🔗</span>
              <span>Delayed Upgrade Demo</span>
            </a>
          </div>
        </div>

        <div className="space-y-2">
          {/* 1. UpgradeCap */}
          <Section
            icon={Lock}
            title="1. Upgrade Capability"
            maxScore={20}
            description="Determines how much the code can be changed by the owner. Immutable contracts are the safest."
          >
            <ScoreItem label="Immutable" score={100} variant="good" />
            <ScoreItem label="Dependency-only" score={20} variant="mid" />
            <ScoreItem label="Additive" score={10} variant="mid" />
            <ScoreItem label="Compatible" score={0} variant="bad" />
          </Section>

          {/* 2. Controller */}
          <Section
            icon={Users}
            title="2. Ownership Structure"
            maxScore={10}
            description="Who holds the keys to the upgrade capability? Distributed ownership reduces the risk 
            of malicious upgrades. However, we assigned a score of 10 because even with a MultiSig or DAO, 
            there is a risk that a single individual could control multiple keys."
          >
            <ScoreItem label="MultiSig Wallet / DAO " score={10} variant="mid" />
            <ScoreItem label="Single Private Key (Risky)" score={0} variant="bad" />
          </Section>

          {/* 3. Upgrade Policy */}
          <Section
            icon={Shield}
            title="3. Policy Enforcement"
            maxScore={10}
            description="Does the protocol use a custom policy object to enforce upgrade rules on-chain?"
          >
            <ScoreItem label="Custom Policy Present" score={10} variant="good" />
            <ScoreItem label="No Policy Enforced" score={0} variant="neutral" />
          </Section>

          {/* 4. Delayed Upgrade */}
          <Section
            icon={Clock}
            title="4. Time Delay"
            maxScore={55}
            description="Is there a mandatory upgrade delay? This allows time for users to review changes or withdraw their assets. We give this a score of 55 because even if the upgrade authority is compromised, the time buffer allows users to identify risks and react."
          >
            <ScoreItem label="> 24 Hours Delay" score={55} variant="good" />
            <ScoreItem label="12 - 24 Hours Delay" score={20} variant="mid" />
            <ScoreItem label="< 12 Hours Delay" score={5} variant="mid" />
            <ScoreItem label="Instant Upgrade (No Delay)" score={0} variant="bad" />
          </Section>

          {/* 5. Stability */}
          <Section
            icon={Activity}
            title="5. Protocol Stability"
            maxScore={5}
            description="Frequent upgrades can introduce bugs. Mature, stable protocols are generally safer."
          >
            <ScoreItem label="Version count ≤ 50" score={5} variant="good" />
            <ScoreItem label="Version count > 50 (Frequent changes)" score={0} variant="neutral" />
          </Section>

          {/* 6. Source Code */}
          <Section
            icon={FileCode}
            title="6. Transparency"
            maxScore={0}
            description="Is the Move source code verified and publicly accessible on a block explorer?"
          >
            <ScoreItem label="If unverified, the total score is 0 (Highest Risk)." score={0} variant="bad" />
          </Section>
        </div>
      </div>
      <p className="h-10"></p>
      <div className="text-center mb-12">
        <p className="text-slate-600 text-sm">
          Continuously updating. Please contact TG if there are any false alarms!
        </p>
      </div>
    </div>
  )
}

export default ScoreGuide;