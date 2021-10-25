import { Menu } from "./Menu"
import { Button } from '../Button/Button'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()
  return (
    <div className="flex justify-between px-12 pt-6 pb-6 border-b-0 border-neutral-300">
      <div>
        <div className="font-header flex items-end">
          <Button
            action="/"
            style="none"
            className={`text-neutral-600 font-semibold ${router.asPath === '/' && ' border-b-2 border-primary-500'}`}>
            Home
          </Button>
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  )
}
