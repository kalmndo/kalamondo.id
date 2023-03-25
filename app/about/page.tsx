import { ArrowIcon, GitHubIcon, InstagramIcon, TwitterIcon } from "components/icons";

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>Hi, I'm Adam Kalamondo. You can call me adam.</p>
        <p>
          I'm currently the <b>Led Full Stack Engineer</b> at Desapintar, my
          focus is on contributing to the development of the company{" "}
          <b>in any way I can</b>.
        </p>
        <hr />
        <p>
          In my free time, I enjoy playing the guitar and find inspiration in
          literature. I believe that music and literature can be a great source
          of creativity and inspiration that can help me to improve my
          problem-solving skills as a developer.
        </p>
        <p>
          Additionally, I have an interest in philosophy and believe that it
          helps me to approach problems in a more thoughtful and strategic
          manner, leading to better decision-making in my personal and
          professional life. Overall, my diverse interests and skills allow me
          to bring a unique perspective to my work and continuously challenge
          myself to expand my knowledge.
        </p>
        <div className="flex flex-col gap-1 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/leerob"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/@leerob"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <InstagramIcon />
              <div className="ml-3">YouTube</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
