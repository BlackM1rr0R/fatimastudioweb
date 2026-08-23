import React from "react";
import "./App.css";
import { routeArr } from "./routes";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Wrapper from "./components/UI/wrapper";
import PropsWrapper from "./components/UI/propswrapper";
import ScrollProgress from "./components/UI/scrollprogress";
import { pageTransition } from "./animations";

// Routes live in their own component so they can read useLocation() — that
// key is what lets AnimatePresence play an exit animation on navigation.
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routeArr.map((item) => (
          <Route
            path={item.path}
            key={item.id}
            element={
              <Wrapper>
                <PropsWrapper>
                  <Header />
                  <motion.main
                    initial={pageTransition.initial}
                    animate={pageTransition.animate}
                    exit={pageTransition.exit}
                  >
                    <item.component />
                  </motion.main>
                  <Footer />
                </PropsWrapper>
              </Wrapper>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    // reducedMotion="user" honours the OS "reduce motion" setting for everyone.
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollProgress />
        <AnimatedRoutes />
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
