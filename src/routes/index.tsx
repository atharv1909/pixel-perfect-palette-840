import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mission Control — SYMBIOSIS" },
      { name: "description", content: "Autonomous rendezvous mission control: perception, cognition, action and audit for the SYMBIOSIS program." },
      { property: "og:title", content: "Mission Control — SYMBIOSIS" },
      { property: "og:description", content: "Autonomous rendezvous mission control: perception, cognition, action and audit for the SYMBIOSIS program." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="font-body-md antialiased overflow-x-hidden min-h-screen relative">
      <SideNav />
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">

<div className="absolute inset-0 w-full h-full" style={{display: "block"}}>
<canvas id="shader-canvas-ANIMATION_34" style={{display: "block", width: "100%", height: "100%"}}></canvas>
</div>

</div>



<main className="ml-64 relative z-10 min-h-screen flex flex-col">

<div className="h-16 w-full"></div>

<section className="flex-1 flex flex-col items-center justify-center px-margin-desktop py-20 text-center max-w-5xl mx-auto">
<div className="mb-12 relative">
<img alt="SYMBIOSIS Brand Mark Hero" className="w-48 md:w-64 h-auto mx-auto grayscale mix-blend-multiply opacity-90 mb-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOA9pF87bb1hXdKtZTbLEy6UVSDjrYfmOLZRs-Db1ECR0kr7u1nAhP1-AbTP6f49KefrIQ8vT5N2ihO7_LmPW3JjAeSlVqQ4A_DPVZ1L1-x3mOHtQezA2npFIaOENVvm3VwjuEfdiYXh2sWB3wrysdUt9KwSX0_VINMrwoyS-kmtz6nz-G0VKM3eJt8F_7rjCCgCA3V_j4dsjv4PLFvZH6nURiG5h3LUhLleqDNrkk9z0Oj9p391sW5tJVTnROzRTIeQ" />
<div className="absolute -top-4 -right-8 stamp font-label-caps text-label-caps">
                     VERIFIED
                 </div>
</div>
<h1 className="font-headline-lg text-headline-lg md:text-[64px] md:leading-[72px] text-ink-charcoal uppercase tracking-tighter mb-8">
                SYMBIOSIS
            </h1>
<p className="font-headline-md text-headline-md text-on-surface-variant max-w-3xl mx-auto mb-12 border-l-2 border-lacquer-red pl-6 text-left italic">
                "A harmony of organic intelligence and technical precision. Orchestrating the next generation of deep space mission control."
            </p>
<div className="flex gap-6">
<button className="bg-lacquer-red text-paper-surface font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-primary transition-colors border border-lacquer-red">
                    ENGAGE SYSTEM
                </button>
<button className="bg-transparent text-ink-charcoal font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-surface-container transition-colors border border-ink-charcoal">
                    VIEW SCHEMATICS
                </button>
</div>
</section>

<section className="border-t border-ink-charcoal bg-paper-surface/90 backdrop-blur-sm relative z-20">
<div className="max-w-container-max mx-auto px-margin-desktop py-24 grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-4 border-r border-ink-charcoal/20 pr-8">
<h2 className="font-headline-md text-headline-md text-ink-charcoal mb-4 uppercase">Mission Objective</h2>
<div className="w-12 h-[1px] bg-lacquer-red mb-6"></div>
<p className="font-label-caps text-label-caps text-on-surface-variant">REF: PROTOCOL ALPHA-7</p>
</div>
<div className="md:col-span-8 pl-0 md:pl-8">
<p className="font-body-md text-body-md text-on-surface leading-relaxed mb-8">
                        The SYMBIOSIS project is founded on the principle that true resilience in deep space operations cannot be achieved through rigid automation alone. It requires the fluid adaptability of human intuition interwoven with the relentless accuracy of artificial intelligence. We are not building tools; we are cultivating an ecosystem of perception, cognition, and action.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-ink-charcoal/20 pt-8">
<div>
<span className="material-symbols-outlined text-lacquer-red mb-2 block">architecture</span>
<h3 className="font-label-caps text-label-caps text-ink-charcoal mb-2">STRUCTURAL INTEGRITY</h3>
<p className="text-sm text-on-surface-variant">Immutable core systems providing absolute stability under extreme orbital stress.</p>
</div>
<div>
<span className="material-symbols-outlined text-lacquer-red mb-2 block">network_node</span>
<h3 className="font-label-caps text-label-caps text-ink-charcoal mb-2">NEURAL ADAPTATION</h3>
<p className="text-sm text-on-surface-variant">Dynamic learning models that evolve alongside mission parameters and crew psychology.</p>
</div>
<div>
<span className="material-symbols-outlined text-lacquer-red mb-2 block">vital_signs</span>
<h3 className="font-label-caps text-label-caps text-ink-charcoal mb-2">ORGANIC HARMONY</h3>
<p className="text-sm text-on-surface-variant">Interfaces designed to align with human biological rhythms and cognitive loads.</p>
</div>
</div>
</div>
</div>
</section>
</main>
    </div>
  );
}
