import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import TasksProvider from "./contexts/TasksProvider";
import TaskBoard from "./tasks/TaskBoard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <TasksProvider>
      <Navbar />
      <HeroSection />
      <TaskBoard />
      <Footer />
      <ToastContainer />
    </TasksProvider>
  );
}
