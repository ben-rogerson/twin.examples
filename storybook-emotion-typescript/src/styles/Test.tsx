import React from 'react'

type Props = {
  isBig: string
}

export default function componentName({ isBig }: Props) {
  return <div>{isBig}</div>
}
