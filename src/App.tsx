import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Invitation from "./pages/Invitation";
import Avila from "./pages/Avila";
import Sicilia from "./pages/Sicilia";
import More from "./pages/More";
import Dictionary from "./pages/Dictionary";
import Speeches from "./pages/Speeches";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/invite/:slug" element={<Invitation />} />
            <Route path="/Avila" element={<Avila />} />
            <Route path="/Sicilia" element={<Sicilia />} />
            <Route path="/more" element={<More />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/speeches" element={<Speeches />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
