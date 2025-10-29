'use client';

import projects from '@/data/projects';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from 'next/image';
import { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';


export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState('')

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <div className="bg-blue-600" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <li key={project.id} className="relative">
              <div className="group aspect-3/2 block w-full overflow-hidden rounded-lg bg-slate-100 relative">
                <Image
                  src={project.source}
                  alt={project.title}
                  className="cursor-pointer object-cover group-hover:opacity-75"
                  fill
                  sizes="100vw"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                  onClick={() => {
                    open()
                    setView(project.id)
                  }}
                >
                  <span className="sr-only">View details for {project.title}</span>
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3 cursor-pointer">
                  <p className="block truncate text-sm font-medium text-slate-50">
                    {project.title}
                  </p>
                  <p className="block text-sm font-medium text-slate-300">
                    {project.type}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Dialog open={isOpen} className="relative z-50" onClose={close}>
          <DialogBackdrop className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 w-screen overflow-y-auto p-4">
            <div className="flex min-h-full items-center justify-center">
              <DialogPanel
                transition
                className="w-full max-w-3xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
              >
                <DialogTitle as="h3" className="font-bold">
                  Project Details
                </DialogTitle>
                <div className="mt-2 text-sm/6 text-black">
                  {projects.map((project) => (
                    <div
                      key={`${project.id}-details`}
                      className={`${view === project.id ? '' : 'hidden'}`}
                    >
                      {ReactHtmlParser(project.description)}
                    </div>
                  ))}
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  )
}