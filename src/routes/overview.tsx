import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";
import { SystemHealthHeader } from "@/components/SystemHealthHeader";
import { useMissionControl } from "@/hooks/useMissionControl";
import { sendHumanOverride } from "@/lib/api";
import { useState } from "react";

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
  const { latest, events, decisions, status } = useMissionControl();
  const [stopLoading, setStopLoading] = useState(false);

  const p = latest.perception;
  const c = latest.cognition;
  const a = latest.action;
  const cons = latest.consensus;

  // Calculate live range to target from position vector t
  let rangeMeters = 24.18;
  if (p && Array.isArray(p.t) && p.t.length >= 3) {
    rangeMeters = Math.sqrt(p.t[0] ** 2 + p.t[1] ** 2 + p.t[2] ** 2);
  }

  // Jensen Gain & Confidence calculation
  const jg = p?.jensen_gain ?? 2.82;
  const confLevel = p?.confidence_level ?? "moderate";
  const confPct = Math.max(10, Math.min(99, Math.round(100 - jg * 3.2)));

  // Autonomy level
  const autoLevel = cons?.required_autonomy_level ?? "AUTONOMOUS";
  const currentAction = cons?.final_action ?? a?.primary_action ?? "PROCEED_SLOW";

  const handleEmergencyStop = async () => {
    setStopLoading(true);
    try {
      await sendHumanOverride("reject", "hold_position", "Manual Emergency Stop triggered from Overview Dashboard");
    } finally {
      setStopLoading(false);
    }
  };

  return (
    <div className="bg-paper-surface text-ink-charcoal font-body-md h-screen w-screen overflow-hidden flex selection:bg-lacquer-red selection:text-white">
      <SideNav />
      <div className="flex-1 flex flex-col md:ml-64 h-full relative overflow-hidden">
        {/* Live Top Health Header with Green/Red status indicators */}
        <SystemHealthHeader title="SYMBIOSIS Overview" />

        <main className="flex-1 overflow-y-auto p-gutter custom-scrollbar">
          <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-gutter">
            
            {/* Top Telemetry KPI Ribbon */}
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              
              {/* Card 1: Current Action */}
              <div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-container-padding flex flex-col justify-between h-[130px] shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Current Action</h3>
                  <span className="text-[10px] font-label-caps px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                    {cons?.consensus_reached ? "CONSENSUS" : "RESOLVED"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-moss-accent text-[28px] animate-pulse">
                    {currentAction.includes("HOLD") || currentAction.includes("ABORT") ? "error" : "precision_manufacturing"}
                  </span>
                  <span className="font-telemetry-lg text-[22px] font-bold text-moss-accent tracking-tight truncate">
                    {currentAction}
                  </span>
                </div>
                <div className="text-[11px] font-label-caps text-on-surface-variant truncate">
                  {cons?.reasoning ? cons.reasoning.split("|")[0] : "Nominal proximity approach"}
                </div>
              </div>

              {/* Card 2: Range to Target */}
              <div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-container-padding flex flex-col justify-between h-[130px] shadow-sm">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Range to Target</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-telemetry-lg text-[32px] font-bold text-ink-charcoal tracking-tight font-mono">
                    {rangeMeters.toFixed(2)}
                  </span>
                  <span className="font-telemetry-sm text-on-surface-variant">m</span>
                </div>
                <div className="text-[11px] font-label-caps text-on-surface-variant">
                  Physics Residual: <span className="font-bold text-ink-charcoal">{p?.physics_residual_m?.toFixed(2) ?? "0.00"}m</span>
                </div>
              </div>

              {/* Card 3: Jensen Gain & Calibrated Bound */}
              <div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-container-padding flex items-center justify-between h-[130px] shadow-sm">
                <div className="flex flex-col gap-1">
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider leading-tight w-28">
                    Jensen Gain Uncertainty
                  </h3>
                  <div className="text-[11px] font-label-caps text-on-surface-variant mt-1">
                    JG: <span className="font-bold text-ink-charcoal">{jg.toFixed(2)}°</span> ({confLevel})
                  </div>
                  <div className="text-[10px] font-label-caps text-lacquer-red">
                    95% Bound: ≤{p?.calibrated_error_bound_deg?.toFixed(1) ?? "4.9"}°
                  </div>
                </div>
                <div className="relative w-[64px] h-[64px] flex items-center justify-center shrink-0">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path className="text-lacquer-red" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray={`${confPct}, 100`} strokeLinecap="round" strokeWidth="4" />
                  </svg>
                  <span className="font-telemetry-sm font-bold text-ink-charcoal z-10">{confPct}%</span>
                </div>
              </div>

              {/* Card 4: Required Autonomy Level */}
              <div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-container-padding flex flex-col justify-between h-[130px] shadow-sm">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Required Autonomy Level</h3>
                <div className={`px-3 py-1.5 rounded self-start flex items-center gap-2 border ${
                  autoLevel === "AUTONOMOUS" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-800" :
                  autoLevel === "acknowledge" ? "bg-amber-500/10 border-amber-500/30 text-amber-800" :
                  "bg-lacquer-red/10 border-lacquer-red/30 text-lacquer-red"
                }`}>
                  <span className={`w-2 h-2 rounded-full ${autoLevel === "AUTONOMOUS" ? "bg-emerald-600" : autoLevel === "acknowledge" ? "bg-amber-600" : "bg-lacquer-red"}`}></span>
                  <span className="font-telemetry-md font-bold tracking-wider uppercase text-xs">{autoLevel}</span>
                </div>
                <div className="text-[10px] font-label-caps text-on-surface-variant truncate">
                  {cons?.autonomy_reasons && cons.autonomy_reasons.length > 0 ? cons.autonomy_reasons[0] : "All evidence channels in distribution"}
                </div>
              </div>
            </section>

            {/* Trajectory & Visualizer Frame */}
            <section className="grid grid-cols-1 xl:grid-cols-12 gap-gutter min-h-[440px]">
              <div className="xl:col-span-8 bg-surface-container-lowest rounded-lg border border-outline-variant flex flex-col overflow-hidden shadow-sm">
                <div className="px-container-padding py-3 border-b border-outline-variant flex justify-between items-center bg-surface-container">
                  <h2 className="font-label-caps text-label-caps text-ink-charcoal uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] opacity-70">scatter_plot</span>
                    Proximity Trajectory (CWH Frame)
                  </h2>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-[2px] bg-moss-accent"></span>
                      <span className="font-telemetry-sm text-on-surface-variant text-xs">Propagated Path</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-[2px] bg-black/30"></span>
                      <span className="font-telemetry-sm text-on-surface-variant text-xs">Clohessy-Wiltshire Bounds</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 relative bg-surface-container-lowest p-8 flex flex-col border-b border-outline-variant min-h-[280px]">
                  <div className="absolute top-4 left-8 font-telemetry-sm text-on-surface-variant opacity-60 text-xs font-mono">R-bar (m): {p?.t ? p.t[0].toFixed(2) : "50.00"}</div>
                  <div className="absolute bottom-6 right-8 font-telemetry-sm text-on-surface-variant opacity-60 text-xs font-mono">V-bar (m): {p?.t ? p.t[1].toFixed(2) : "5.00"}</div>

                  <div className="flex-1 border-l border-b border-outline-variant relative w-full h-full">
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                      <line stroke="rgba(0,0,0,0.06)" strokeWidth="1" x1="0" x2="100%" y1="25%" y2="25%" />
                      <line stroke="rgba(0,0,0,0.06)" strokeWidth="1" x1="0" x2="100%" y1="50%" y2="50%" />
                      <line stroke="rgba(0,0,0,0.06)" strokeWidth="1" x1="0" x2="100%" y1="75%" y2="75%" />
                      <line stroke="rgba(0,0,0,0.06)" strokeWidth="1" x1="25%" x2="25%" y1="0" y2="100%" />
                      <line stroke="rgba(0,0,0,0.06)" strokeWidth="1" x1="50%" x2="50%" y1="0" y2="100%" />
                      <line stroke="rgba(0,0,0,0.06)" strokeWidth="1" x1="75%" x2="75%" y1="0" y2="100%" />

                      {/* Simulated Trajectory Paths */}
                      <path d="M 10 180 Q 200 120, 500 40" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M 10 180 Q 220 100, 520 20" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M 10 180 Q 180 140, 480 60" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Active Mean Trajectory */}
                      <path d="M 10 180 Q 200 120, 500 40" fill="none" stroke="#5C6300" strokeLinecap="round" strokeWidth="3" />
                      <circle cx="500" cy="40" fill="#5C6300" r="5" />
                      <circle cx="500" cy="40" fill="none" opacity="0.4" r="14" stroke="#5C6300" strokeWidth="1.5" className="animate-ping" />
                    </svg>
                  </div>
                </div>

                <div className="bg-surface-container p-4 flex flex-col justify-between border-t border-outline-variant/60">
                  <div className="flex justify-between items-center">
                    <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-xs">
                      Active Safety Channel Status
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className={p?.physics_consistent ? "text-emerald-700 font-bold" : "text-rose-600 font-bold"}>
                        Physics Cross-Check: {p?.physics_consistent ? "CONSISTENT" : "VIOLATION"}
                      </span>
                      <span>•</span>
                      <span className={p?.is_in_distribution ? "text-emerald-700 font-bold" : "text-rose-600 font-bold"}>
                        OOD: {p?.is_in_distribution ? "IN-DIST" : "OUT-OF-DIST"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Decision Event Stream */}
              <div className="xl:col-span-4 bg-surface-container-lowest rounded-lg border border-outline-variant flex flex-col overflow-hidden shadow-sm">
                <div className="px-container-padding py-3 border-b border-outline-variant flex justify-between items-center bg-surface-container">
                  <h2 className="font-label-caps text-label-caps text-ink-charcoal uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] opacity-70">terminal</span>
                    Live Decision Ledger
                  </h2>
                  <span className="font-mono text-xs text-on-surface-variant">{events.length} events</span>
                </div>

                <div className="flex-1 p-3 overflow-y-auto max-h-[360px] custom-scrollbar flex flex-col gap-2 font-mono text-xs">
                  {events.length === 0 ? (
                    <div className="text-center py-8 text-on-surface-variant">Waiting for telemetry stream...</div>
                  ) : (
                    events.slice(-15).reverse().map((ev, idx) => (
                      <div key={idx} className="p-2 rounded bg-surface-container-low border border-outline-variant/40 flex flex-col gap-1">
                        <div className="flex justify-between text-[10px] text-on-surface-variant font-bold">
                          <span className="text-lacquer-red">{ev.channel}</span>
                          <span>{ev.time}</span>
                        </div>
                        <div className="text-ink-charcoal break-words">{ev.summary}</div>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-3 bg-surface-container border-t border-outline-variant/60">
                  <button
                    onClick={handleEmergencyStop}
                    disabled={stopLoading}
                    className="w-full bg-lacquer-red text-white py-2.5 rounded font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-sm font-bold disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-[18px]">warning</span>
                    {stopLoading ? "ABORTING..." : "EMERGENCY HOLD / ABORT"}
                  </button>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
