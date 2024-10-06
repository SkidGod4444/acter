import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import Image from 'next/image';
import { LoginWithGitHub, LoginWithGoogle } from './auth.btns';

  interface AuthDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
export default function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger>
        <Button className='rounded-md'>
        <LogIn className='mr-2 size-4' />Logon
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className='flex items-center justify-start gap-20 flex-row'>
          <Image src="/assets/acter-logo.jpg" width={100} height={100} alt='logo' className='flex items-center justify-center rounded-xl'/>
          <div className='flex flex-col items-center justify-between'>
            <LoginWithGitHub/>
            <span className='text-muted-foreground font-[family-name:var(--font-geist-semi-bold)]'>OR</span>
            <LoginWithGoogle/>
          </div>
          </div>
          <DialogDescription>
            Continue to Acter with any of the given providers. By using Acter you agree to follow our <a href='/legal/agreement' className='hover:underline cursor-pointer font-bold'>Terms</a> and <a href='/legal/privacy-policy' className='hover:underline cursor-pointer font-bold'>Policy</a>.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
