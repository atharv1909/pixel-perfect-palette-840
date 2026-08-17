import { Link, useNavigate } from "@tanstack/react-router";
import { startOrchestrator, runScenario } from "@/lib/api";
import { useState } from "react";

const BRAND_MARK = "/faraway-logo.png";

const LINKS = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/overview", label: "Overview", icon: "dashboard" },
  { to: "/perception", label: "Perception", icon: "visibility" },
  { to: "/cognition", label: "Cognition", icon: "psychology" },
  { to: "/action", label: "Action", icon: "precision_manufacturing" },
  { to: "/orchestrator", label: "Orchestrator", icon: "settings_input_component" },
  { to: "/audit", label: "Audit Log", icon: "history_edu" },
  { to: "/simulation", label: "Simulation", icon: "biotech" },
] as const;

export function SideNav() {
  const navigate = useNavigate();
  const [initiating, setInitiating] = useState(false);

  const handleInitiateProtocol = async () => {
    setInitiating(true);
    try {
      await startOrchestrator();
      await runScenario("nominal", 5.0);
      navigate({ to: "/overview" });
    } catch (e) {
      console.error(e);
      navigate({ to: "/overview" });
    } finally {
      setInitiating(false);
    }
  };

  return (
    <nav className="bg-paper-surface h-screen w-64 fixed left-0 top-0 border-r border-on-surface-variant flex flex-col py-margin-desktop z-50">
      <div className="px-gutter mb-6 flex flex-col items-start gap-3">
        <Link to="/" className="block hover:opacity-90 transition-opacity">
          <img
            alt="FARAWAY brand mark"
            className="w-48 h-auto rounded-md shadow-md border border-outline-variant/60 hover:scale-105 transition-transform"
            src={BRAND_MARK}
          />
        </Link>
        <div>
          <h1 className="font-headline-md text-headline-md font-bold text-lacquer-red tracking-widest uppercase">
            SYMBIOSIS
          </h1>
          <p className="font-label-caps text-label-caps text-on-surface-variant mt-0.5 font-bold tracking-wider text-xs">
            MISSION CONTROL
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 flex flex-col gap-2 custom-scrollbar">
        {LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            activeOptions={{ exact: link.to === "/" }}
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-caps text-label-caps uppercase transition-colors duration-150 border-l-4 border-transparent"
            activeProps={{
              className:
                "flex items-center gap-3 px-4 py-3 text-lacquer-red border-l-4 border-lacquer-red bg-surface-container-low font-label-caps text-label-caps uppercase transition-colors duration-150",
            }}
          >
            <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </div>

      <div className="px-gutter mt-auto pt-6 border-t border-on-surface-variant/30">
        <button
          onClick={handleInitiateProtocol}
          disabled={initiating}
          className="w-full bg-lacquer-red text-paper-surface font-label-caps text-label-caps py-3 uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg font-bold disabled:opacity-50 active:scale-95"
        >
          {initiating ? "INITIALIZING..." : "INITIATE PROTOCOL"}
          <span className="material-symbols-outlined text-[16px]">
            {initiating ? "hourglass_empty" : "terminal"}
          </span>
        </button>
      </div>
    </nav>
  );
}
