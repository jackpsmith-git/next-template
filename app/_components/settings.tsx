'use client';

import packageJson from '@/package.json' with { type: 'json' };
import { useTheme } from '@/app/_providers/theme-provider';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export default function Settings() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  return (
    <div ref={containerRef}>
      <AnimatePresence>
        {open && (
          <motion.div
            key='motion'
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.95,
            }}
            transition={{
              duration: 0.15,
            }}
            className="
              fixed bottom-16 right-4 w-56
              overflow-hidden
              border border-primary-border rounded-xl
              bg-primary
              text-primary-text text-sm
              shadow-2xl
            "
          >
            <div className="bg-primary text-primary-text border-b border-primary-border px-4 py-2 font-semibold">
              Settings
            </div>

            <div className="flex flex-col p-2 bg-monochrome">
              <p className='px-2 pb-1 font-semibold'>Theme</p>
              <div className='bg-monochrome w-full rounded'>
                <select
                  value={theme}
                  onChange={(e) =>
                    setTheme(e.target.value as any)
                  }
                  className="px-2 py-1 rounded w-full bg-primary text-primary-text"
                  >
                  <option value="light" className='text-black'>Light</option>
                  <option value="dark" className='text-black'>Dark</option>
                  <option value="system" className='text-black'>System</option>
                </select>
              </div>
            </div>

            <div className="border-t border-primary-border px-5 py-1 text-zinc-400 bg-black">
              <p>Version: {packageJson.version}</p>
            </div>

          </motion.div>
        )}

        <button
          key='button'
          onClick={() => setOpen((prev) => !prev)}
          className="
          fixed bottom-4 right-4
          z-999
          flex items-center justify-center
          h-9 w-9
          rounded-full
          bg-black
          shadow-lg 
          border-2 border-zinc-900 p-[0.6]
          "
          >
          <Image src='/icons/settings.svg' alt='settings' width={50} height={50} className='bg-black hover:bg-zinc-900 rounded-full p-[5]'/>
        </button>
      </AnimatePresence>
    </div>
  )
}