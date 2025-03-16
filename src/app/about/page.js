import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Alberto van Oldenbarneveld</title>
        <meta name="description" content="About Alberto van Oldenbarneveld" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          Hi! I'm Alberto. I'm a frontend developer in progress and a lawyer. 
          I created this site to document my coding journey and share insights.
        </p>
      </main>
    </>
  );
}
