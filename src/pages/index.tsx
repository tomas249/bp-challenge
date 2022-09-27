import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

import MainLayout from "@layouts/MainLayout";
import WithCover from "@layouts/WithCover";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WithCover title="Home Page">
        <div style={{ minHeight: "800px" }}></div>
      </WithCover>
    </MainLayout>
  );
};

export default Home;