import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { SkipLink } from "./components/layout/SkipLink";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const sectionId = hash.startsWith("#") ? hash.slice(1) : "";
    const target = sectionId ? document.getElementById(sectionId) : null;

    if (target && pathname === "/") {
      target.scrollIntoView();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <SkipLink />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
