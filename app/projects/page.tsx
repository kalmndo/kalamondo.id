import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'List of all my projects',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
      <a className="hover:cursor-pointer">
        <img
          src="https://wee.vin/_static/logo.svg"
          alt="Preview"
          className="h-20"
        />
        <div className="space-y-2">
          <b className="">Wee </b>
          <p className="prose prose-quoteless prose-neutral dark:prose-invert">
            Link management platform empowering marketing teams to maximize
            reach and minimize effort.
          </p>
          <div className="flex">
            <p className="border rounded-md px-2.5 py-0.5 text-sm">Next.js</p>
          </div>
        </div>
      </a>
    </section>
  );
}
