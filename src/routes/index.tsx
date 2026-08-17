import { createFileRoute, Link } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";
import { SakuraShader } from "@/components/SakuraShader";

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
    <div className="font-body-md antialiased overflow-x-hidden min-h-screen relative bg-paper-surface selection:bg-lacquer-red selection:text-white">
      {/* Background Cherry Blossom Image with High-Contrast Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-opacity duration-700"
        style={{
          backgroundImage: "url('/sakura-bg.jpg')",
          opacity: 0.55,
          filter: "saturate(1.2) contrast(1.1)"
        }}
      />
      
      {/* Gradient Vignette to Guarantee Text Readability */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-paper-surface/60 via-paper-surface/40 to-paper-surface/85" />

      <SideNav />
      <SakuraShader />

      <main className="ml-64 relative z-10 min-h-screen flex flex-col">
        <div className="h-12 w-full"></div>

        <section className="flex-1 flex flex-col items-center justify-center px-margin-desktop py-16 text-center max-w-5xl mx-auto">
          {/* Glass Hero Card */}
          <div className="bg-paper-surface/90 backdrop-blur-md border border-outline-variant/60 rounded-2xl p-8 md:p-12 shadow-2xl w-full max-w-4xl relative overflow-hidden">
            <div className="mb-8 relative inline-block">
              <img 
                alt="FARAWAY Brand Mark Hero" 
                className="w-72 md:w-96 h-auto mx-auto rounded-lg shadow-xl border border-outline-variant/80 mb-6 transition-transform hover:scale-105 duration-300" 
                src="/faraway-logo.png" 
              />
              <div className="absolute -top-3 -right-4 stamp font-label-caps text-label-caps bg-lacquer-red text-white px-3 py-1 rounded shadow-md font-bold text-xs">
                VERIFIED
              </div>
            </div>



            <h1 className="font-headline-lg text-headline-lg md:text-[60px] md:leading-[68px] text-ink-charcoal uppercase tracking-tighter mb-6 font-bold">
              SYMBIOSIS
            </h1>
            
            <p className="font-headline-md text-headline-md text-ink-charcoal/90 max-w-2xl mx-auto mb-10 border-l-4 border-lacquer-red pl-6 text-left italic bg-surface-container-low/70 py-3 rounded-r-lg">
              "A harmony of organic intelligence and technical precision. Orchestrating the next generation of deep space autonomous mission control."
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Link 
                to="/overview" 
                className="bg-lacquer-red text-white font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-primary transition-all shadow-lg hover:shadow-xl rounded flex items-center gap-2 border border-lacquer-red font-bold"
              >
                ENGAGE SYSTEM
                <span className="material-symbols-outlined text-[18px]">dashboard</span>
              </Link>
              <Link 
                to="/perception" 
                className="bg-paper-surface/90 text-ink-charcoal font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-surface-container transition-all shadow hover:shadow-md rounded border border-ink-charcoal/80 flex items-center gap-2 font-bold"
              >
                VIEW SCHEMATICS
                <span className="material-symbols-outlined text-[18px]">visibility</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Modules Feature Grid */}
        <section className="border-t border-outline-variant bg-paper-surface/92 backdrop-blur-md relative z-20 shadow-inner">
          <div className="max-w-container-max mx-auto px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4 border-r border-ink-charcoal/20 pr-8">
              <h2 className="font-headline-md text-headline-md text-ink-charcoal mb-4 uppercase font-bold">Mission Architecture</h2>
              <div className="w-16 h-[2px] bg-lacquer-red mb-6"></div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">PROTOCOL ALPHA-7 // FARAWAY 8-CHANNEL SAFETY MATRIX</p>
              
              <div className="mt-8 flex flex-col gap-3">
                <Link to="/orchestrator" className="text-sm font-label-caps text-lacquer-red hover:underline flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  Graduated Autonomy Ladder
                </Link>
                <Link to="/audit" className="text-sm font-label-caps text-lacquer-red hover:underline flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  Tamper-Evident SHA-256 Decision Log
                </Link>
                <Link to="/simulation" className="text-sm font-label-caps text-lacquer-red hover:underline flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  Orbital Simulation Testbed
                </Link>
              </div>
            </div>

            <div className="md:col-span-8 pl-0 md:pl-8">
              <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-8 text-lg font-medium">
                The <strong className="text-lacquer-red">SYMBIOSIS</strong> framework couples Hyperdimensional Cognition with neural pose estimation, closed-form Clohessy-Wiltshire orbital dynamics, and conformalized confidence guarantees to ensure complete mission safety during autonomous proximity operations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-ink-charcoal/20 pt-8">
                <Link to="/perception" className="p-4 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-all border border-outline-variant/40 group">
                  <span className="material-symbols-outlined text-lacquer-red mb-2 block text-[28px] group-hover:scale-110 transition-transform">visibility</span>
                  <h3 className="font-label-caps text-label-caps text-ink-charcoal mb-2 font-bold">PERCEPTION</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Conformally-calibrated Jensen Gain pose estimation with independent CWH physics cross-check.</p>
                </Link>

                <Link to="/cognition" className="p-4 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-all border border-outline-variant/40 group">
                  <span className="material-symbols-outlined text-lacquer-red mb-2 block text-[28px] group-hover:scale-110 transition-transform">psychology</span>
                  <h3 className="font-label-caps text-label-caps text-ink-charcoal mb-2 font-bold">COGNITION</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">10,000-D Hyperdimensional vector-symbolic reasoning with root-cause causal graph traversal.</p>
                </Link>

                <Link to="/action" className="p-4 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-all border border-outline-variant/40 group">
                  <span className="material-symbols-outlined text-lacquer-red mb-2 block text-[28px] group-hover:scale-110 transition-transform">precision_manufacturing</span>
                  <h3 className="font-label-caps text-label-caps text-ink-charcoal mb-2 font-bold">ACTION</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Exact Clopper-Pearson 99% collision probability bounds from Monte-Carlo digital twin ensembles.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
