import type { PropsWithClassName } from '@shared/types/ui'
import clsx from 'clsx'
import { LayoutFooter } from './footer'
import { LayoutHeader } from './header'

type Props = PropsWithClassName<{
  children?: React.ReactNode
}>

export function Layout(props: Props) {
  const { className, children } = props
  return (
    <div className={clsx('flex min-h-screen flex-col', className)}>
      <LayoutHeader />
      <main className="flex flex-1 flex-col px-30 py-15">{children}</main>
      <LayoutFooter />
    </div>
  )
}
