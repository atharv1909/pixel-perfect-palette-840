import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";
import { SystemHealthHeader } from "@/components/SystemHealthHeader";
import { useMissionControl } from "@/hooks/useMissionControl";
import { runScenario } from "@/lib/api";
import { useState } from "react";

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
  const { status, refreshAll } = useMissionControl();
  const [runningScenario, setRunningScenario] = useState<string | null>(null);
  const [speed, setSpeed] = useState<number>(5.0);

  const activeScenario = status?.current_scenario;
  const isScenarioRunning = status?.scenario_running || runningScenario !== null;

  const handleLaunchScenario = async (name: string) => {
    setRunningScenario(name);
    try {
      await runScenario(name, speed);
      await refreshAll();
    } catch (e) {
      console.error("Scenario launch failed", e);
    } finally {
      setTimeout(() => setRunningScenario(null), 3000);
    }
  };

  const scenarios = [
    {
      id: "nominal",
      title: "Nominal Approach",
      desc: "Standard nominal rendezvous trajectory from 50m to 10m range under clear lighting.",
      icon: "flight_takeoff",
      iconColor: "text-emerald-700",
      accent: "border-emerald-500/30",
    },
    {
      id: "thermal",
      title: "Thermal Failure Cascade",
      desc: "Radiator loop 2 failure leading to battery overheating and ECLSS load shedding. Tests root cause isolation.",
      icon: "thermostat",
      iconColor: "text-lacquer-red",
      accent: "border-lacquer-red/30",
    },
    {
      id: "perception",
      title: "Perception Glare & OOD",
      desc: "Solar glare flare and non-standard target geometry. Tests Mahalanobis OOD detector and PnP crosscheck.",
      icon: "visibility_off",
      iconColor: "text-amber-700",
      accent: "border-amber-500/30",
    },
    {
      id: "perfect_storm",
      title: "Perfect Storm Multi-Failure",
      desc: "Simultaneous thermal degradation, sensor occlusion, and communication dropout. Tests Armstrong Protocol.",
      icon: "storm",
      iconColor: "text-rose-700",
      accent: "border-rose-500/30",
    },
  ];

  return (
    <div className="bg-paper-surface text-ink-charcoal min-h-screen flex selection:bg-lacquer-red selection:text-white font-body-md">
      <SideNav />
      <div className="md:ml-64 flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Live Health Header */}
        <SystemHealthHeader title="Orbital Simulation & Stress Testbed" />

        <main className="p-gutter h-[calc(100vh-64px)] overflow-y-auto w-full custom-scrollbar">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter relative shadow-sm">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-outline-variant/60 pb-4">
              <div>
                <h2 className="text-xl font-bold text-ink-charcoal mb-1">
                  Autonomous Rendezvous Simulation Testbed
                </h2>
                <p className="text-xs font-mono text-on-surface-variant">
                  Execute synthetic telemetry scenarios across the 8-channel safety architecture.
                </p>
              </div>

              {/* Simulation Speed Control */}
              <div className="flex items-center gap-3 bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/60 font-mono text-xs">
                <span className="text-on-surface-variant">Speed:</span>
                {[1.0, 5.0, 10.0].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`px-2 py-0.5 rounded font-bold transition-colors ${
                      speed === s ? "bg-lacquer-red text-white" : "text-ink-charcoal hover:bg-surface-container-high"
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>

            {/* Active Simulation Status Banner */}
            {isScenarioRunning && (
              <div className="mb-6 p-4 rounded-xl bg-sim-violet/10 border border-sim-violet/30 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-sim-violet animate-ping"></span>
                  <span className="font-bold text-sim-violet uppercase">
                    Simulation Running: {activeScenario || runningScenario} ({speed}x real-time)
                  </span>
                </div>
                <span className="text-on-surface-variant">Broadcasting to Redis Bus (CH_PERCEPTION, CH_COGNITION)</span>
              </div>
            )}

            {/* 4 Scenario Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter mb-gutter">
              {scenarios.map((sc) => (
                <div
                  key={sc.id}
                  className={`bg-surface-container-low rounded-xl border ${sc.accent} p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className={`material-symbols-outlined text-3xl ${sc.iconColor}`}>{sc.icon}</span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-bold">
                        {sc.id}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-ink-charcoal mb-2">{sc.title}</h3>
                    <p className="text-xs text-on-surface-variant font-mono leading-relaxed mb-6">
                      {sc.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleLaunchScenario(sc.id)}
                    disabled={isScenarioRunning}
                    className="w-full py-2.5 bg-paper-surface border border-outline-variant text-ink-charcoal text-xs font-mono font-bold uppercase rounded hover:border-lacquer-red hover:text-lacquer-red hover:bg-surface-container transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                    {runningScenario === sc.id ? "LAUNCHING..." : "RUN SCENARIO"}
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/60 font-mono text-xs text-on-surface-variant">
              <strong className="text-ink-charcoal">Digital Twin Architecture:</strong> Scenarios synthesize Clohessy-Wiltshire state propagation, thermal dissipation dynamics, 10,000-D hyperdimensional situation vectors, and optical camera noise for full closed-loop multi-agent consensus testing.
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
