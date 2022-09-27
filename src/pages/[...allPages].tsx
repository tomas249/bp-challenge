import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import MainLayout from "@layouts/MainLayout";
import WithCover from "@layouts/WithCover";

const AllPages: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WithCover
        title={
          Array.isArray(router.query.title)
            ? ""
            : (router.query.title as string)
        }
      >
        <></>
      </WithCover>
    </MainLayout>
  );
};

export default AllPages;
