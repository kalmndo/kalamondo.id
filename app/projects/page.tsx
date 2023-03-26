import Wee from 'components/icons';
import type { Metadata } from 'next';
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
        <div className="flex flex-col md:flex-row md:space-x-5 items-baseline md:items-center">
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
    </section>
  );
}
