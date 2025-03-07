'use client';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 text-gray-900">
      <div className="max-w-2xl text-center bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Hi! Welcome to My Personal Website</h1>
        <p className="text-lg mb-4">
          This is where I document my journey in coding, share insights, and showcase my expertise.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Technologies I Use</h2>
        <ul className="list-disc list-inside text-lg">
          <li><strong>Next.js</strong> – A React framework for fast and efficient web development.</li>
          <li><strong>Tailwind CSS</strong> – A utility-first CSS framework for styling.</li>
          <li><strong>Markdown</strong> – For writing blog posts in a simple format.</li>
          <li><strong>Vercel</strong> – For easy and automatic deployments.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">What to Expect</h2>
        <p className="text-lg">
          I&apos;ll be writing about:
          <ul className="list-disc list-inside mt-2">
            <li>How I would approach learning coding if I were starting over.</li>
            <li>How to think in problem-solving terms.</li>
            <li>How to start and structure a project.</li>
          </ul>
        </p>
      </div>
    </main>
  );
}
