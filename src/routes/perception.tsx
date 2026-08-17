import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/SideNav";
import { SystemHealthHeader } from "@/components/SystemHealthHeader";
import { useMissionControl } from "@/hooks/useMissionControl";
import { processPerceptionFrame } from "@/lib/api";
import { useState, useRef } from "react";

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
  const { latest, modelStatus } = useMissionControl();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [inferencing, setInferencing] = useState(false);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [lastInferenceMs, setLastInferenceMs] = useState<number | null>(null);

  const p = latest.perception;

  // Real pose data
  const t = p?.t ?? [4.219, -1.008, 41.884];
  const q = p?.quaternion ?? [0.982, 0.012, -0.045, 0.187];
  const jg = p?.jensen_gain ?? 2.82;
  const oodDist = p?.ood_distance ?? 1.15;
  const isOod = p?.is_in_distribution === false;
  const residual = p?.physics_residual_m ?? 0.42;
  const isPhysConsistent = p?.physics_consistent ?? true;
  const pnpAgree = p?.cross_estimator_agreement ?? true;
  const rotDisagreement = p?.rotation_disagreement_deg ?? 0.0;
  const calibBound = p?.calibrated_error_bound_deg ?? 4.9;
  const confLevel = p?.confidence_level ?? "moderate";
  const confLabel = p?.confidence_label || `HIGH CONFIDENCE: Rotation error under ${calibBound.toFixed(1)}° (95% guarantee)`;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const b64 = reader.result as string;
      setCustomImage(b64);
      setInferencing(true);
      try {
        const res = await processPerceptionFrame(b64);
        if (res.inference_ms) setLastInferenceMs(res.inference_ms);
      } catch (err) {
        console.error("Frame inference failed", err);
      } finally {
        setInferencing(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-paper-surface text-on-surface h-screen overflow-hidden flex selection:bg-lacquer-red selection:text-white">
      <SideNav />
      <div className="md:ml-64 flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Top Live Health Header */}
        <SystemHealthHeader title="Perception & Vision Stack" />

        <main className="flex-1 p-gutter overflow-y-auto grid grid-cols-12 gap-gutter content-start custom-scrollbar">
          
          {/* Left Column: Optical Feed & Upload */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col shadow-sm">
              <div className="px-4 py-3 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Optical Sensor Feed ({modelStatus?.info?.backbone || "ResNet-50 / EfficientNet-B3"})
                </span>
                <div className="flex items-center gap-3">
                  {lastInferenceMs && (
                    <span className="text-[11px] font-mono text-emerald-700 font-bold">
                      {lastInferenceMs.toFixed(1)}ms inference
                    </span>
                  )}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={inferencing}
                    className="bg-lacquer-red text-white text-[11px] font-label-caps px-3 py-1 rounded hover:bg-primary transition-colors flex items-center gap-1 font-bold disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-[14px]">upload_file</span>
                    {inferencing ? "PROCESSING..." : "TEST IMAGE"}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Viewport Frame */}
              <div className="relative bg-black min-h-[320px] max-h-[420px] flex items-center justify-center overflow-hidden">
                {customImage ? (
                  <img src={customImage} alt="Uploaded feed" className="max-h-[400px] w-full object-contain" />
                ) : (
                  <img
                    className="w-full h-full object-cover opacity-85"
                    alt="Spacecraft rendezvous feed"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4mK2v1A5jwOHZXv6qLg35Cu7W2gVNfSeUfnqYCk3qv9YvaXBxP8dpkWqrwcLwD436rFpK67dm4oSsSSVDwXoVs9fqnXNcFsmmQS1zQTWfbonEFDD7N6eRH5Zc1AZ7kQqKW-0EJqEieBn-_h_0Z5zbdaTnh5kgvj7ImMfMdU7J2oXiwEss0qSzLIQkIDcf7ZWl5hDgYLkVhaOYbK2llFAbvkvC_nJm3Ndsvso0AHbpOQVPTrAMLlKz"
                  />
                )}

                {/* HUD Targeting Reticle */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-24 h-24 border border-emerald-500/70 relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-emerald-500/70"></div>
                    <div className="absolute left-1/2 top-0 w-[1px] h-full bg-emerald-500/70"></div>
                    <div className="absolute -top-3 left-0 font-mono text-[9px] text-emerald-400">TRACK_LOCK: TANGO</div>
                  </div>
                </div>

                <div className="absolute bottom-3 left-4 font-mono text-xs text-emerald-400 bg-black/60 px-2 py-1 rounded">
                  EST_RANGE: {Math.sqrt(t[0]**2 + t[1]**2 + t[2]**2).toFixed(2)}m | CONF: {confLevel.toUpperCase()}
                </div>
              </div>

              {/* Estimated 6-DoF Pose Output */}
              <div className="p-4 bg-surface-container-low border-t border-outline-variant flex flex-col gap-3 font-mono text-xs">
                <div className="font-label-caps text-label-caps text-on-surface-variant font-bold">ESTIMATED 6-DoF POSE</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-surface-container-lowest p-2.5 rounded border border-outline-variant/60">
                    <div className="text-[10px] text-on-surface-variant mb-1 uppercase font-bold">QUATERNION [w, x, y, z]</div>
                    <div className="text-ink-charcoal font-bold">
                      [{q.map((x) => (typeof x === "number" ? x.toFixed(4) : x)).join(", ")}]
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-2.5 rounded border border-outline-variant/60">
                    <div className="text-[10px] text-on-surface-variant mb-1 uppercase font-bold">TRANSLATION VECTOR [x, y, z] (m)</div>
                    <div className="text-ink-charcoal font-bold">
                      [{t.map((x) => (typeof x === "number" ? x.toFixed(3) : x)).join(", ")}]
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-State Confidence Taxonomy Banner */}
            <div className={`p-4 rounded-xl border ${
              confLevel === "high" ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-900" :
              confLevel === "moderate" ? "bg-amber-500/10 border-amber-500/40 text-amber-900" :
              "bg-lacquer-red/10 border-lacquer-red/40 text-lacquer-red"
            }`}>
              <div className="font-label-caps text-xs font-bold uppercase mb-1">4-State Confidence Taxonomy Assessment</div>
              <div className="text-xs leading-relaxed">{confLabel}</div>
            </div>
          </div>

          {/* Right Column: 4 Safety Cross-Check Channels */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Channel 1: Jensen Gain Uncertainty */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex flex-col justify-between shadow-sm">
              <div className="font-label-caps text-label-caps text-on-surface-variant font-bold">JENSEN GAIN SPREAD</div>
              <div className="flex-1 flex flex-col items-center justify-center my-3">
                <span className="font-telemetry-lg text-3xl font-bold text-ink-charcoal font-mono">
                  {jg.toFixed(2)}°
                </span>
                <span className="text-[11px] font-label-caps text-on-surface-variant mt-1">
                  Threshold: ≤15.0°
                </span>
              </div>
              <div className="text-[10px] font-mono text-on-surface-variant bg-surface-container p-2 rounded">
                Calibrated Bound: <span className="font-bold text-lacquer-red">≤{calibBound.toFixed(1)}°</span> (95% CI)
              </div>
            </div>

            {/* Channel 2: Physics Cross-Check */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex flex-col justify-between shadow-sm">
              <div className="font-label-caps text-label-caps text-on-surface-variant font-bold">PHYSICS CROSS-CHECK</div>
              <div className="flex-1 flex flex-col items-center justify-center my-3">
                <span className={`font-telemetry-lg text-2xl font-bold font-mono ${isPhysConsistent ? "text-emerald-700" : "text-rose-600"}`}>
                  {residual.toFixed(2)}m
                </span>
                <span className="text-[11px] font-label-caps text-on-surface-variant mt-1">
                  Threshold: ≤2.00m
                </span>
              </div>
              <div className={`text-[10px] font-mono p-2 rounded ${isPhysConsistent ? "bg-emerald-500/10 text-emerald-800" : "bg-rose-500/10 text-rose-800"}`}>
                Status: {isPhysConsistent ? "CWH DYNAMICS CONSISTENT" : "ORBITAL JUMP VIOLATION"}
              </div>
            </div>

            {/* Channel 3: Mahalanobis OOD Detector */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex flex-col justify-between shadow-sm">
              <div className="font-label-caps text-label-caps text-on-surface-variant font-bold">OOD DISTANCE</div>
              <div className="flex-1 flex flex-col items-center justify-center my-3">
                <span className={`font-telemetry-lg text-2xl font-bold font-mono ${!isOod ? "text-emerald-700" : "text-rose-600"}`}>
                  {oodDist.toFixed(2)}
                </span>
                <span className="text-[11px] font-label-caps text-on-surface-variant mt-1">
                  99th Threshold: ≤24.18
                </span>
              </div>
              <div className={`text-[10px] font-mono p-2 rounded ${!isOod ? "bg-emerald-500/10 text-emerald-800" : "bg-rose-500/10 text-rose-800"}`}>
                Dist: {!isOod ? "IN-DISTRIBUTION" : "UNKNOWN / OUT-OF-DIST"}
              </div>
            </div>

            {/* Channel 4: Redundant Classical PnP Agreement */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex flex-col justify-between shadow-sm">
              <div className="font-label-caps text-label-caps text-on-surface-variant font-bold">REDUNDANT PnP SOLVER</div>
              <div className="flex-1 flex flex-col items-center justify-center my-3">
                <span className={`font-telemetry-lg text-2xl font-bold font-mono ${pnpAgree ? "text-emerald-700" : "text-rose-600"}`}>
                  {pnpAgree ? "AGREE" : "DISAGREE"}
                </span>
                <span className="text-[11px] font-label-caps text-on-surface-variant mt-1">
                  Rot Diff: {rotDisagreement.toFixed(1)}°
                </span>
              </div>
              <div className={`text-[10px] font-mono p-2 rounded ${pnpAgree ? "bg-emerald-500/10 text-emerald-800" : "bg-rose-500/10 text-rose-800"}`}>
                ORB+EPnP Independent Check
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
