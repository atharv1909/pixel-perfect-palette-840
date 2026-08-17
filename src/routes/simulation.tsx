import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";

export const Route = createFileRoute("/simulation")({
  head: () => ({
    meta: [
      { title: "Simulation — SYMBIOSIS Mission Control" },
      { name: "description", content: "Sandboxed what-if runs of the SYMBIOSIS autonomy stack against synthetic scenarios." },
      { property: "og:title", content: "Simulation — SYMBIOSIS Mission Control" },
      { property: "og:description", content: "Sandboxed what-if runs of the SYMBIOSIS autonomy stack against synthetic scenarios." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Simulation,
});

function Simulation() {
  return (
    <div className="antialiased overflow-hidden selection:bg-primary-container selection:text-white min-h-screen">
      <SideNav />
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-paper-surface dark:bg-ink-charcoal border-b border-on-surface-variant flex items-center justify-between px-gutter py-4 z-50">
<div className="font-label-caps text-label-caps text-on-surface font-bold">ARMSTRONG PROTOCOL</div>
<div className="flex items-center space-x-6">
<a className="font-label-caps text-label-caps text-lacquer-red font-bold" href="#">NOMINAL</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-lacquer-red transition-all" href="#">STABLE</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-lacquer-red transition-all" href="#">ACTIVE</a>
</div>
<div className="flex items-center space-x-4">
<button className="bg-lacquer-red text-white px-4 py-2 rounded font-label-caps text-label-caps uppercase hover:opacity-80 transition-opacity">EMERGENCY STOP</button>
<div className="flex space-x-3 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-lacquer-red transition-all" data-icon="notifications_active">notifications_active</span>
<span className="material-symbols-outlined cursor-pointer hover:text-lacquer-red transition-all" data-icon="account_circle">account_circle</span>
</div>
</div>
</header>



<main className="ml-64 mt-16 p-gutter h-[calc(100vh-64px)] overflow-y-auto bg-surface">
<div className="sim-border sim-watermark rounded-lg h-full flex flex-col p-gutter relative bg-surface-container-lowest">
<div className="absolute top-0 right-0 bg-sim-violet text-white text-[10px] font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
                Simulation Mode Active
            </div>
<div className="mb-8">
<h2 className="text-headline-md font-headline-md text-on-surface mb-2">Simulation Scenarios</h2>
<p className="text-body-md font-body-md text-on-surface-variant">Execute and monitor synthetic mission profiles.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter mb-gutter">

<div className="bg-surface-container rounded-xl border border-outline-variant p-gutter flex flex-col h-full hover:bg-surface-container-high transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-[28px]" data-icon="flight_takeoff">flight_takeoff</span>
<span className="text-[10px] font-label-caps text-sim-violet bg-sim-violet-bg px-2 py-1 rounded border border-sim-violet/20">source: simulation</span>
</div>
<h3 className="text-headline-md text-[18px] font-headline-md text-on-surface mb-2">Nominal Approach</h3>
<p className="font-telemetry-data text-[14px] text-on-surface-variant mb-6 flex-grow">Standard docking procedure with nominal parameters.</p>
<button className="w-full py-2 bg-transparent border border-primary text-primary text-label-caps font-label-caps uppercase rounded hover:bg-primary hover:text-white transition-colors">Run Scenario</button>
</div>

<div className="bg-surface-container rounded-xl border border-outline-variant p-gutter flex flex-col h-full hover:bg-surface-container-high transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-error text-[28px]" data-icon="thermostat">thermostat</span>
<span className="text-[10px] font-label-caps text-sim-violet bg-sim-violet-bg px-2 py-1 rounded border border-sim-violet/20">source: simulation</span>
</div>
<h3 className="text-headline-md text-[18px] font-headline-md text-on-surface mb-2">Thermal Anomaly</h3>
<p className="font-telemetry-data text-[14px] text-on-surface-variant mb-6 flex-grow">Simulates radiator degradation and cascading heat load.</p>
<button className="w-full py-2 bg-transparent border border-primary text-primary text-label-caps font-label-caps uppercase rounded hover:bg-primary hover:text-white transition-colors">Run Scenario</button>
</div>

<div className="bg-surface-container rounded-xl border border-outline-variant p-gutter flex flex-col h-full hover:bg-surface-container-high transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-tertiary text-[28px]" data-icon="visibility_off">visibility_off</span>
<span className="text-[10px] font-label-caps text-sim-violet bg-sim-violet-bg px-2 py-1 rounded border border-sim-violet/20">source: simulation</span>
</div>
<h3 className="text-headline-md text-[18px] font-headline-md text-on-surface mb-2">Perception Challenge</h3>
<p className="font-telemetry-data text-[14px] text-on-surface-variant mb-6 flex-grow">Adversarial lighting and sensor noise testing.</p>
<button className="w-full py-2 bg-transparent border border-primary text-primary text-label-caps font-label-caps uppercase rounded hover:bg-primary hover:text-white transition-colors">Run Scenario</button>
</div>

<div className="bg-surface-container rounded-xl border border-outline-variant p-gutter flex flex-col h-full hover:bg-surface-container-high transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-error text-[28px]" data-icon="storm">storm</span>
<span className="text-[10px] font-label-caps text-sim-violet bg-sim-violet-bg px-2 py-1 rounded border border-sim-violet/20">source: simulation</span>
</div>
<h3 className="text-headline-md text-[18px] font-headline-md text-on-surface mb-2">Perfect Storm</h3>
<p className="font-telemetry-data text-[14px] text-on-surface-variant mb-6 flex-grow">Combined multi-system failure and communication blackout.</p>
<button className="w-full py-2 bg-transparent border border-primary text-primary text-label-caps font-label-caps uppercase rounded hover:bg-primary hover:text-white transition-colors">Run Scenario</button>
</div>
</div>

<div className="bg-surface-container-high border border-outline-variant rounded-lg p-gutter flex items-center mb-gutter">
<button className="w-10 h-10 rounded bg-primary-container text-white flex items-center justify-center mr-4 hover:bg-primary transition-colors">
<span className="material-symbols-outlined" data-icon="play_arrow">play_arrow</span>
</button>
<div className="flex-grow flex flex-col justify-center px-4">
<div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant mb-2">
<span>T- 00:45:12</span>
<span>T+ 02:00:00</span>
</div>
<div className="h-1 bg-surface-container-highest rounded-full overflow-hidden w-full relative">
<div className="absolute top-0 left-0 h-full bg-sim-violet w-[35%] rounded-full shadow-[0_0_8px_rgba(147,51,234,0.5)]"></div>
<div className="absolute top-1/2 left-[35%] -translate-y-1/2 w-3 h-3 bg-white border border-outline-variant rounded-full cursor-pointer hover:scale-125 transition-transform"></div>
</div>
</div>
<div className="flex border border-outline-variant rounded ml-4 overflow-hidden bg-surface-container">
<button className="px-3 py-1 font-label-caps text-[12px] bg-primary/20 text-primary border-r border-outline-variant">1x</button>
<button className="px-3 py-1 font-label-caps text-[12px] text-on-surface-variant hover:bg-surface-container-high border-r border-outline-variant">2x</button>
<button className="px-3 py-1 font-label-caps text-[12px] text-on-surface-variant hover:bg-surface-container-high border-r border-outline-variant">5x</button>
<button className="px-3 py-1 font-label-caps text-[12px] text-on-surface-variant hover:bg-surface-container-high">10x</button>
</div>
</div>

<div className="mt-auto">
<h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-4 border-b border-outline-variant pb-2">Live Telemetry Mirror</h4>
<div className="grid grid-cols-2 md:grid-cols-5 gap-2">

<div className="bg-surface-container border border-outline-variant rounded p-3 flex flex-col justify-between">
<span className="text-[10px] font-label-caps text-on-surface-variant uppercase">Distance</span>
<div className="font-telemetry-data text-telemetry-data text-primary text-right mt-2 digit-roll">1,245<span className="text-[12px] text-on-surface-variant ml-1">km</span></div>
</div>

<div className="bg-surface-container border border-outline-variant rounded p-3 flex flex-col justify-between">
<span className="text-[10px] font-label-caps text-on-surface-variant uppercase">Velocity</span>
<div className="font-telemetry-data text-telemetry-data text-on-surface text-right mt-2 digit-roll">7.62<span className="text-[12px] text-on-surface-variant ml-1">km/s</span></div>
</div>

<div className="bg-surface-container border border-outline-variant rounded p-3 flex flex-col justify-between">
<span className="text-[10px] font-label-caps text-on-surface-variant uppercase">Power</span>
<div className="font-telemetry-data text-telemetry-data text-tertiary text-right mt-2 digit-roll">82<span className="text-[12px] text-on-surface-variant ml-1">%</span></div>
</div>

<div className="bg-surface-container border border-outline-variant rounded p-3 flex flex-col justify-between">
<span className="text-[10px] font-label-caps text-on-surface-variant uppercase">Life Support</span>
<div className="font-telemetry-data text-telemetry-data text-tertiary-container text-right mt-2 digit-roll">Nominal</div>
</div>

<div className="bg-surface-container border border-outline-variant rounded p-3 flex flex-col justify-between">
<span className="text-[10px] font-label-caps text-on-surface-variant uppercase">Thermal</span>
<div className="font-telemetry-data text-telemetry-data text-error text-right mt-2 digit-roll">Warn</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
