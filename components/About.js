import { DownloadIcon } from '@heroicons/react/solid'

export default function About() {
  return (
    <div className="bg-blue-700" id="about">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className=" flex justify-end">
          <img
            className="inline-block h-32 w-32 rounded-full mr-8"
            src="/img/chris-pezza.jpg"
            alt=""
          />
        </div>
        <div className="col-span-2">
          <h2 className="text-xl font-semibold text-gray-50 tracking-wide uppercase">About Me</h2>
          <p className="text-base text-white mt-4">
            I am a Master Delivery Consultant for nCino, Inc, a software company based in
            Wilmington, NC. Going on 7 years now, I have moved up from an entry position of Support
            Engineer and have been given many opportunities which lead me into my current role as a
            Master Delivery Consultant. I live with my wife and daughter and our 5 pets, 2 dogs, 2
            cats and a bunny rabbit.
          </p>
          <div className="flex flex-inline mt-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-50 tracking-wide uppercase">
                Contact
              </h2>
              <span className="block text-white mt-4">Christopher Pezza</span>
              <a className="block text-white" href="mailto:contact@chris-pezza.com">
                contact@chris-pezza.com
              </a>
            </div>
            <div className="ml-16">
              <a
                href="https://www.linkedin.com/in/pezzachristopher"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent shadow-lg text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
              >
                <DownloadIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
