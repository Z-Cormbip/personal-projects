import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import StoreLocator from "./pages/StoreLocator";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/store-locator"
        element={
          <Layout>
            <StoreLocator />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
