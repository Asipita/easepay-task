import { Add } from 'iconsax-react'
import { useState } from 'react'

export default function Notification() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null
  return (
    <section className="bg-[#6936F5] h-12 flex items-center justify-center relative">
      <span className="text-white text-sm">
        **Earn up to $200 for getting started
      </span>

      <span
        className="rotate-45 absolute right-10 hover:cursor-pointer"
        onClick={() => setVisible(false)}
      >
        <Add color="#fff" size={20} />
      </span>
    </section>
  )
}
