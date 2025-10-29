'use client';

/* eslint-disable @next/next/no-img-element */
import navigation from '@/data/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react';


export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav aria-label="Global" className="flex items-center justify-between lg:justify-start">
              <Link href="/">
                <span className="sr-only">Christopher Pezza</span>
                <img
                  className="h-7 w-auto"
                  src="/img/logo/Logo_Black.png"
                  alt="Christopher Pezza Logo"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm/6 font-medium text-slate-500 hover:text-slate-900">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/">
                <span className="sr-only">Christopher Pezza</span>
                <img
                  className="h-10 w-auto"
                  src="/img/logo/Logo_Black.png"
                  alt="Christopher Pezza Logo"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-slate-500 hover:text-slate-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="xl:inline">Hi, I&apos;m</span>{' '}
                  <span className="text-blue-600 xl:inline">Christopher</span>
                </h1>
                <p className="mt-3 text-base text-slate-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  A developer, architect, gamer, husband, and father. The persona
                  link will take you to my developer website to see more about me and
                  How To Guides for some of my projects.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://chiefpansancolt.dev"
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
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full"
            src="/img/Family.JPG"
            alt="Chris Pezza Family"
          />
        </div>
      </div>
    </>
  )
}