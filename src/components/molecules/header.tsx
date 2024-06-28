'use client';

import { Logo } from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../atoms';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 backdrop-blur">
      <div className="container w-full flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 flex justify-between w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src={Logo} alt="logo" width={185} height={15} />{' '}
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
            <Link
              href="/"
              className={cn('transition-colors hover:text-light/80', pathname === '/' ? 'text-light' : 'text-white')}>
              Exchage
            </Link>
            <Link
              href="/"
              className={cn(
                'transition-colors hover:text-light/80',
                pathname?.startsWith('/') ? 'text-light' : 'text-white',
              )}>
              Last Transactions
            </Link>
            <Link
              href="/"
              className={cn(
                'transition-colors hover:text-light/80',
                pathname?.startsWith('/') ? 'text-light' : 'text-white',
              )}>
              Invite Friend
            </Link>
            <Link
              href="/"
              className={cn(
                'transition-colors hover:text-light/80',
                pathname?.startsWith('/') ? 'text-light' : 'text-white',
              )}>
              Notifications
            </Link>
          </nav>
          <div className="flex items-center justify-between space-x-2">
            <nav className="flex items-center gap-4">
              <Button
                className="uppercase bg-transparent text-white border-primary hover:bg-transparent"
                variant="outline">
                Log In
              </Button>
              <Button className="uppercase">Sign Up</Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
