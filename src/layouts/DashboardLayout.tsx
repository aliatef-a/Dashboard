import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Header from "../components/Headers/Header";
import { Suspense, useEffect, useState } from "react";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Scroll to top on pathname change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isLoginPage = pathname.toLowerCase().startsWith("/login"); // Ensure case-insensitivity and handle query params

  return (
    <div className="flex h-auto">
      {!isLoginPage && (
        <div className="bg-white ">
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
      <Suspense fallback={
        <div className="w-full flex flex-col items-center justify-center min-h-screen">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-3 text-gray-600 text-lg">Loading</p>
        </div>
      }>
        <main className="flex-1">
          {!isLoginPage && <Header isOpen={isOpen} setIsOpen={setIsOpen} />}
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
