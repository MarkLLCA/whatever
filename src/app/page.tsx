import Header from "./components/Header";
import Body from "./components/Body";

import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>bahala na</title>
      </Head>
      <main className="flex flex-col min-h-screen bg-gray-200 dark:bg-neutral-900">
        <Header />
        <Body />
      </main>
    </>
  );
}
