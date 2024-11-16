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
                    open()
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
        <Dialog open={isOpen} className="relative z-10" onClose={close}>
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
            <DialogPanel
              transition
              className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Project Details
              </DialogTitle>
              <div className="mt-2 text-sm/6 text-white/50">
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
        </Dialog>
      </div>
    </div>
  )
}