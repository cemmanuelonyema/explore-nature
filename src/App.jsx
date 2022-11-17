import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
//pages
import { Layout } from "./Layout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Home } from "./pages/home/Home";
import { NotFound } from "./pages/notFound/NotFound";

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Fragment>
  );
};
