import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from './ThemeProvider';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Newsletter', href: 'https://pn.developerdao.com/', target: '_blank' },
  { name: 'Events', href: 'https://lu.ma/developer-dao-events', target: '_blank' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-6" aria-label="Global">
        <div className="flex items-center justify-between py-6">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Developer DAO Ventures Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-400">
                Developer DAO Ventures
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.target}
                className="text-sm font-semibold text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-900 dark:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
            <Link
              href="https://airtable.com/appDMMIARfSeiovpk/shrZExypPetXEx6Ox"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-6 py-2 text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Simple Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.target}
                  className="block px-3 py-2 text-base font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="flex w-full items-center px-3 py-2 text-base font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <Link
                href="https://airtable.com/appDMMIARfSeiovpk/shrZExypPetXEx6Ox"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-3 py-2 text-base font-semibold text-white bg-black dark:bg-white dark:text-black rounded-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 