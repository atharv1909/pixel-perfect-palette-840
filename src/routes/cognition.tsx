import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";
import { SystemHealthHeader } from "@/components/SystemHealthHeader";
import { useMissionControl } from "@/hooks/useMissionControl";

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
  const { latest } = useMissionControl();
  const c = latest.cognition;

  const rootCause = c?.root_cause || "thermal";
  const narrative = c?.root_cause_narrative || "ROOT CAUSE: thermal (critical) -> power (critical) -> life_support (degraded). Address thermal, not the downstream symptoms.";
  const anomaly = c?.anomaly_detected ?? false;
  const novelty = c?.novelty_score ?? 0.12;
  const recAction = c?.recommended_action || "PROCEED_SLOW";

  // Subsystem states from HDC causal graph
  const subStates = c?.subsystem_states || {
    thermal: "failed",
    power: "critical",
    life_support: "degraded",
  };

  return (
    <div className="bg-paper-surface text-on-surface h-screen w-screen overflow-hidden flex font-body-md selection:bg-lacquer-red selection:text-white">
      <SideNav />
      <div className="flex-1 md:ml-64 flex flex-col h-full relative overflow-hidden">
        {/* Top Live Health Header */}
        <SystemHealthHeader title="Hyperdimensional Cognition & Causal Reasoning" />

        <main className="flex-1 p-margin-desktop overflow-y-auto custom-scrollbar">
          
          {/* Causal Graph Root Cause Alert Banner */}
          <div className="bg-surface-container-lowest border border-lacquer-red/40 rounded-xl p-gutter mb-gutter relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-lacquer-red/5"></div>
            <div className="relative flex items-start gap-4">
              <div className="text-lacquer-red pt-1">
                <span className="material-symbols-outlined text-3xl">account_tree</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-label-caps text-xs px-2 py-0.5 bg-lacquer-red text-white rounded font-bold">
                    ROOT-CAUSE GRAPH TRAVERSAL
                  </span>
                  <span className="text-xs font-mono text-on-surface-variant">
                    Novelty: {(novelty * 100).toFixed(1)}% | Anomaly: {anomaly ? "DETECTED" : "NOMINAL"}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-ink-charcoal mb-1">{narrative}</h2>
                <p className="font-label-caps text-xs text-on-surface-variant">
                  Causal graph directs intervention to upstream root ({rootCause.toUpperCase()}) rather than suppressing symptoms.
                </p>
              </div>
            </div>
          </div>

          {/* Subsystem Cascade Flow */}
          <div className="mb-gutter flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Step 1: Thermal */}
            <div className="w-full md:flex-1 bg-surface-container-lowest border border-lacquer-red/40 rounded-xl p-4 relative shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-label-caps text-xs text-on-surface-variant uppercase font-bold">Thermal Subsystem</h3>
                <span className="text-[10px] font-mono text-lacquer-red font-bold px-1.5 py-0.5 bg-lacquer-red/10 rounded">
                  {subStates.thermal || "CRITICAL"}
                </span>
              </div>
              <div className="font-mono text-sm font-bold text-lacquer-red">RADIATOR LOOP 2: 0.4 bar/min</div>
              <div className="text-[11px] text-on-surface-variant mt-1">Status: Primary Root Trigger</div>
            </div>

            <div className="text-on-surface-variant/40 hidden md:block">
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </div>

            {/* Step 2: Power */}
            <div className="w-full md:flex-1 bg-surface-container-lowest border border-lacquer-red/30 rounded-xl p-4 relative shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-label-caps text-xs text-on-surface-variant uppercase font-bold">Power Subsystem</h3>
                <span className="text-[10px] font-mono text-lacquer-red font-bold px-1.5 py-0.5 bg-lacquer-red/10 rounded">
                  {subStates.power || "CRITICAL"}
                </span>
              </div>
              <div className="font-mono text-sm font-bold text-ink-charcoal">SOLAR ARRAY BUS: 22.1V</div>
              <div className="text-[11px] text-on-surface-variant mt-1">Coupling: Overheating throttle</div>
            </div>

            <div className="text-on-surface-variant/40 hidden md:block">
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </div>

            {/* Step 3: Life Support */}
            <div className="w-full md:flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl p-4 relative shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-label-caps text-xs text-on-surface-variant uppercase font-bold">Life Support (ECLSS)</h3>
                <span className="text-[10px] font-mono text-amber-700 font-bold px-1.5 py-0.5 bg-amber-500/10 rounded">
                  {subStates.life_support || "DEGRADED"}
                </span>
              </div>
              <div className="font-mono text-sm font-bold text-ink-charcoal">CABIN O2_PP: 18.2 kPa</div>
              <div className="text-[11px] text-on-surface-variant mt-1">Coupling: Power load shedding</div>
            </div>
          </div>

          {/* HDC Similarity Memory & Explanation */}
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
              <h3 className="font-label-caps text-xs text-ink-charcoal uppercase font-bold tracking-wider mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-lacquer-red">memory</span>
                10,000-D Hyperdimensional Memory Retrieval
              </h3>

              <div className="flex flex-col gap-3 font-mono text-xs">
                <div className="p-3 bg-surface-container-low rounded border border-outline-variant/40 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-ink-charcoal">Case #4092: Radiator Leak at 40m</div>
                    <div className="text-[11px] text-on-surface-variant">Recommended Action: RECONFIGURE_POWER</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-700">94.8% Match</div>
                    <div className="text-[10px] text-on-surface-variant">Success: 98%</div>
                  </div>
                </div>

                <div className="p-3 bg-surface-container-low rounded border border-outline-variant/40 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-ink-charcoal">Case #2180: Thruster Plume Impingement</div>
                    <div className="text-[11px] text-on-surface-variant">Recommended Action: HOLD_POSITION</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-ink-charcoal">68.2% Match</div>
                    <div className="text-[10px] text-on-surface-variant">Success: 92%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-label-caps text-xs text-ink-charcoal uppercase font-bold tracking-wider mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-lacquer-red">psychology</span>
                  Cognition Agent Output
                </h3>
                <div className="text-sm font-mono text-ink-charcoal leading-relaxed p-4 bg-surface-container-low rounded border border-outline-variant/40">
                  {c?.explanation || `Cognition engine evaluates 10,000-D situation vector against mission flight envelope. Anomaly score: ${(novelty * 100).toFixed(1)}%. Recommendation: ${recAction}.`}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-outline-variant/60 flex justify-between items-center text-xs font-mono">
                <span className="text-on-surface-variant">Selected Plan: <strong className="text-lacquer-red">{recAction}</strong></span>
                <span className="text-emerald-700 font-bold">Confidence: 94.2%</span>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
