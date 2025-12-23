import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
