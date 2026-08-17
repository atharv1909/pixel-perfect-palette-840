import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";

export const Route = createFileRoute("/overview")({
  head: () => ({
    meta: [
      { title: "Overview — SYMBIOSIS Mission Control" },
      { name: "description", content: "Live dashboard of proximity trajectory, telemetry and autonomy state for the SYMBIOSIS vehicle." },
      { property: "og:title", content: "Overview — SYMBIOSIS Mission Control" },
      { property: "og:description", content: "Live dashboard of proximity trajectory, telemetry and autonomy state for the SYMBIOSIS vehicle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Overview,
});

function Overview() {
  return (
    <div className="bg-paper-surface text-ink-charcoal font-body-md h-screen w-screen overflow-hidden flex selection:bg-lacquer-red selection:text-white">
      <SideNav />
      <div className="flex-1 flex flex-col md:ml-64 h-full relative overflow-hidden">

<header className="flex items-center justify-between px-gutter py-4 h-16 z-50 bg-paper-surface border-b border-on-surface-variant shrink-0">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md font-bold text-ink-charcoal tracking-tighter uppercase">SYMBIOSIS Mission Control</span>
</div>
<div className="flex items-center gap-6">

<div className="flex gap-4 border-r border-on-surface-variant pr-6">
<button className="text-on-surface-variant hover:text-lacquer-red transition-all p-1.5 rounded-lg group">
<span className="material-symbols-outlined text-[20px] opacity-100 group-hover:opacity-80">wifi</span>
</button>
<button className="text-on-surface-variant hover:text-lacquer-red transition-all p-1.5 rounded-lg group">
<span className="material-symbols-outlined text-[20px] opacity-100 group-hover:opacity-80">battery_charging_full</span>
</button>
<button className="text-on-surface-variant hover:text-lacquer-red transition-all p-1.5 rounded-lg group">
<span className="material-symbols-outlined text-[20px] opacity-100 group-hover:opacity-80">settings</span>
</button>
</div>

<button className="bg-error text-white px-4 py-1.5 rounded font-label-caps text-label-caps uppercase tracking-wider hover:bg-red-700 transition-colors border border-outline-variant">
                    EMERGENCY STOP
                </button>

<div className="w-8 h-8 rounded-full border border-outline-variant overflow-hidden ml-2 cursor-pointer hover:border-lacquer-red transition-colors">
<img className="w-full h-full object-cover" data-alt="Chief Operator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-wzsaVmUGiXDOdMdiI7Fg2oKyxEELr0qSP6F_Lb4MY_RDrtqGUf0I1C7rZAndfREQpqVJyAAJ37S50xPR9-ScOD1irYkZfpbuGH0wUvke37fnWX_Glh9b649fo8IokyPmIDv6P98oJ_VKxbEzzXvk0B5bViRPzRz02cDd9QOsHbcknbl-M9u4W9PixACFSvqxsLnJXar9rFCspKPP2FyQwpTMLE8hTs6wwTlM8JnMvZLKw_l3RUAn" />
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-gutter custom-scrollbar">
<div className="max-w-[1600px] mx-auto w-full flex flex-col gap-gutter">

<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-container-padding flex flex-col justify-between h-[120px]">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Current Action</h3>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-moss-accent text-[28px] pulse-amber">warning</span>
<span className="font-telemetry-lg text-[24px] font-bold text-moss-accent tracking-tight">PROCEED_SLOW</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-container-padding flex flex-col justify-between h-[120px]">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Range to Target</h3>
<div className="flex items-baseline gap-2">
<span className="font-telemetry-lg text-[32px] font-bold text-ink-charcoal tracking-tight">24.18</span>
<span className="font-telemetry-sm text-on-surface-variant">m</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-container-padding flex items-center justify-between h-[120px]">
<div className="flex flex-col gap-1">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider leading-tight w-24">Jensen Gain Confidence</h3>
</div>
<div className="relative w-[64px] h-[64px] flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
<path className="text-lacquer-red" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="92.4, 100" strokeLinecap="round" strokeWidth="4" />
</svg>
<span className="font-telemetry-sm font-bold text-ink-charcoal z-10">92.4%</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-container-padding flex flex-col justify-between h-[120px]">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Required Autonomy Level</h3>
<div className="bg-lacquer-red/10 border border-lacquer-red/30 rounded px-4 py-2 self-start flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-lacquer-red"></span>
<span className="font-telemetry-md font-bold text-lacquer-red tracking-wider">AUTONOMOUS</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 xl:grid-cols-12 gap-gutter min-h-[480px]">

<div className="xl:col-span-8 bg-surface-container-lowest rounded-lg border border-outline-variant flex flex-col overflow-hidden">
<div className="px-container-padding py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container">
<h2 className="font-label-caps text-label-caps text-ink-charcoal uppercase tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] opacity-70">scatter_plot</span>
                                Proximity Trajectory (CWH Frame)
                            </h2>
<div className="flex gap-3">
<div className="flex items-center gap-2">
<span className="w-3 h-[2px] bg-moss-accent"></span>
<span className="font-telemetry-sm text-on-surface-variant">Mean Path</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-[2px] bg-black/20"></span>
<span className="font-telemetry-sm text-on-surface-variant">Ensemble</span>
</div>
</div>
</div>

<div className="flex-1 relative bg-surface-container-lowest grid-bg p-8 flex flex-col border-b border-outline-variant">

<div className="absolute top-4 left-8 font-telemetry-sm text-on-surface-variant opacity-60">R-bar (m)</div>
<div className="absolute bottom-6 right-8 font-telemetry-sm text-on-surface-variant opacity-60">V-bar (m)</div>

<div className="flex-1 border-l border-b border-outline-variant relative w-full h-full">
<svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">

<line stroke="rgba(0,0,0,0.1)" strokeWidth="1" x1="0" x2="100%" y1="25%" y2="25%" />
<line stroke="rgba(0,0,0,0.1)" strokeWidth="1" x1="0" x2="100%" y1="50%" y2="50%" />
<line stroke="rgba(0,0,0,0.1)" strokeWidth="1" x1="0" x2="100%" y1="75%" y2="75%" />
<line stroke="rgba(0,0,0,0.1)" strokeWidth="1" x1="25%" x2="25%" y1="0" y2="100%" />
<line stroke="rgba(0,0,0,0.1)" strokeWidth="1" x1="50%" x2="50%" y1="0" y2="100%" />
<line stroke="rgba(0,0,0,0.1)" strokeWidth="1" x1="75%" x2="75%" y1="0" y2="100%" />

<path d="M 0 100 Q 200 80, 500 20" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
<path d="M 0 100 Q 220 70, 520 10" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
<path d="M 0 100 Q 180 90, 480 40" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
<path d="M 0 100 Q 250 100, 550 50" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
<path d="M 0 100 Q 150 60, 450 -10" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
<path d="M 0 100 Q 210 85, 510 25" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />

<path d="M 0 100 Q 200 80, 500 20" fill="none" stroke="#5C6300" strokeLinecap="round" strokeWidth="3" />

<circle cx="500" cy="20" fill="#5C6300" r="4" />
<circle cx="500" cy="20" fill="none" opacity="0.5" r="12" stroke="#5C6300" strokeWidth="1" />
</svg>
</div>
</div>

<div className="h-24 bg-surface-container border-t border-outline-variant p-4 flex flex-col justify-between">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-2">Decision Timeline</h3>
<div className="relative w-full h-[2px] bg-black/10 mt-4 rounded">

<div className="absolute top-[-4px] left-[10%] w-[2px] h-[10px] bg-lacquer-red">
<span className="absolute top-4 left-1/2 -translate-x-1/2 font-telemetry-sm text-on-surface-variant text-[10px]">T-120</span>
</div>
<div className="absolute top-[-4px] left-[25%] w-[2px] h-[10px] bg-lacquer-red">
<span className="absolute top-4 left-1/2 -translate-x-1/2 font-telemetry-sm text-on-surface-variant text-[10px]">T-90</span>
</div>
<div className="absolute top-[-4px] left-[40%] w-[2px] h-[10px] bg-moss-accent">
<span className="absolute top-4 left-1/2 -translate-x-1/2 font-telemetry-sm text-moss-accent text-[10px]">OOD_1</span>
</div>
<div className="absolute top-[-4px] left-[55%] w-[2px] h-[10px] bg-lacquer-red">
<span className="absolute top-4 left-1/2 -translate-x-1/2 font-telemetry-sm text-on-surface-variant text-[10px]">T-60</span>
</div>
<div className="absolute top-[-4px] left-[70%] w-[2px] h-[10px] bg-lacquer-red">
<span className="absolute top-4 left-1/2 -translate-x-1/2 font-telemetry-sm text-on-surface-variant text-[10px]">T-30</span>
</div>
<div className="absolute top-[-4px] left-[85%] w-[2px] h-[10px] bg-moss-accent">
<span className="absolute top-4 left-1/2 -translate-x-1/2 font-telemetry-sm text-moss-accent text-[10px]">OOD_2</span>
</div>
<div className="absolute top-[-4px] left-[95%] w-[2px] h-[10px] bg-lacquer-red">
<span className="absolute top-4 left-1/2 -translate-x-1/2 font-telemetry-sm text-lacquer-red text-[10px]">NOW</span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 bg-surface-container-lowest rounded-lg border border-outline-variant flex flex-col h-full overflow-hidden">
<div className="px-container-padding py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container">
<h2 className="font-label-caps text-label-caps text-ink-charcoal uppercase tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] opacity-70">receipt_long</span>
                                Escalation Feed
                            </h2>
<span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-telemetry-sm text-on-surface-variant">LIVE</span>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">

<div className="bg-error-container/20 border border-error rounded p-3 flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
<div className="flex justify-between items-start pl-2">
<span className="font-telemetry-sm text-error font-bold">SYS_ERR_09</span>
<span className="font-telemetry-sm text-on-surface-variant opacity-70">[14:08:22]</span>
</div>
<p className="font-body-md text-ink-charcoal text-sm pl-2 leading-relaxed">
                                    Physics cross-check disagrees with vision, residual 4.2m
                                </p>
</div>

<div className="bg-surface-container border border-moss-accent rounded p-3 flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-moss-accent"></div>
<div className="flex justify-between items-start pl-2">
<span className="font-telemetry-sm text-moss-accent font-bold">SENS_WARN</span>
<span className="font-telemetry-sm text-on-surface-variant opacity-70">[14:05:10]</span>
</div>
<p className="font-body-md text-ink-charcoal text-sm pl-2 leading-relaxed">
                                    Sensor degradation detected in Lidar-B
                                </p>
</div>

<div className="bg-surface-container border border-outline-variant rounded p-3 flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-lacquer-red"></div>
<div className="flex justify-between items-start pl-2">
<span className="font-telemetry-sm text-lacquer-red font-bold">TRAJ_NOMINAL</span>
<span className="font-telemetry-sm text-on-surface-variant opacity-70">[14:02:45]</span>
</div>
<p className="font-body-md text-ink-charcoal text-sm pl-2 leading-relaxed text-on-surface-variant">
                                    Nominal approach vector maintained
                                </p>
</div>

<div className="bg-surface-container border border-outline-variant rounded p-3 flex flex-col gap-2 relative overflow-hidden group opacity-60">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-lacquer-red/20"></div>
<div className="flex justify-between items-start pl-2">
<span className="font-telemetry-sm text-on-surface-variant font-bold">MANEUVER_COMP</span>
<span className="font-telemetry-sm text-on-surface-variant opacity-70">[13:58:12]</span>
</div>
<p className="font-body-md text-ink-charcoal text-sm pl-2 leading-relaxed text-on-surface-variant">
                                    Station-keeping burn delta-v achieved.
                                </p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-4">
<div className="flex justify-between items-center">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">device_thermostat</span>
                                Thermal
                            </h3>
<span className="font-telemetry-md text-lacquer-red">80%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden">
<div className="bg-lacquer-red h-full rounded" style={{width: "80%"}}></div>
</div>
<div className="flex justify-between mt-1">
<span className="font-telemetry-sm text-on-surface-variant opacity-60">Radiator Temp: 284K</span>
<span className="font-telemetry-sm text-on-surface-variant opacity-60">NOMINAL</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-4">
<div className="flex justify-between items-center">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">bolt</span>
                                Power
                            </h3>
<span className="font-telemetry-md text-lacquer-red">80%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden">
<div className="bg-lacquer-red h-full rounded" style={{width: "80%"}}></div>
</div>
<div className="flex justify-between mt-1">
<span className="font-telemetry-sm text-on-surface-variant opacity-60">Draw: 4.2 kW</span>
<span className="font-telemetry-sm text-on-surface-variant opacity-60">NOMINAL</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col gap-4">
<div className="flex justify-between items-center">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">air</span>
                                Life Support
                            </h3>
<span className="font-telemetry-md text-lacquer-red">80%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden">
<div className="bg-lacquer-red h-full rounded" style={{width: "80%"}}></div>
</div>
<div className="flex justify-between mt-1">
<span className="font-telemetry-sm text-on-surface-variant opacity-60">O2 Reserve: 92h</span>
<span className="font-telemetry-sm text-on-surface-variant opacity-60">NOMINAL</span>
</div>
</div>
</section>

<div className="h-8 w-full shrink-0"></div>
</div>
</main>
</div>
    </div>
  );
}
