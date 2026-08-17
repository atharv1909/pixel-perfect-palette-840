import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";

export const Route = createFileRoute("/action")({
  head: () => ({
    meta: [
      { title: "Action — SYMBIOSIS Mission Control" },
      { name: "description", content: "Thruster commands, actuation limits and executed maneuvers for the SYMBIOSIS vehicle." },
      { property: "og:title", content: "Action — SYMBIOSIS Mission Control" },
      { property: "og:description", content: "Thruster commands, actuation limits and executed maneuvers for the SYMBIOSIS vehicle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Action,
});

function Action() {
  return (
    <div className="bg-paper-surface text-ink-charcoal h-screen w-screen overflow-hidden flex font-body-md">
      <SideNav />
      <div className="flex-1 ml-64 flex flex-col h-full bg-paper-surface pt-16">

<header className="fixed top-0 right-0 w-[calc(100%-16rem)] border-b border-on-surface-variant bg-paper-surface flex items-center justify-between px-gutter py-4 h-16 z-40">
<div className="flex items-center gap-6">
<h2 className="font-label-caps text-label-caps text-on-surface font-bold tracking-tight">ARMSTRONG PROTOCOL</h2>
<div className="flex items-center gap-4 h-full pt-1">
<a className="flex items-center text-on-surface-variant font-label-caps hover:text-lacquer-red transition-all" href="#">NOMINAL</a>
<a className="flex items-center text-on-surface-variant font-label-caps hover:text-lacquer-red transition-all" href="#">STABLE</a>
<a className="flex items-center text-lacquer-red font-label-caps font-bold opacity-80" href="#">ACTIVE</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-lacquer-red font-label-caps hover:opacity-80 transition-opacity">
EMERGENCY STOP
</button>
<button className="text-on-surface-variant hover:text-lacquer-red transition-colors relative">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="text-on-surface-variant hover:text-lacquer-red transition-colors">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-gutter flex flex-col gap-gutter">

<div className="flex items-center gap-6 border-b border-on-surface-variant pb-3">
<button className="text-lacquer-red font-label-caps text-label-caps border-b-2 border-lacquer-red pb-3 -mb-[13px]">Tactical 1m</button>
<button className="text-on-surface-variant font-label-caps text-label-caps pb-3 -mb-[13px] hover:text-ink-charcoal transition-colors">Operational 10m</button>
<button className="text-on-surface-variant font-label-caps text-label-caps pb-3 -mb-[13px] hover:text-ink-charcoal transition-colors">Strategic 1h</button>
</div>

<div className="grid grid-cols-12 gap-gutter flex-1 min-h-[500px]">

<div className="col-span-12 xl:col-span-8 flex flex-col gap-4">
<div className="bg-surface-container-low rounded-xl border border-on-surface-variant flex flex-col h-full overflow-hidden p-gutter">
<div className="flex justify-between items-center mb-4">
<h3 className="font-headline-md text-headline-md text-ink-charcoal">Candidate Action Evaluation</h3>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">T+00:42:15</span>
</div>
<div className="flex-1 overflow-auto rounded-lg border border-on-surface-variant bg-paper-surface">
<table className="w-full text-left text-body-md font-body-md">
<thead className="bg-surface-container border-b border-on-surface-variant sticky top-0">
<tr>
<th className="px-4 py-3 font-semibold text-on-surface-variant text-label-caps font-label-caps w-[220px]">Action Directive</th>
<th className="px-4 py-3 font-semibold text-on-surface-variant text-label-caps font-label-caps">Util. Score</th>
<th className="px-4 py-3 font-semibold text-on-surface-variant text-label-caps font-label-caps">Mean P(Col)</th>
<th className="px-4 py-3 font-semibold text-on-surface-variant text-label-caps font-label-caps">99% Conf. Bound</th>
<th className="px-4 py-3 font-semibold text-on-surface-variant text-label-caps font-label-caps">Semantic Assessment</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-dim">

<tr className="bg-surface-container-high/50 relative">
<td className="px-4 py-3 relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-moss-accent"></div>
<span className="font-telemetry-data text-telemetry-data text-moss-accent font-bold">PROCEED_NORMAL</span>
<div className="text-[10px] text-moss-accent/80 mt-1 uppercase tracking-wider font-semibold">Recommended</div>
</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-ink-charcoal">0.98</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-ink-charcoal">0.04%</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-moss-accent" data-icon="shield">shield</span>
<span className="font-telemetry-data text-telemetry-data font-bold text-ink-charcoal">1.2%</span>
</div>
</td>
<td className="px-4 py-3 text-on-surface-variant text-[13px] leading-tight">Collision probability will not exceed 1.2%, with 99% confidence. Nominal approach path maintained.</td>
</tr>

<tr className="hover:bg-surface-container transition-colors">
<td className="px-4 py-3"><span className="font-telemetry-data text-telemetry-data text-on-surface-variant">PROCEED_SLOW</span></td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.82</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.02%</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.8%</td>
<td className="px-4 py-3 text-on-surface-variant/70 text-[13px] leading-tight">Increases mission duration by 14m. Slightly lowers P(Col).</td>
</tr>
<tr className="hover:bg-surface-container transition-colors">
<td className="px-4 py-3"><span className="font-telemetry-data text-telemetry-data text-on-surface-variant">HOLD</span></td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.65</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.01%</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.3%</td>
<td className="px-4 py-3 text-on-surface-variant/70 text-[13px] leading-tight">Station keeping consumes 4% propellant reserve per minute.</td>
</tr>
<tr className="hover:bg-surface-container transition-colors">
<td className="px-4 py-3"><span className="font-telemetry-data text-telemetry-data text-on-surface-variant">RECONFIGURE_POWER</span></td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.40</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.12%</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-error">3.4%</td>
<td className="px-4 py-3 text-on-surface-variant/70 text-[13px] leading-tight">Diverts non-essential power to maneuvering thrusters.</td>
</tr>
<tr className="hover:bg-surface-container transition-colors">
<td className="px-4 py-3"><span className="font-telemetry-data text-telemetry-data text-on-surface-variant">ISOLATE_MODULE</span></td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.25</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.05%</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">1.5%</td>
<td className="px-4 py-3 text-on-surface-variant/70 text-[13px] leading-tight">Seals forward bulkhead. Degrades sensor fidelity.</td>
</tr>
<tr className="hover:bg-surface-container transition-colors">
<td className="px-4 py-3"><span className="font-telemetry-data text-telemetry-data text-on-surface-variant">ABORT</span></td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">-0.80</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.00%</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">0.0%</td>
<td className="px-4 py-3 text-on-surface-variant/70 text-[13px] leading-tight">Initiates full retreat trajectory. Fails mission objectives.</td>
</tr>
<tr className="hover:bg-surface-container transition-colors">
<td className="px-4 py-3"><span className="font-telemetry-data text-telemetry-data text-error">EMERGENCY_VENT</span></td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-error">-1.00</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">--</td>
<td className="px-4 py-3 font-telemetry-data text-telemetry-data text-on-surface-variant">--</td>
<td className="px-4 py-3 text-error/70 text-[13px] leading-tight">Depressurizes cabin to provide emergency impulse. Fatal to crew.</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-4 flex justify-end gap-3">
<button className="px-4 py-2 border border-lacquer-red text-lacquer-red rounded bg-transparent hover:bg-lacquer-red/10 transition-colors font-body-md text-[14px]">Simulate Alternate</button>
<button className="px-6 py-2 bg-lacquer-red text-paper-surface rounded hover:bg-primary-container transition-colors font-body-md font-semibold text-[14px]">Execute Recommended</button>
</div>
</div>
</div>

<div className="col-span-12 xl:col-span-4 flex flex-col gap-gutter h-full">

<div className="bg-surface-container-low rounded-xl border border-on-surface-variant p-gutter flex-1 min-h-[300px] flex flex-col relative overflow-hidden">
<h3 className="font-headline-md text-headline-md text-ink-charcoal z-10 mb-2">Ensemble Trajectory</h3>
<div className="font-telemetry-data text-telemetry-data text-on-surface-variant z-10 mb-4">Monte Carlo N=100 (1m horizon)</div>

<div className="flex-1 relative border-l border-b border-on-surface-variant ml-6 mb-6">

<div className="absolute -left-6 top-0 text-[10px] text-on-surface-variant font-telemetry-data">+5m</div>
<div className="absolute -left-6 bottom-0 text-[10px] text-on-surface-variant font-telemetry-data">-5m</div>
<div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[10px] text-on-surface-variant font-telemetry-data">0</div>

<div className="absolute -bottom-5 right-0 text-[10px] text-on-surface-variant font-telemetry-data">60s</div>
<div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant font-telemetry-data">30s</div>

<div className="absolute left-0 top-[20%] bottom-[20%] w-full bg-moss-accent/5 border-y border-moss-accent/20 border-dashed"></div>
<div className="absolute left-2 top-[22%] text-[10px] text-moss-accent/80 font-telemetry-data font-semibold">Safe Corridor (99.9%)</div>

<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
<defs>
<lineargradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stopColor="#5C6300" stopOpacity="0.8" />
<stop offset="100%" stopColor="#5C6300" stopOpacity="0.1" />
</lineargradient>
</defs>
<path d="M 0,150 Q 150,150 300,10" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,30" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,50" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,70" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,90" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,110" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,130" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />

<path d="M 0,150 Q 150,150 300,140" fill="none" stroke="#5C6300" strokeWidth="2" />
<path d="M 0,150 Q 150,150 300,160" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,180" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,200" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,230" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,260" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
<path d="M 0,150 Q 150,150 300,290" fill="none" stroke="url(#lineGrad)" strokeWidth="0.5" />
</svg>
</div>
</div>

<div className="bg-surface-container-low rounded-xl border border-on-surface-variant p-gutter flex-1 min-h-[250px] flex flex-col">
<h3 className="font-headline-md text-headline-md text-ink-charcoal mb-4">Thruster Allocation</h3>
<div className="flex-1 relative flex items-center justify-center">

<div className="relative w-[120px] h-[180px]">

<div className="absolute inset-0 bg-surface-container border border-on-surface-variant rounded-sm flex items-center justify-center">
<div className="w-[80px] h-[140px] border border-on-surface-variant rounded-sm bg-surface-container-high relative">

<div className="absolute -left-[40px] top-[40px] w-[30px] h-[60px] border border-on-surface-variant bg-surface-container"></div>
<div className="absolute -right-[40px] top-[40px] w-[30px] h-[60px] border border-on-surface-variant bg-surface-container"></div>

<div className="absolute inset-4 border border-on-surface-variant/50 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">adjust</span>
</div>
</div>
</div>


<div className="absolute -left-[20px] top-[10px] flex flex-col items-end">
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">F1</span>
<div className="flex items-center gap-1">
<span className="font-telemetry-data text-telemetry-data text-moss-accent font-bold">0.2N</span>
<span className="material-symbols-outlined text-[14px] text-moss-accent rotate-[135deg]">arrow_forward</span>
</div>
</div>

<div className="absolute -right-[20px] top-[10px] flex flex-col items-start">
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">F2</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant/50 rotate-[45deg]">arrow_forward</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant/50">0.0N</span>
</div>
</div>

<div className="absolute -left-[30px] bottom-[20px] flex flex-col items-end">
<div className="flex items-center gap-1">
<span className="font-telemetry-data text-telemetry-data text-moss-accent font-bold">12.5N</span>
<span className="material-symbols-outlined text-[16px] text-moss-accent -rotate-45">double_arrow</span>
</div>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">A1 (Main)</span>
</div>

<div className="absolute -right-[30px] bottom-[20px] flex flex-col items-start">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-moss-accent -rotate-[135deg] scale-x-[-1]">double_arrow</span>
<span className="font-telemetry-data text-telemetry-data text-moss-accent font-bold">12.5N</span>
</div>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">A2 (Main)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
