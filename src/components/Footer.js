/* eslint-disable @next/next/no-img-element */
import social from "@/data/social"

export default function Example() {
  return (
    <footer className="bg-blue-600">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {social.map((item) => (
            <a key={item.name} href={item.href} className="text-slate-200">
              <span className="sr-only">{item.name}</span>
              {item.img ? (
                <img src={item.img} className="h-6 w-10" alt="" />
              ) : (
                <item.icon className={`${item.hover} h-6 w-6`} aria-hidden="true" />
              )}
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-slate-200">
            &copy; 2023 Christopher Pezza, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
