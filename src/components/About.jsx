import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-blue-600" id="about">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8 lg:py-24">
        <div className="mb-4 flex justify-center lg:mb-0 lg:justify-end">
          <div className="relative h-32 w-32">
            <Image
              className="mr-8 inline-block rounded-full"
              src="/img/chris-pezza.JPG"
              alt="Christopher Pezza Headshot"
              fill
            />
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-50">About Me</h2>
          <p className="mt-4 text-base text-white">
            I am a Senior Solutions Architect for nCino, Inc, a software company based in
            Wilmington, NC. Going on 9 years now, I have moved up from an entry position of Support
            Engineer and have been given many opportunities which lead me into my current role as a
            Senior Solutions Architect. I live with my wife, daughter, and son and our 7 pets, 2
            dogs, 4 cats and a bunny rabbit.
          </p>
          <div className="flex-inline mt-8 flex">
            <div>
              <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-50">
                Contact
              </h2>
              <span className="mt-4 block text-white">Christopher Pezza</span>
              <a className="block text-white" href="mailto:contact@chrispezza.me">
                contact@chrispezza.me
              </a>
            </div>
            <div className="ml-16">
              <a
                href="https://www.linkedin.com/in/pezzachristopher"
                className="mt-4 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
              >
                <ArrowDownTrayIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
