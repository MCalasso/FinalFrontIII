/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";

export const estadoInicial = {
  tema: {
    claro: {
      nav: "#4caf50",
      home: "#98e29a",
      footer: "#4caf50",
      font: "#1b2021",
    },
    oscuro: {
      nav: "#3b2722a5",
      home: "#39353487",
      footer: "#3b2722a5",
      font: "#1b2021",
    },
  },
};

export const ContextGlobal = createContext(estadoInicial);
