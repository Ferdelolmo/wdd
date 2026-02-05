import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { InstallPrompt } from "@/components/InstallPrompt";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Invitation from "./pages/Invitation";
import Avila from "./pages/Avila";
import Sicilia from "./pages/Sicilia";
import More from "./pages/More";
import Dictionary from "./pages/Dictionary";
import Speeches from "./pages/Speeches";
import Activities from "./pages/Activities";
import Team from "./pages/Team";
import Soundtrack from "./pages/Soundtrack";
import Menu from "./pages/Menu";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <InstallPrompt />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/invite/:slug" element={<Invitation />} />
            <Route path="/Avila" element={<Avila />} />
            <Route path="/Sicilia" element={<Sicilia />} />
            <Route path="/more" element={<More />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/speeches" element={<Speeches />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/team" element={<Team />} />
            <Route path="/soundtrack" element={<Soundtrack />} />
            <Route path="/menu" element={<Menu />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
