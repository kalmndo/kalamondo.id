import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'List of all my projects',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
      <div className="flex flex-col md:flex-row p-4 space-x-5 overflow-hidden hover:cursor-pointer">
        <img
          src="https://wee.vin/_static/logo.svg"
          alt="Preview"
          className="md:w-2/12 h-20"
        />
        <div className="space-y-2">
          <b className="">Wee </b>
          <p className="prose prose-quoteless prose-neutral dark:prose-invert">
            Link management platform empowering marketing teams to maximize
            reach and minimize effort. Schedule, manage, track and optimize your
            digital marketing campaigns with ease.
          </p>
          <div className="flex">
            <p className="border rounded-md px-2.5 py-0.5 text-sm">Next.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}
