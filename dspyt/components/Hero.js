import Image from "next/image";

import HeroImage from "@/public/mainsave.webp";

export default function Hero() {
  return (
    <div className="pb-10 sm:pb-12 lg:pb-16 transition-all">
      <div className="pt-8 overflow-hidden sm:pt-10 lg:relative lg:py-44">
        <div className="mx-auto max-w-md sm:max-w-xl lg:max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="max-w-xl p-1">
            <h1 className="dspyt-h1">DSPYT — into CodeVerse</h1>
            <p className="mt-2 sm:mt-6 text-sm sm:text-lg lg:text-xl leading-7 text-gray-600 dark:text-gray-300 tracking-tight sm:tracking-wide">
              Practical insights at the intersection of data science and
              blockchain. Built by a community that experiments in public.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <a
                href="/blog"
                className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Read the blog
              </a>
              <a
                href="/profiles"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2.5 text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 dark:bg-gray-800"
              >
                Meet the authors
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto sm:max-w-3xl px-8 sm:px-12">
          <div className="relative sm:mt-4 py-8 sm:py-10 md:py-12 lg:absolute lg:inset-y-2 lg:right-0 lg:w-1/2">
            <div className="outlinedImage relative mx-auto sm:max-w-3xl sm:px-0 lg:max-w-max lg:h-full">
              <Image
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src={HeroImage}
                alt="DSPYT - CodeVerse"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
