'use client'

import projects from '@/data/projects'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'

export default function Portfolio() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState('')

  return (
    <div className="bg-blue-600" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <li key={project.id} className="relative">
              <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-slate-100 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:ring-offset-orange-100">
                <Image
                  src={project.source}
                  alt={project.title}
                  className="pointer-events-none object-cover group-hover:opacity-75"
                  fill
                  sizes="100vw"
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
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-slate-50">
                {project.title}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-slate-300">
                {project.type}
              </p>
            </li>
          ))}
        </ul>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 z-10 overflow-y-auto"
            open={open}
            onClose={setOpen}
          >
            <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
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
                <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:w-full sm:max-w-3xl sm:align-middle">
                  <div className="absolute right-0 top-0 pr-4 pt-4">
                    <button
                      type="button"
                      className="rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="ml-4 mt-4 text-lg font-medium leading-6 text-slate-900"
                      >
                        Project Details
                      </Dialog.Title>
                      <div className="mt-2">
                        <Dialog.Description as="div" className="text-left text-sm text-slate-500">
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
