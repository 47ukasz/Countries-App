import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import SearchProvider from "../features/Search/SearchContext";
import FilterProvider from "../features/Filter/FilterContext";
import Loader from "./Loader";
import { useEffect } from "react";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    document.body.classList.toggle("sticky-body");
  }, [isLoading]);

  return (
    <SearchProvider>
      <FilterProvider>
        <div className="relative">
          {isLoading && <Loader />}
          <Header />
          <main className="w-auto px-3 py-4 sm:px-8 sm:py-6 lg:px-20">
            <Outlet />
          </main>
        </div>
      </FilterProvider>
    </SearchProvider>
  );
}

export default AppLayout;
