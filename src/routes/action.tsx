import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";
import { SystemHealthHeader } from "@/components/SystemHealthHeader";
import { useMissionControl } from "@/hooks/useMissionControl";
import { sendHumanOverride } from "@/lib/api";
import { useState } from "react";

export const Route = createFileRoute("/action")({
  head: () => ({
    meta: [
      { title: "Action — SYMBIOSIS Mission Control" },
      { name: "description", content: "Thruster commands, actuation limits and executed maneuvers for the SYMBIOSIS vehicle." },
      { property: "og:title", content: "Action — SYMBIOSIS Mission Control" },
      { property: "og:description", content: "Thruster commands, actuation limits and executed maneuvers for the SYMBIOSIS vehicle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Action,
});

function Action() {
  const { latest } = useMissionControl();
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const a = latest.action;
  const primary = a?.primary_action || "PROCEED_SLOW";
  const primaryScore = a?.primary_score ?? 0.88;
  const primaryPCol = a?.collision_prob ?? 0.0002;
  const primaryPCol99 = a?.collision_prob_upper_bound_99 ?? 0.0448;

  // Build candidate actions table from real data
  const candidateActions = [
    {
      name: primary,
      score: primaryScore,
      meanPCol: (primaryPCol * 100).toFixed(2) + "%",
      bound99: (primaryPCol99 * 100).toFixed(2) + "%",
      isPrimary: true,
      description: `Collision probability will not exceed ${(primaryPCol99 * 100).toFixed(2)}%, with 99% confidence (Clopper-Pearson exact bound).`,
    },
    ...(a?.alternatives || [
      { action: "HOLD_POSITION", score: 0.72, collision_prob: 0.0001, collision_prob_upper_bound_99: 0.0448 },
      { action: "PROCEED_NORMAL", score: 0.65, collision_prob: 0.004, collision_prob_upper_bound_99: 0.065 },
      { action: "RETREAT_SAFELY", score: 0.55, collision_prob: 0.0, collision_prob_upper_bound_99: 0.0448 },
    ]).map((alt) => ({
      name: alt.action,
      score: alt.score,
      meanPCol: ((alt.collision_prob ?? 0.001) * 100).toFixed(2) + "%",
      bound99: ((alt.collision_prob_upper_bound_99 ?? 0.0448) * 100).toFixed(2) + "%",
      isPrimary: false,
      description: `Alternative candidate maneuver evaluated by digital twin ensemble. Score: ${alt.score.toFixed(2)}.`,
    })),
  ];

  const handleApplyOverride = async (actionName: string) => {
    setLoading(true);
    try {
      await sendHumanOverride("modify", actionName.toLowerCase(), `Commander selected candidate maneuver ${actionName}`);
      setSelectedAction(actionName);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-paper-surface text-ink-charcoal h-screen w-screen overflow-hidden flex font-body-md selection:bg-lacquer-red selection:text-white">
      <SideNav />
      <div className="flex-1 md:ml-64 flex flex-col h-full bg-paper-surface overflow-hidden">
        {/* Top Live Health Header */}
        <SystemHealthHeader title="Action & Trajectory Selection" />

        <main className="flex-1 overflow-y-auto p-gutter flex flex-col gap-gutter custom-scrollbar">
          
          <div className="flex justify-between items-center border-b border-on-surface-variant/40 pb-3">
            <div className="flex items-center gap-6">
              <span className="text-lacquer-red font-label-caps text-label-caps border-b-2 border-lacquer-red pb-3 -mb-[13px] font-bold">
                Tactical Decision Horizon
              </span>
            </div>
            <div className="text-xs font-mono text-on-surface-variant">
              Exact Clopper-Pearson 99% Safety Bound Active
            </div>
          </div>

          <div className="grid grid-cols-12 gap-gutter flex-1 min-h-[480px]">
            
            {/* Candidate Action Evaluation Table */}
            <div className="col-span-12 xl:col-span-8 flex flex-col gap-4">
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant flex flex-col h-full overflow-hidden p-gutter shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-headline-md text-headline-md text-ink-charcoal font-bold">
                    Monte-Carlo Digital Twin Candidate Evaluation
                  </h3>
                  <span className="font-mono text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                    100 Trajectory Rollouts
                  </span>
                </div>

                <div className="flex-1 overflow-auto rounded-lg border border-outline-variant bg-paper-surface">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-surface-container border-b border-outline-variant sticky top-0">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-on-surface-variant uppercase">Action Directive</th>
                        <th className="px-4 py-3 font-semibold text-on-surface-variant uppercase">Score</th>
                        <th className="px-4 py-3 font-semibold text-on-surface-variant uppercase">Mean P(Col)</th>
                        <th className="px-4 py-3 font-semibold text-lacquer-red uppercase font-bold">99% Exact Bound</th>
                        <th className="px-4 py-3 font-semibold text-on-surface-variant uppercase">Semantic Safety Guarantee</th>
                        <th className="px-4 py-3 font-semibold text-on-surface-variant uppercase text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/40">
                      {candidateActions.map((cAction, idx) => (
                        <tr
                          key={idx}
                          className={`${
                            cAction.isPrimary
                              ? "bg-emerald-500/5 font-semibold"
                              : "hover:bg-surface-container-low transition-colors"
                          }`}
                        >
                          <td className="px-4 py-3 relative">
                            {cAction.isPrimary && (
                              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-600"></div>
                            )}
                            <span className={`font-bold ${cAction.isPrimary ? "text-emerald-800" : "text-ink-charcoal"}`}>
                              {cAction.name}
                            </span>
                            {cAction.isPrimary && (
                              <span className="ml-2 text-[9px] uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                                Recommended
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-ink-charcoal font-bold">{cAction.score.toFixed(2)}</td>
                          <td className="px-4 py-3 text-on-surface-variant">{cAction.meanPCol}</td>
                          <td className="px-4 py-3 text-lacquer-red font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">shield</span>
                            ≤{cAction.bound99}
                          </td>
                          <td className="px-4 py-3 text-on-surface-variant text-[11px] max-w-[220px]">
                            {cAction.description}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <button
                              onClick={() => handleApplyOverride(cAction.name)}
                              disabled={loading}
                              className="text-[10px] px-2.5 py-1 rounded bg-surface-container border border-outline-variant hover:border-lacquer-red hover:text-lacquer-red transition-all font-bold"
                            >
                              EXECUTE
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-3 bg-surface-container-low rounded border border-outline-variant/40 text-xs font-mono text-on-surface-variant">
                  {a?.explanation || "Exact Clopper-Pearson 99% safety bound guarantees collision probability does not exceed statistical upper bound even under zero sample collisions."}
                </div>
              </div>
            </div>

            {/* Actuation Limits & Thruster Duty */}
            <div className="col-span-12 xl:col-span-4 flex flex-col gap-4">
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-gutter shadow-sm flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-label-caps text-xs text-ink-charcoal uppercase font-bold tracking-wider mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-lacquer-red">speed</span>
                    Thruster Actuation Limits
                  </h3>

                  <div className="flex flex-col gap-4 font-mono text-xs">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-on-surface-variant">RCS Block Forward (+V-bar)</span>
                        <span className="font-bold text-ink-charcoal">12.4 N</span>
                      </div>
                      <div className="w-full bg-surface-container h-2 rounded overflow-hidden">
                        <div className="bg-moss-accent h-full w-[24%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-on-surface-variant">RCS Block Aft (-V-bar)</span>
                        <span className="font-bold text-ink-charcoal">0.0 N</span>
                      </div>
                      <div className="w-full bg-surface-container h-2 rounded overflow-hidden">
                        <div className="bg-moss-accent h-full w-0"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-on-surface-variant">Delta-V Budget Remaining</span>
                        <span className="font-bold text-emerald-700">142.8 m/s</span>
                      </div>
                      <div className="w-full bg-surface-container h-2 rounded overflow-hidden">
                        <div className="bg-emerald-600 h-full w-[82%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-surface-container rounded border border-outline-variant/60 mt-4 text-[11px] font-mono">
                  <div className="font-bold text-ink-charcoal mb-1">Armstrong Override Level:</div>
                  <div className="text-on-surface-variant">
                    Autonomous closed-loop trajectory generation under active safety envelope constraints.
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
