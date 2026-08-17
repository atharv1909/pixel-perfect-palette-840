import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";

export const Route = createFileRoute("/cognition")({
  head: () => ({
    meta: [
      { title: "Cognition — SYMBIOSIS Mission Control" },
      { name: "description", content: "Decision reasoning, risk scoring and plan selection inside the SYMBIOSIS cognition engine." },
      { property: "og:title", content: "Cognition — SYMBIOSIS Mission Control" },
      { property: "og:description", content: "Decision reasoning, risk scoring and plan selection inside the SYMBIOSIS cognition engine." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cognition,
});

function Cognition() {
  return (
    <div className="bg-surface text-on-surface h-screen w-screen overflow-hidden flex font-body-md text-body-md">
      <SideNav />
      <div className="flex-1 ml-64 flex flex-col h-full relative">

<header className="bg-paper-surface dark:bg-ink-charcoal fixed top-0 right-0 w-[calc(100%-16rem)] border-b border-on-surface-variant flex items-center justify-between px-gutter py-4 h-16 z-10">
<div className="flex items-center gap-4">
<span className="font-label-caps text-label-caps text-on-surface font-bold">ARMSTRONG PROTOCOL</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center gap-6 mr-4">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-lacquer-red transition-all" href="#">NOMINAL</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-lacquer-red transition-all" href="#">STABLE</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-lacquer-red transition-all" href="#">ACTIVE</a>
</div>
<button className="font-label-caps text-label-caps bg-transparent border border-lacquer-red text-lacquer-red px-4 py-1.5 rounded opacity-80 hover:opacity-100 transition-opacity">
                    EMERGENCY STOP
                </button>
<div className="flex items-center gap-3">
<button className="text-on-surface-variant hover:text-lacquer-red transition-colors duration-150">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
</button>
<button className="text-on-surface-variant hover:text-lacquer-red transition-colors duration-150">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>

<main className="flex-1 mt-16 p-margin-desktop overflow-y-auto bg-surface">

<div className="bg-surface-container-low border border-error/50 rounded-xl p-gutter mb-gutter relative overflow-hidden">
<div className="absolute inset-0 bg-error/5"></div>
<div className="relative flex items-start gap-4">
<div className="text-error pulse-critical pt-1">
<span className="material-symbols-outlined text-headline-lg" data-icon="account_tree">account_tree</span>
</div>
<div>
<h2 className="text-headline-md font-headline-md text-error mb-1">ROOT CAUSE: thermal (critical) -&gt; power (critical) -&gt; life_support (degraded)</h2>
<p className="font-label-caps text-label-caps text-on-surface-variant">Address thermal, not the downstream symptoms.</p>
</div>
</div>
</div>

<div className="mb-gutter flex items-center justify-between gap-4">

<div className="flex-1 bg-surface-container-low border border-error/50 rounded-xl p-gutter relative group">
<div className="absolute top-0 right-0 p-2 text-error pulse-critical">
<span className="material-symbols-outlined text-sm" data-icon="warning">warning</span>
</div>
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Thermal</h3>
<div className="font-telemetry-data text-telemetry-data text-error">TEMP: +82.4°C</div>
</div>

<div className="text-on-surface-variant/50">
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</div>

<div className="flex-1 bg-surface-container-low border border-error/50 rounded-xl p-gutter relative">
<div className="absolute top-0 right-0 p-2 text-error pulse-critical">
<span className="material-symbols-outlined text-sm" data-icon="warning">warning</span>
</div>
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Power</h3>
<div className="font-telemetry-data text-telemetry-data text-error">BUS_V: 22.1V</div>
</div>

<div className="text-on-surface-variant/50">
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</div>

<div className="flex-1 bg-surface-container-low border border-tertiary-fixed-dim/50 rounded-xl p-gutter relative">
<div className="absolute top-0 right-0 p-2 text-tertiary-fixed-dim">
<span className="material-symbols-outlined text-sm" data-icon="info">info</span>
</div>
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Life Support</h3>
<div className="font-telemetry-data text-telemetry-data text-tertiary-fixed-dim">O2_PP: 18.2 kPa</div>
</div>
</div>

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-12 lg:col-span-6 bg-surface-container-low border border-outline-variant rounded-xl p-gutter">
<h3 className="text-headline-md font-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-lacquer-red text-sm" data-icon="analytics">analytics</span>
                        Situation Vector Influence
                    </h3>
<div className="h-8 w-full bg-surface-container-high flex rounded overflow-hidden mb-6 border border-outline-variant">
<div className="bg-lacquer-red/80 h-full" style={{width: "15%"}} title="Pose: 15%"></div>
<div className="bg-moss-accent/80 h-full" style={{width: "45%"}} title="Anomaly: 45%"></div>
<div className="bg-lacquer-red/50 h-full" style={{width: "30%"}} title="Mission Phase: 30%"></div>
<div className="bg-tertiary-fixed-dim/80 h-full" style={{width: "10%"}} title="Uncertainty: 10%"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-sm bg-lacquer-red/80"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Pose (15%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-sm bg-moss-accent/80"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Anomaly (45%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-sm bg-lacquer-red/50"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Mission Phase (30%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-sm bg-tertiary-fixed-dim/80"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Uncertainty (10%)</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-6 bg-surface-container-low border border-outline-variant rounded-xl p-gutter">
<h3 className="text-headline-md font-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-lacquer-red text-sm" data-icon="memory">memory</span>
                        k-NN Similarity Search
                    </h3>
<div className="space-y-3">
<div className="bg-surface border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-lacquer-red/50 transition-colors">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-lacquer-red">98.2% Similarity</span>
<span className="font-label-caps text-label-caps text-on-surface">LEO DOCKING REF-A2</span>
</div>
<div className="text-right flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-on-surface-variant">Override</span>
<span className="font-label-caps text-label-caps text-lacquer-red">PROCEED_SLOW</span>
</div>
</div>
<div className="bg-surface border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-lacquer-red/50 transition-colors">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-lacquer-red/80">94.5% Similarity</span>
<span className="font-label-caps text-label-caps text-on-surface">THERMAL_VENT_LOCK</span>
</div>
<div className="text-right flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-on-surface-variant">Override</span>
<span className="font-label-caps text-label-caps text-lacquer-red">MANUAL_VENT</span>
</div>
</div>
<div className="bg-surface border border-outline-variant rounded p-3 flex justify-between items-center group hover:border-lacquer-red/50 transition-colors">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-lacquer-red/60">89.1% Similarity</span>
<span className="font-label-caps text-label-caps text-on-surface">SENSOR_STALE_OOD</span>
</div>
<div className="text-right flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-on-surface-variant">Override</span>
<span className="font-label-caps text-label-caps text-lacquer-red">REBOOT_V1</span>
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
