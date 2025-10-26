import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSpline from "./components/HeroSpline";
import AuthPanel from "./components/AuthPanel";
import DashboardCard from "./components/DashboardCard";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);

  const handleAuthenticate = (u) => {
    setUser(u);
  };

  const handleSignOut = () => setUser(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar isAuthed={!!user} onSignOut={handleSignOut} />
      <main className="flex-1">
        <HeroSpline />
        {!user ? (
          <AuthPanel onAuthenticate={handleAuthenticate} />
        ) : (
          <DashboardCard user={user} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
