import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";

export const Route = createFileRoute("/perception")({
  head: () => ({
    meta: [
      { title: "Perception — SYMBIOSIS Mission Control" },
      { name: "description", content: "Sensor fusion, pose estimation and target tracking feeds from the SYMBIOSIS perception stack." },
      { property: "og:title", content: "Perception — SYMBIOSIS Mission Control" },
      { property: "og:description", content: "Sensor fusion, pose estimation and target tracking feeds from the SYMBIOSIS perception stack." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Perception,
});

function Perception() {
  return (
    <div className="bg-surface text-on-surface h-screen overflow-hidden flex">
      <SideNav />
      <div className="ml-64 flex-1 flex flex-col h-full relative">

<header className="fixed top-0 right-0 w-[calc(100%-16rem)] border-b border-on-surface-variant bg-paper-surface dark:bg-ink-charcoal flex items-center justify-between px-gutter py-4 h-16 z-40">
<div className="flex items-center gap-6">
<span className="text-lacquer-red font-telemetry-data text-telemetry-data font-bold">APPROACH — 42m range</span>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4">
<span className="material-symbols-outlined text-on-surface-variant hover:text-lacquer-red transition-all cursor-pointer opacity-80 hover:opacity-100 text-[20px]">sensors</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-lacquer-red transition-all cursor-pointer opacity-80 hover:opacity-100 text-[20px]">wifi_tethering</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-lacquer-red transition-all cursor-pointer opacity-80 hover:opacity-100 text-[20px]">terminal</span>
</div>
<button className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-sm font-label-caps text-label-caps border border-outline hover:bg-surface-tint hover:text-surface-container-lowest transition-colors">
                    ARMSTRONG PROTOCOL
                </button>
</div>
</header>

<main className="flex-1 mt-16 p-gutter overflow-y-auto grid grid-cols-12 gap-gutter content-start">

<div className="col-span-12 lg:col-span-7 flex flex-col gap-4">

<div className="bg-surface-container-lowest rounded-xl border border-outline overflow-hidden flex flex-col h-[500px]">
<div className="px-4 py-3 border-b border-outline flex justify-between items-center bg-surface-container-low">
<span className="font-label-caps text-label-caps text-on-surface-variant">OPTICAL SENSOR FEED</span>
<span className="font-telemetry-data text-telemetry-data font-bold text-lacquer-red flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-lacquer-red animate-pulse"></span> LIVE (24ms latency)</span>
</div>
<div className="flex-1 relative bg-black">
<img className="w-full h-full object-cover opacity-90" data-alt="A highly technical, dark mode view of a satellite or spacecraft floating in deep space, rendered with extreme photorealism and stark lighting. The image serves as a camera feed in a mission control interface. A glowing cyan 3D wireframe bounding box is precisely overlaid onto the central structure of the spacecraft, indicating targeting and tracking systems are locked on. The background is pure void black with faint, realistic distant stars." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4mK2v1A5jwOHZXv6qLg35Cu7W2gVNfSeUfnqYCk3qv9YvaXBxP8dpkWqrwcLwD436rFpK67dm4oSsSSVDwXoVs9fqnXNcFsmmQS1zQTWfbonEFDD7N6eRH5Zc1AZ7kQqKW-0EJqEieBn-_h_0Z5zbdaTnh5kgvj7ImMfMdU7J2oXiwEss0qSzLIQkIDcf7ZWl5hDgYLkVhaOYbK2llFAbvkvC_nJm3Ndsvso0AHbpOQVPTrAMLlKz" />

<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
<div className="w-16 h-16 border border-lacquer-red/60 relative">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-lacquer-red/60"></div>
<div className="absolute left-1/2 top-0 w-[1px] h-full bg-lacquer-red/60"></div>
</div>
</div>
<div className="absolute bottom-4 left-4 font-telemetry-data text-telemetry-data text-lacquer-red/90">FRM: 49201.2</div>
</div>
<div className="p-4 bg-surface-container-low border-t border-outline flex flex-col gap-2">
<div className="font-label-caps text-label-caps text-on-surface-variant mb-1">ESTIMATED POSE</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="font-telemetry-data text-telemetry-data text-on-surface-variant mb-1">QUATERNION</div>
<div className="font-telemetry-data text-telemetry-data text-on-surface font-bold tracking-wider">[q0: 0.982, q1: 0.012, q2: -0.045, q3: 0.187]</div>
</div>
<div>
<div className="font-telemetry-data text-telemetry-data text-on-surface-variant mb-1">TRANSLATION VECTOR</div>
<div className="font-telemetry-data text-telemetry-data text-on-surface font-bold tracking-wider">[x: +4.219m, y: -1.008m, z: +41.884m]</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4 h-[500px]">

<div className="bg-surface-container-lowest rounded-xl border border-outline p-4 flex flex-col justify-between">
<div className="font-label-caps text-label-caps text-on-surface-variant">JENSEN GAIN</div>
<div className="flex-1 flex flex-col items-center justify-center relative">

<svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#e4e2de" strokeDasharray="188 251" strokeWidth="8" />
<circle cx="50" cy="50" fill="none" r="40" stroke="#7A221E" strokeDasharray="51 251" strokeWidth="8" />

<line stroke="#1b1c1a" strokeWidth="2" transform="rotate(15 50 50)" x1="50" x2="50" y1="10" y2="2" />

<line stroke="#ba1a1a" strokeWidth="2" transform="rotate(35 50 50)" x1="50" x2="50" y1="10" y2="2" />
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-telemetry-data text-telemetry-data text-on-surface">12.4°</span>
</div>
</div>
<div className="flex justify-between font-telemetry-data text-telemetry-data text-on-surface-variant mt-2">
<span>0°</span><span>45°</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl border border-outline p-4 flex flex-col justify-between">
<div className="font-label-caps text-label-caps text-on-surface-variant">PHYSICS CROSS-CHECK</div>
<div className="flex-1 flex flex-col justify-center gap-4">
<div className="flex justify-between items-end">
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">Residual</span>
<span className="font-telemetry-data text-telemetry-data text-on-surface">0.42m</span>
</div>
<div className="w-full h-3 bg-surface-container-high rounded-sm relative overflow-hidden border border-outline-variant">
<div className="h-full bg-lacquer-red w-[21%]"></div>

<div className="absolute top-0 bottom-0 left-[80%] w-[2px] bg-error"></div>
</div>
<div className="text-right font-telemetry-data text-telemetry-data text-on-surface-variant">Thr: 2.0m</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl border border-outline p-4 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-error/5"></div>
<div className="font-label-caps text-label-caps text-error font-bold relative z-10 flex justify-between">
                        OOD DISTANCE
                        <span className="material-symbols-outlined text-[16px]">warning</span>
</div>
<div className="flex-1 flex flex-col items-center justify-center relative z-10">
<div className="w-24 h-24 rounded-full border-4 border-error/20 flex items-center justify-center relative">

<div className="absolute inset-0 rounded-full border border-error animate-ping opacity-30"></div>
<div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center">
<span className="font-telemetry-data text-telemetry-data text-error">9.8</span>
</div>
</div>
</div>
<div className="text-center font-label-caps text-label-caps text-error font-bold relative z-10 mt-2 bg-error/10 py-1 rounded border border-error/20">STATE: NOVEL</div>
</div>

<div className="bg-surface-container-lowest rounded-xl border border-outline p-4 flex flex-col justify-between">
<div className="font-label-caps text-label-caps text-on-surface-variant flex justify-between items-center">
                        ESTIMATOR DELTA
                        <div className="flex items-center gap-1 text-lacquer-red">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>AGREE</span>
</div>
</div>
<div className="flex-1 flex flex-col justify-center mt-4">
<div className="grid grid-cols-3 gap-2 mb-2 font-telemetry-data text-telemetry-data text-on-surface-variant border-b border-outline pb-2">
<div>PARAM</div>
<div className="text-right">NN</div>
<div className="text-right">PnP</div>
</div>
<div className="grid grid-cols-3 gap-2 py-2 items-center">
<div className="font-telemetry-data text-telemetry-data text-on-surface font-bold">ROT (°)</div>
<div className="text-right font-telemetry-data text-telemetry-data text-on-surface-variant">42.10</div>
<div className="text-right font-telemetry-data text-telemetry-data text-on-surface-variant">42.92</div>
</div>
<div className="grid grid-cols-3 gap-2 py-2 items-center bg-surface-container rounded px-1">
<div className="font-telemetry-data text-telemetry-data text-on-surface font-bold">Δ ROT</div>
<div className="col-span-2 text-right font-telemetry-data text-telemetry-data text-lacquer-red font-bold">0.82°</div>
</div>
<div className="grid grid-cols-3 gap-2 py-2 mt-2 items-center bg-surface-container rounded px-1">
<div className="font-telemetry-data text-telemetry-data text-on-surface font-bold">Δ POS</div>
<div className="col-span-2 text-right font-telemetry-data text-telemetry-data text-lacquer-red font-bold">0.12m</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 bg-surface-container-lowest rounded-xl border border-outline p-4">
<div className="font-label-caps text-label-caps text-on-surface-variant mb-4">CONFIDENCE TAXONOMY</div>
<div className="grid grid-cols-4 gap-2">
<div className="border border-moss-accent bg-moss-accent/10 text-moss-accent p-3 flex flex-col items-center justify-center text-center rounded-sm">
<span className="material-symbols-outlined mb-1">verified</span>
<span className="font-label-caps text-label-caps font-bold">HIGH CONFIDENCE</span>
</div>
<div className="border border-error/40 bg-error/5 text-error p-3 flex flex-col items-center justify-center text-center rounded-sm">
<span className="material-symbols-outlined mb-1">flip</span>
<span className="font-label-caps text-label-caps font-bold">MODERATE - SYMMETRY</span>
</div>
<div className="border border-outline bg-surface-container text-on-surface-variant p-3 flex flex-col items-center justify-center text-center rounded-sm">
<span className="material-symbols-outlined mb-1">help_center</span>
<span className="font-label-caps text-label-caps font-bold">UNKNOWN INPUT</span>
</div>
<div className="border border-error/40 bg-error/5 text-error p-3 flex flex-col items-center justify-center text-center rounded-sm">
<span className="material-symbols-outlined mb-1">dangerous</span>
<span className="font-label-caps text-label-caps font-bold">LOW - FAILURE</span>
</div>
</div>
</div>

<div className="col-span-12 bg-surface-container-lowest rounded-xl border border-outline p-4 h-[250px] flex flex-col">
<div className="flex justify-between items-center mb-4">
<div className="font-label-caps text-label-caps text-on-surface-variant">JENSEN GAIN STABILITY (T-60s)</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-lacquer-red/20 border border-lacquer-red"></div>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">Conformal Bound</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-[2px] bg-lacquer-red"></div>
<span className="font-telemetry-data text-telemetry-data text-on-surface-variant">Actual</span>
</div>
</div>
</div>
<div className="flex-1 relative border-l border-b border-outline ml-8 mb-4">

<div className="absolute -left-8 top-0 font-telemetry-data text-telemetry-data text-on-surface-variant">30°</div>
<div className="absolute -left-8 top-1/2 -translate-y-1/2 font-telemetry-data text-telemetry-data text-on-surface-variant">15°</div>
<div className="absolute -left-8 bottom-0 font-telemetry-data text-telemetry-data text-on-surface-variant">0°</div>

<div className="absolute -bottom-6 left-0 font-telemetry-data text-telemetry-data text-on-surface-variant">T-60</div>
<div className="absolute -bottom-6 right-0 font-telemetry-data text-telemetry-data text-on-surface-variant">NOW</div>

<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">

<path d="M0,40 L10,38 L20,42 L30,35 L40,45 L50,40 L60,35 L70,30 L80,38 L90,45 L100,42 L100,75 L90,80 L80,72 L70,68 L60,75 L50,82 L40,78 L30,75 L20,85 L10,80 L0,82 Z" fill="rgba(122, 34, 30, 0.1)" />

<polyline fill="none" points="0,60 10,55 20,65 30,52 40,60 50,58 60,50 70,48 80,55 90,62 100,58" stroke="#7A221E" strokeWidth="1.5" />

<line stroke="rgba(137,114,111,0.3)" strokeDasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50" />
<line stroke="rgba(137,114,111,0.3)" strokeDasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="20" y2="20" />
</svg>
</div>
</div>
</main>
</div>
    </div>
  );
}
