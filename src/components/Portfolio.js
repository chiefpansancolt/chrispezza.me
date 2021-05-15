import Image from 'next/image'
import projects from '@/data/projects'
import { Fragment, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function Portfolio() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState('')

  return (
    <div className="bg-blue-700" id="portfolio">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <li key={project.id} className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-orange-100 focus-within:ring-orange-500 overflow-hidden">
                <Image
                  src={project.source}
                  alt={project.title}
                  className="object-cover pointer-events-none group-hover:opacity-75"
                  layout="fill"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                  onClick={() => {
                    setOpen(true)
                    setView(project.id)
                  }}
                >
                  <span className="sr-only">View details for {project.title}</span>
                </button>
              </div>
              <p className="mt-2 block text-sm font-medium text-gray-50 truncate pointer-events-none">
                {project.title}
              </p>
              <p className="block text-sm font-medium text-gray-300 pointer-events-none">
                {project.type}
              </p>
            </li>
          ))}
        </ul>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed z-10 inset-0 overflow-y-auto"
            open={open}
            onClose={setOpen}
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-3xl sm:w-full">
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900 mt-4 ml-4"
                      >
                        Project Details
                      </Dialog.Title>
                      <div className="mt-2">
                        <Dialog.Description as="div" className="text-sm text-gray-500 text-left">
                          {projects.map((project) => (
                            <div
                              key={`${project.id}-details`}
                              className={`${view === project.id ? '' : 'hidden'}`}
                            >
                              {ReactHtmlParser(project.description)}
                            </div>
                          ))}
                        </Dialog.Description>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  )
}
