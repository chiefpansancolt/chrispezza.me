'use client'

/* eslint-disable @next/next/no-img-element */
import navigation from '@/data/navigation'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                      <div className="flex w-full items-center justify-between md:w-auto">
                        <Link href="/">
                          <span className="sr-only">Christopher Pezza</span>
                          <img
                            className="h-8 w-auto sm:h-10"
                            src="/img/logo/Logo_Black.png"
                            alt="Christopher Pezza Logo"
                          />
                        </Link>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="font-medium text-slate-500 hover:text-slate-900"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
                  >
                    <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                      <div className="flex items-center justify-between px-5 pt-4">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="/img/logo/Logo_Black.png"
                            alt="Christopher Pezza Logo"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                <span className="xl:inline">Hi, I&apos;m</span>{' '}
                <span className="text-blue-600 xl:inline">Christopher</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                A developer, architect, streamer, content creator, husband, and father. The persona
                link will take you to my streamer/content creator website to see more about me and
                How To Guides for some of my projects.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://chiefpansancolt.live"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:px-10 md:py-4 md:text-lg"
                  >
                    Persona
                  </a>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0">
                  <Link
                    href="#contact"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-200 md:px-10 md:py-4 md:text-lg"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full"
          src="/img/Family.JPG"
          alt="Chris Pezza Family"
        />
      </div>
    </div>
  )
}
