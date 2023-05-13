import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import { ChatPage, HomePage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Route>
    </Routes>
  );
};

export default App;
