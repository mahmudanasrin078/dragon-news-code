import React from "react";
import { Outlet, useNavigate, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/Homelayout/LeftAside";
import RightAside from "../components/Homelayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header />
        {import.meta.env.VITE_name}
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
          <Navbar className="w-11/12 mx-auto my-3"></Navbar>
        </section>
      </header>
      <main className="w-11/12 mx-auto my-3 grid  grid-cols-12 gap-5">
        <aside className=" col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {state == "loading" ? <Loading /> : <Outlet></Outlet>}
        </section>

        <aside className=" col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
