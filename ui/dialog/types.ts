/**
 * @legacy
 */

import React from 'react'

export interface IDialogProps {
  isOpen: boolean
  subject: string
  content: string | React.ReactNode | JSX.Element
}
