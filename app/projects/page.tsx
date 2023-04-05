import Wee, { GitHubIcon } from 'components/icons';
import type { Metadata } from 'next';
import Github from 'next-auth/providers/github';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'List of all my projects',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
      <Link
        href="https://wee.vin"
        target="_blank"
        className="hover:cursor-pointer"
      >
        <div className="flex flex-col md:flex-row md:space-x-5 items-baseline md:items-center mb-10">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-neutral-800 dark:text-neutral-200 ">
              <b className="self-end">Wee </b>
              <Wee />
            </div>
            <p className="prose prose-quoteless prose-neutral dark:prose-invert">
              Link management platform empowering marketing teams to maximize
              reach and minimize effort.
            </p>
            <div className="flex">
              <p className="border rounded-md px-2.5 py-0.5 text-sm">Next.js</p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        href="https://medium-summarizer.vercel.app/"
        target="_blank"
        className="hover:cursor-pointer"
      >
        <div className="flex flex-col md:flex-row md:space-x-5 items-baseline md:items-center">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-neutral-800 dark:text-neutral-200 ">
              <b className="self-end">Medium summarizer</b>
              <GitHubIcon />
            </div>
            <p className="prose prose-quoteless prose-neutral dark:prose-invert">
              This is a Medium Summarize App that uses OpenAI's GPT-3.5 language
              model to summarize medium articles. It is built with Next.js 13,
              Tailwind CSS, ui.shadcn and deployed on Vercel Edge Function.
            </p>
            <div className="flex space-x-5">
              <p className="border rounded-md px-2.5 py-0.5 text-sm">Next.js</p>
              <p className="border rounded-md px-2.5 py-0.5 text-sm">
                Tailwind
              </p>
              <p className="border rounded-md px-2.5 py-0.5 text-sm">
                Vercel edge function
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
