import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";

export const Route = createFileRoute("/orchestrator")({
  head: () => ({
    meta: [
      { title: "Orchestrator — SYMBIOSIS Mission Control" },
      { name: "description", content: "Autonomy orchestration, policy arbitration and subsystem scheduling for SYMBIOSIS." },
      { property: "og:title", content: "Orchestrator — SYMBIOSIS Mission Control" },
      { property: "og:description", content: "Autonomy orchestration, policy arbitration and subsystem scheduling for SYMBIOSIS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Orchestrator,
});

function Orchestrator() {
  return (
    <div className="font-body-md text-body-md min-h-screen flex bg-surface">
      <SideNav />
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-paper-surface dark:bg-ink-charcoal border-b border-on-surface-variant flex items-center justify-between px-gutter py-4 z-40">
<div className="flex items-center gap-4">

<div className="flex items-center gap-4">
<span className="font-label-caps text-label-caps text-on-surface font-bold uppercase">ARMSTRONG PROTOCOL</span>
<div className="flex items-center gap-2">
<a className="text-on-surface-variant hover:text-lacquer-red transition-all font-label-caps text-label-caps uppercase" href="#">NOMINAL</a>
<a className="text-on-surface-variant hover:text-lacquer-red transition-all font-label-caps text-label-caps uppercase" href="#">STABLE</a>
<a className="text-lacquer-red font-bold transition-all font-label-caps text-label-caps uppercase opacity-80" href="#">ACTIVE</a>
</div>
</div>
</div>
<div className="flex items-center gap-6">

<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-lacquer-red transition-all">
<span className="material-symbols-outlined">notifications_active</span>
</button>
<button className="text-on-surface-variant hover:text-lacquer-red transition-all">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>

<button className="px-4 py-1.5 border border-lacquer-red text-lacquer-red font-label-caps text-label-caps rounded uppercase hover:bg-lacquer-red hover:text-white transition-colors duration-150">
                EMERGENCY STOP
            </button>
</div>
</header>

<main className="ml-64 mt-16 w-full p-margin-desktop flex-1 flex flex-col bg-surface">
<div className="grid grid-cols-12 gap-gutter h-full max-w-container-max mx-auto w-full">

<div className="col-span-12 lg:col-span-8 flex flex-col gap-gutter">

<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter relative overflow-hidden flex flex-col shadow-sm">
<header className="flex justify-between items-center mb-6">
<h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Multi-Agent Voting Matrix</h2>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">CYC: 84992.A</span>
</header>
<div className="flex flex-col flex-1 items-center justify-center relative">

<div className="grid grid-cols-3 gap-8 w-full mb-8 relative z-10">

<div className="flex flex-col items-center gap-3">
<div className="text-center">
<div className="font-label-caps text-label-caps text-on-surface">Perception</div>
<div className="font-telemetry-data text-telemetry-data text-on-surface-variant text-[12px]">Weight: 30%</div>
</div>
<div className="w-full bg-surface-container px-4 py-3 border border-outline-variant rounded-lg flex justify-center items-center shadow-sm">
<span className="font-telemetry-data text-telemetry-data text-moss-accent">PROCEED</span>
</div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="text-center">
<div className="font-label-caps text-label-caps text-on-surface">Cognition</div>
<div className="font-telemetry-data text-telemetry-data text-on-surface-variant text-[12px]">Weight: 40%</div>
</div>
<div className="w-full bg-surface-container px-4 py-3 border-2 border-lacquer-red rounded-lg flex justify-center items-center shadow-sm">
<span className="font-telemetry-data text-telemetry-data text-lacquer-red font-bold">HOLD</span>
</div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="text-center">
<div className="font-label-caps text-label-caps text-on-surface">Action</div>
<div className="font-telemetry-data text-telemetry-data text-on-surface-variant text-[12px]">Weight: 30%</div>
</div>
<div className="w-full bg-surface-container px-4 py-3 border border-outline-variant rounded-lg flex justify-center items-center shadow-sm">
<span className="font-telemetry-data text-telemetry-data text-on-surface">RECONFIGURE</span>
</div>
</div>
</div>

<div className="flex justify-between w-3/4 mb-4 opacity-50 relative z-0">
<svg className="w-full h-8" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 100 100">
<path className="text-outline-variant" d="M 16 0 C 16 50, 50 50, 50 100" />
<path className="text-lacquer-red" d="M 50 0 L 50 100" strokeDasharray="4" strokeWidth="2" />
<path className="text-outline-variant" d="M 84 0 C 84 50, 50 50, 50 100" />
</svg>
</div>

<div className="w-2/3 bg-surface-container-high border-2 border-moss-accent rounded-lg p-6 flex flex-col items-center justify-center relative z-10 shadow-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Final Consensus</span>
<span className="font-headline-md text-headline-md text-moss-accent tracking-wider font-bold">PROCEED_SLOW</span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter flex flex-col shadow-sm">
<header className="flex justify-between items-center mb-8">
<h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Autonomy Ladder Context</h2>
<span className="px-2 py-1 bg-surface-container-low rounded border border-outline-variant font-telemetry-data text-[12px] text-on-surface-variant">REQ_LVL: 2</span>
</header>

<div className="flex items-center justify-between w-full mb-10 px-4 relative">

<div className="absolute top-1/2 left-8 right-8 h-px bg-outline-variant -z-10"></div>

<div className="flex flex-col items-center gap-2 bg-surface-container-lowest px-2">
<div className="w-3 h-3 rounded-full bg-surface-container-low border border-outline-variant"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">AUTONOMOUS</span>
</div>

<div className="flex flex-col items-center gap-2 bg-surface-container-lowest px-2 scale-110 transform transition-transform">
<div className="w-4 h-4 rounded-full bg-lacquer-red border-2 border-white shadow-sm animate-pulse"></div>
<span className="font-label-caps text-label-caps text-lacquer-red font-bold">ACKNOWLEDGE</span>
</div>

<div className="flex flex-col items-center gap-2 bg-surface-container-lowest px-2">
<div className="w-3 h-3 rounded-full bg-surface-container-low border border-outline-variant"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">MODIFY</span>
</div>

<div className="flex flex-col items-center gap-2 bg-surface-container-lowest px-2">
<div className="w-3 h-3 rounded-full bg-surface-container-low border border-outline-variant"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">REPLACE</span>
</div>
</div>

<div className="flex flex-col gap-3 border-t border-outline-variant pt-6">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Escalation Triggers</span>
<div className="flex flex-wrap gap-3">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lacquer-red bg-lacquer-red/10">
<span className="material-symbols-outlined text-[14px] text-lacquer-red">warning</span>
<span className="font-telemetry-data text-[13px] text-lacquer-red">out-of-distribution input</span>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-error bg-error/10">
<span className="material-symbols-outlined text-[14px] text-error">science</span>
<span className="font-telemetry-data text-[13px] text-error">physics cross-check failed</span>
</div>
</div>
</div>
</section>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter h-full">
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter flex-1 flex flex-col shadow-sm">
<header className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant">
<span className="material-symbols-outlined text-lacquer-red" style={{fontVariationSettings: "'FILL' 1"}}>gavel</span>
<h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">Armstrong Protocol</h2>
</header>

<div className="flex flex-col gap-3 mb-8">
<button className="w-full flex flex-col items-start p-4 rounded-lg border border-outline-variant bg-surface-container-low hover:border-moss-accent hover:bg-surface-container-high transition-all duration-150 group text-left">
<span className="font-label-caps text-label-caps text-on-surface group-hover:text-moss-accent transition-colors">AUTONOMOUS</span>
<span className="font-telemetry-data text-[12px] text-on-surface-variant mt-1">System holds full operational control.</span>
</button>
<button className="w-full flex flex-col items-start p-4 rounded-lg border-2 border-lacquer-red bg-lacquer-red/5 hover:bg-lacquer-red/10 transition-all duration-150 group text-left relative overflow-hidden">
<span className="font-label-caps text-label-caps text-lacquer-red relative z-10 flex items-center justify-between w-full font-bold">
                                ACKNOWLEDGE
                                <span className="material-symbols-outlined text-[16px] animate-bounce">arrow_forward</span>
</span>
<span className="font-telemetry-data text-[12px] text-on-surface mt-1 relative z-10">Operator must confirm current plan.</span>
</button>
<button className="w-full flex flex-col items-start p-4 rounded-lg border border-outline-variant bg-surface-container-low hover:border-moss-accent hover:bg-surface-container-high transition-all duration-150 group text-left">
<span className="font-label-caps text-label-caps text-on-surface group-hover:text-moss-accent transition-colors">MODIFY</span>
<span className="font-telemetry-data text-[12px] text-on-surface-variant mt-1">Operator adjusts plan parameters.</span>
</button>
<button className="w-full flex flex-col items-start p-4 rounded-lg border border-outline-variant bg-surface-container-low hover:border-error hover:bg-surface-container-high transition-all duration-150 group text-left">
<span className="font-label-caps text-label-caps text-on-surface group-hover:text-error transition-colors">REPLACE</span>
<span className="font-telemetry-data text-[12px] text-on-surface-variant mt-1">Operator assumes manual control.</span>
</button>
</div>

<div className="mt-auto pt-6 border-t border-outline-variant">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">Recent Overrides</h3>
<div className="flex flex-col gap-2 font-telemetry-data text-[13px] text-on-surface-variant">
<div className="flex justify-between items-center py-1 border-b border-outline-variant">
<span><span className="text-on-surface">14:02:41.09</span> - MANUAL_ACK</span>
<span className="text-moss-accent font-bold">SUCCESS</span>
</div>
<div className="flex justify-between items-center py-1 border-b border-outline-variant">
<span><span className="text-on-surface">11:15:22.40</span> - PARAM_MOD</span>
<span className="text-moss-accent font-bold">SUCCESS</span>
</div>
<div className="flex justify-between items-center py-1 border-b border-outline-variant">
<span><span className="text-on-surface">09:44:10.12</span> - FULL_REPLACE</span>
<span className="text-lacquer-red font-bold">RESOLVED</span>
</div>
<div className="flex justify-between items-center py-1 border-b border-outline-variant">
<span><span className="text-on-surface">04:12:05.99</span> - MANUAL_ACK</span>
<span className="text-moss-accent font-bold">SUCCESS</span>
</div>
<div className="flex justify-between items-center py-1">
<span><span className="text-on-surface">01:59:30.01</span> - MANUAL_ACK</span>
<span className="text-moss-accent font-bold">SUCCESS</span>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
    </div>
  );
}
