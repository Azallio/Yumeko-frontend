import { CardUi } from '@widgets/card'
import { LayoutUi } from '@widgets/layout'

export default function IndexRoute() {
  return (
    <LayoutUi.Layout className="flex-center">
      <section>
        <CardUi.Card className="bg-length-2 hover:animate-gradient-move-up animate-gradient-move-down rotate-y-22 rotate-z-12 rounded-2xl bg-gradient-to-br from-transparent to-indigo-800 p-5 transition-all duration-800 hover:rotate-y-0 hover:rotate-z-0" />
      </section>
    </LayoutUi.Layout>
  )
}
