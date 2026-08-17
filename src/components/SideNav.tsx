import { Link } from "@tanstack/react-router";

const BRAND_MARK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAu2A7s5WC1UFBZuwyw0i4gi9gpIohi9zxgniq9uUguHVbdD-dgSezK_z66YrRSmHOETD4_6YK5TN-hcC2vbe18pXBwLh4jI9FKzfivTgslHHe1b_x8akniyUrZvd3H_WdITZ6ksp7ihIpWwbNXI3foVA8k2iy7agZeVYoMv_IWYHApMAFjAfy3Qe-gk1A4v0HQhjjiBuPRxoGSqk07iE4Y_8lwKDZ6n5R2LSShUucNe0G4tiIBfZMRH09FKb834T_yCg";

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
  return (
    <nav className="bg-paper-surface h-screen w-64 fixed left-0 top-0 border-r border-on-surface-variant flex flex-col py-margin-desktop z-50">
      <div className="px-gutter mb-12 flex flex-col items-start gap-4">
        <img
          alt="SYMBIOSIS brand mark"
          className="w-16 h-auto grayscale opacity-80 mix-blend-multiply"
          src={BRAND_MARK}
        />
        <div>
          <h1 className="font-headline-md text-headline-md text-lacquer-red tracking-widest uppercase">
            SYMBIOSIS
          </h1>
          <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">
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

      <div className="px-gutter mt-auto pt-8 border-t border-on-surface-variant/30">
        <button className="w-full bg-lacquer-red text-paper-surface font-label-caps text-label-caps py-3 uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2">
          INITIATE PROTOCOL
          <span className="material-symbols-outlined text-[16px]">terminal</span>
        </button>
      </div>
    </nav>
  );
}
