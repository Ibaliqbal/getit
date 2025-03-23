import { ReactNode } from "react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const LobbyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header showAuthButtons />
      {children}
      <Footer />
    </main>
  );
};

export default LobbyLayout;
