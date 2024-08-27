import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store/index.ts";
import ErrorBoundary from "./pages/Error/ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster position="top-right" />
    </ErrorBoundary>
  </Suspense>
);
