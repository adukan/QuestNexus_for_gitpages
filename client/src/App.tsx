import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import React from "react";
import { GameProvider } from "@/context/GameContext";
import Home from "@/pages/home";
import Game from "@/pages/game";
import { useState, useEffect } from "react";

// Custom hook for GitHub Pages compatibility
const useHashLocation = () => {
  const [location, setLocation] = useState(
    window.location.hash.replace("#", "") || "/"
  );

  useEffect(() => {
    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "/";
      setLocation(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Navigate function that updates the hash
  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [location, navigate];
};

function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GameProvider children={
          <>
            <Toaster />
            <Router />
          </>
        } />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
