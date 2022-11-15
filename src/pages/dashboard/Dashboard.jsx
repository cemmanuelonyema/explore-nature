import React, { Fragment } from "react";
import { Header } from "../../components/layout/header/Header";
import { SideNav } from "../../components/layout/nav/Nav";
import { HotelView } from "../../components/sections/dashboard/hotelView/HotelView";
import "./dashboard.scss";

export const Dashboard = () => {
  return (
    <main className="dashboard">
      <Header />
      <section className="dashboard__content">
        <SideNav />
        <HotelView />
      </section>
    </main>
  );
};
