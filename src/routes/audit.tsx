import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Audit Log — SYMBIOSIS Mission Control" },
      { name: "description", content: "Immutable chronological record of every decision, override and telemetry event." },
      { property: "og:title", content: "Audit Log — SYMBIOSIS Mission Control" },
      { property: "og:description", content: "Immutable chronological record of every decision, override and telemetry event." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Audit,
});

function Audit() {
  return (
    <div className="font-body-md text-on-surface antialiased selection:bg-error-container selection:text-on-surface">
      <SideNav />
      <div className="flex h-screen w-full">



<header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] bg-paper-surface dark:bg-ink-charcoal border-b border-on-surface-variant flex items-center justify-between px-gutter py-4 h-16 z-40">

<button className="md:hidden text-on-surface-variant hover:text-lacquer-red transition-all">
<span className="material-symbols-outlined">menu</span>
</button>

<div className="hidden md:flex items-center gap-4 text-label-caps font-label-caps">
<span className="text-on-surface-variant">NOMINAL</span>
<span className="text-on-surface-variant">STABLE</span>
<span className="text-lacquer-red font-bold">ACTIVE</span>
</div>

<div className="flex items-center gap-4 text-label-caps font-label-caps text-on-surface font-bold">
<span className="hidden md:block">ARMSTRONG PROTOCOL</span>
<button className="text-on-surface-variant hover:text-lacquer-red transition-all opacity-80 flex items-center gap-2">
<span className="material-symbols-outlined text-lg">notifications_active</span>
</button>
<button className="text-on-surface-variant hover:text-lacquer-red transition-all opacity-80 flex items-center gap-2">
<span className="material-symbols-outlined text-lg">account_circle</span>
</button>
<div className="h-6 w-px bg-on-surface-variant mx-2"></div>
<button className="bg-surface text-lacquer-red font-label-caps text-label-caps px-4 py-1.5 rounded border border-on-surface-variant shadow-sm hover:bg-surface-container transition-colors">
                    EMERGENCY STOP
                </button>
</div>
</header>

<main className="flex-grow ml-0 md:ml-64 mt-16 p-margin-desktop overflow-y-auto w-full">

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="col-span-1 md:col-span-12 glass-card p-6 flex flex-col sm:flex-row items-center justify-between mb-4">
<div className="flex items-center gap-4 mb-4 sm:mb-0">
<span className="material-symbols-outlined text-lacquer-red text-5xl" style={{fontVariationSettings: "'FILL' 1"}}>format_image_left</span>
<div>
<h2 className="text-headline-md font-headline-md text-on-surface mb-1">Chain Integrity: VERIFIED</h2>
<p className="text-body-md font-body-md text-on-surface-variant">Last Verified: 2023-10-27T08:14:02Z</p>
</div>
</div>
<button className="bg-surface text-lacquer-red font-label-caps text-label-caps px-6 py-2 rounded shadow-sm hover:shadow-md transition-shadow border border-on-surface-variant">
                        Verify Now
                    </button>
</div>

<div className="col-span-1 md:col-span-8 space-y-6">
<h3 className="text-headline-md font-headline-md text-on-surface border-b border-on-surface-variant pb-2">Decision Ledger</h3>
<div className="relative pt-2">

<div className="timeline-item relative flex gap-4 mb-8">
<div className="timeline-line relative z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-on-surface-variant flex items-center justify-center text-lacquer-red">
<span className="material-symbols-outlined text-sm">memory</span>
</div>
</div>
<div className="glass-panel p-4 flex-grow hover:border-outline transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<span className="text-telemetry-data font-telemetry-data text-on-surface">2023-10-27T08:14:01.104Z</span>
<span className="text-label-caps font-label-caps bg-surface-container-highest px-2 py-1 rounded text-on-surface border border-on-surface-variant">ACKNOWLEDGE_SENSORS</span>
</div>
<div className="font-telemetry-data text-telemetry-data mt-3">
<div className="flex items-center text-on-surface-variant mb-1">
<span className="material-symbols-outlined text-[14px] mr-2">tag</span>
                                        hash: a91f2c4b...3c2e
                                    </div>
<div className="flex items-center text-on-surface-variant opacity-70">
<span className="material-symbols-outlined text-[14px] mr-2">link</span>
                                        prev: 4b2c1f9a...e2c3
                                    </div>
</div>
</div>
</div>

<div className="timeline-item relative flex gap-4 mb-8">
<div className="timeline-line relative z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-error-container border border-lacquer-red flex items-center justify-center text-lacquer-red shadow-sm">
<span className="material-symbols-outlined text-sm">warning</span>
</div>
</div>
<div className="glass-panel p-4 flex-grow border-lacquer-red/50 relative shadow-sm">
<div className="absolute -left-[17px] top-4 w-[16px] h-px bg-lacquer-red/50"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-telemetry-data font-telemetry-data text-on-surface font-bold">2023-10-27T08:13:45.022Z</span>
<span className="text-label-caps font-label-caps bg-error-container border border-error/30 px-2 py-1 rounded text-error">PROCEED_SLOW</span>
</div>
<div className="font-telemetry-data text-telemetry-data mt-3 pb-3 border-b border-on-surface-variant">
<div className="flex items-center text-lacquer-red mb-1">
<span className="material-symbols-outlined text-[14px] mr-2">tag</span>
                                        hash: 4b2c1f9a...e2c3
                                    </div>
<div className="flex items-center text-on-surface-variant opacity-70">
<span className="material-symbols-outlined text-[14px] mr-2">link</span>
                                        prev: 8d7e6f5a...b1c2
                                    </div>
</div>

<div className="mt-4">
<p className="text-label-caps font-label-caps text-on-surface-variant mb-2">Full Payload Data</p>
<pre className="bg-surface-container-lowest p-4 rounded border border-on-surface-variant text-body-md font-body-md overflow-x-auto text-on-surface-variant leading-relaxed"><code>&#123;
  "timestamp": "2023-10-27T08:13:45.022Z",
  "actor": "Autonomous Orchestrator",
  "decision_vector": "PROCEED_SLOW",
  "confidence_score": 0.892,
  "inputs": [
    &#123;
      "source": "LidarArray_Fwd",
      "value": "Anomalous reflection detected at 42m",
      "severity": "ELEVATED"
    &#125;,
    &#123;
      "source": "NavSystem",
      "value": "Trajectory aligned with designated approach vector"
    &#125;
  ],
  "signature": "3045022100e...a9b8"
&#125;</code></pre>
</div>
</div>
</div>

<div className="timeline-item relative flex gap-4 mb-4">
<div className="timeline-line relative z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-on-surface-variant flex items-center justify-center text-lacquer-red">
<span className="material-symbols-outlined text-sm">flight_takeoff</span>
</div>
</div>
<div className="glass-panel p-4 flex-grow hover:border-outline transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<span className="text-telemetry-data font-telemetry-data text-on-surface">2023-10-27T08:10:00.000Z</span>
<span className="text-label-caps font-label-caps bg-surface-container-highest px-2 py-1 rounded text-on-surface border border-on-surface-variant">INITIATE_APPROACH</span>
</div>
<div className="font-telemetry-data text-telemetry-data mt-3">
<div className="flex items-center text-on-surface-variant mb-1">
<span className="material-symbols-outlined text-[14px] mr-2">tag</span>
                                        hash: 8d7e6f5a...b1c2
                                    </div>
<div className="flex items-center text-on-surface-variant opacity-70">
<span className="material-symbols-outlined text-[14px] mr-2">link</span>
                                        prev: 00000000...0000 (GENESIS)
                                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4">
<div className="glass-card p-6 sticky top-[100px]">
<h3 className="text-headline-md font-headline-md text-on-surface mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-lacquer-red text-xl">info</span>
                            Decision Provenance
                        </h3>
<p className="text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
                            Each entry's hash includes the previous entry's hash. Any modification breaks the chain.
                        </p>

<div className="bg-surface-container p-4 rounded border border-on-surface-variant flex flex-col items-center gap-2">

<div className="w-full bg-surface-container-high border border-on-surface-variant p-2 text-center rounded text-telemetry-data font-telemetry-data text-on-surface-variant">
                                H1: 8d7e...
                            </div>

<div className="flex flex-col items-center text-outline">
<span className="material-symbols-outlined text-sm transform rotate-90">arrow_forward</span>
</div>

<div className="w-full bg-error-container border border-lacquer-red p-2 text-center rounded text-telemetry-data font-telemetry-data text-lacquer-red">
                                H2: 4b2c... <br />
<span className="text-label-caps text-lacquer-red opacity-80">prev: H1</span>
</div>

<div className="flex flex-col items-center text-outline">
<span className="material-symbols-outlined text-sm transform rotate-90">arrow_forward</span>
</div>

<div className="w-full bg-surface-container-high border border-on-surface-variant p-2 text-center rounded text-telemetry-data font-telemetry-data text-on-surface-variant">
                                H3: a91f... <br />
<span className="text-label-caps text-on-surface-variant opacity-80">prev: H2</span>
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
