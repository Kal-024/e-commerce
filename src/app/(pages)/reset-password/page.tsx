import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { ResetPasswordForm } from './ResetPasswordForm'

import classes from './index.module.scss'

export default async function ResetPassword() {
  return (
    <Gutter className={classes.resetPassword}>
      <h1>Restablecer contraseña</h1>
      <p>Introduce una nueva contraseña a continuación.</p>
      <ResetPasswordForm />
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Restablecer contraseña',
  description: 'Introduce una nueva contraseña.',
  openGraph: mergeOpenGraph({
    title: 'Restablecer contraseña',
    url: '/reset-password',
  }),
}
