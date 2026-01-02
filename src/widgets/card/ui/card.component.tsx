import type { PropsWithClassName } from '@shared/types/ui'
import { Button } from '@shared/ui'
import clsx from 'clsx'

type Props = PropsWithClassName

export function Card(props: Props) {
  const { className } = props
  return (
    <article className={clsx('flex shrink-0 flex-col gap-5', className)}>
			<div className='flex flex-col flex-center gap-2'>
				<h2 className="text-2xl font-bold">Card Title</h2>
				<p className="text-sm text-muted-foreground">Card description goes here.</p>
			</div>
      <Button variant="color:none size:md" className="">
        Check all users
      </Button>
    </article>
  )
}
