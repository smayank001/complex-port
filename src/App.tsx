import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LoadingScreen } from "@/components/effects/LoadingScreen";

// Lazy load pages for performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Audit = lazy(() => import("./pages/Audit"));
const WebsiteAudit = lazy(() => import("./pages/WebsiteAudit"));
const MediaGallery = lazy(() => import("./pages/MediaGallery"));

// Service Pages
const WebsiteDevelopment = lazy(
  () => import("./pages/services/WebsiteDevelopment")
);
const AppDevelopment = lazy(() => import("./pages/services/AppDevelopment"));
const UIUXDesign = lazy(() => import("./pages/services/UIUXDesign"));
const Ecommerce = lazy(() => import("./pages/services/EcommerceDevelopment"));
const DigitalMarketing = lazy(
  () => import("./pages/services/DigitalMarketing")
);
const LeadGeneration = lazy(() => import("./pages/services/LeadGeneration"));
const ORM = lazy(() => import("./pages/services/ORM"));
const SEO = lazy(() => import("./pages/services/SEO"));
const PPC = lazy(() => import("./pages/services/PPC"));
const VideoEditing = lazy(() => import("./pages/services/VideoEditing"));
const ContentWriting = lazy(() => import("./pages/services/ContentWriting"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/website-audit" element={<WebsiteAudit />} />
            <Route path="/media-gallery" element={<MediaGallery />} />

            {/* Service Routes */}
            <Route
              path="/services/website-development"
              element={<WebsiteDevelopment />}
            />
            <Route
              path="/services/app-development"
              element={<AppDevelopment />}
            />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route
              path="/services/ecommerce-development"
              element={<Ecommerce />}
            />
            <Route
              path="/services/digital-marketing"
              element={<DigitalMarketing />}
            />
            <Route
              path="/services/lead-generation"
              element={<LeadGeneration />}
            />
            <Route
              path="/services/online-reputation-management"
              element={<ORM />}
            />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/ppc" element={<PPC />} />
            <Route path="/services/video-editing" element={<VideoEditing />} />
            <Route
              path="/services/content-writing"
              element={<ContentWriting />}
            />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
