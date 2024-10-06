"use client"
import { signIn } from "next-auth/react"
import { Button } from '@/components/ui/button';
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import React from 'react'

function LoginWithGoogle() {
  return (
    <Button onClick={() => signIn("google")}>
        <IconBrandGoogle className='size-5 mr-2'/> Continue with Google
    </Button>
  )
}

function LoginWithGitHub() {
    return (
      <Button onClick={() => signIn("github")}>
          <IconBrandGithub className='size-5 mr-2'/> Continue with GitHub
      </Button>
    )
  }

export {LoginWithGoogle, LoginWithGitHub};