import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  )
}

export default IssuePage