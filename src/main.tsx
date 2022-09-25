import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import thirdweb provider
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import "./index.css";

const activeChainId = ChainId.Goerli;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
