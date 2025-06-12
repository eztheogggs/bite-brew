import { Toaster } from "sonner";
import { CoffeeShop } from "./components/CoffeeShop";

export default function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200">
      <CoffeeShop />
      <Toaster theme="system" />
    </div>
  );
}