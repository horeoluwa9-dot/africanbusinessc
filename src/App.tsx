import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import Programs from "./pages/Programs.tsx";
import SimulationLabs from "./pages/SimulationLabs.tsx";
import Faculty from "./pages/Faculty.tsx";
import Community from "./pages/Community.tsx";
import Partnerships from "./pages/Partnerships.tsx";
import StudentDashboard from "./pages/StudentDashboard.tsx";
import FacultyDashboard from "./pages/FacultyDashboard.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/simulation-labs" element={<SimulationLabs />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/community" element={<Community />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
