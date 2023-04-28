import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '@/public/logo.svg'
import TinyLogo from '@/public/tiny-logo.svg'
import Notification from '@/components/notification'
import Link from 'next/link'
import { Button } from '@mantine/core'
import { ArrowRight, ArrowRight2 } from 'iconsax-react'
import DashboardImage from '@/public/dashboard-image.png'
import CardImage from '@/public/card.png'

import Styles from '@/styles/home.module.css'

import TC from '@/public/tc.svg'
import Ent from '@/public/ent.svg'
import Tt from '@/public/tt.svg'
import Forbes from '@/public/forbes.svg'
import Twsj from '@/public/twsj.svg'

//couldn't find SF Pro on Google fonts
import { Rubik, Source_Sans_Pro } from 'next/font/google'
const rubik = Rubik({
  weight: ['500'],
  subsets: ['latin'],
})

const sourcePro = Source_Sans_Pro({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={sourcePro.className}>
      <Notification />
      <section className="bg-[linear-gradient(90deg,_#060A23_0%,_#07041E_25%,_#07041E_75%,_#060A23_100%)] min-h-screen px-5">
        <div className="max-w-[1280px] text-white mx-auto">
          <nav className="px-12 text-white flex justify-between items-center py-8">
            <Logo />

            <ul className="flex gap-16">
              <li>
                <Link href="/">Use cases</Link>
              </li>
              <li>
                <Link href="/">Product</Link>
              </li>
              <li>
                <Link href="/">Category</Link>
              </li>
              <li>
                <Link href="/">Support</Link>
              </li>
            </ul>

            <ul className="flex gap-16">
              <span>Login</span>
              <span>Sign up</span>
            </ul>
          </nav>

          <div className="px-12 py-[150px] flex flex-col gap-6">
            <h2 className={`text-6xl font-medium ${rubik.className}`}>
              Business banking with
            </h2>
            <h1
              className={`text-8xl font-medium ${Styles.GradientText} ${rubik.className}`}
            >
              No credit check
            </h1>

            <p className="max-w-[620px] text-lg">
              Thousands of entrepreneurs bank on Winden to start or grow their
              business. Open an account in under 3 minutes.
            </p>

            <Button
              size="lg"
              className="bg-[#6936F5] hover:bg-[#5624e0] w-fit"
              rightIcon={<ArrowRight size="20" color="#FFF" />}
            >
              Get started
            </Button>

            <div className="flex gap-2 items-center">
              <TinyLogo />
              <span>
                Sign up today and earn up to $200. Conditions apply. **
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1280px] text-white mx-auto">
        <div className="w-fit relative -mt-32">
          <div className="absolute -top-40 right-10 w-[490px]">
            <Image src={CardImage} alt="Card image" placeholder="blur" />
          </div>

          {/* <video width="320" height="240" controls={true}>
            <source src="B8goNNDB5ev7QMjyFv5V75qw7RGY1C3eWjEb4T4r5rDWo0iUvrsKsFo0blk5P3mJWHI4DwbzGH8OvaaNBFKiClNHv8MReNSO4kbgLICTqJz2759ryM342zNE5bpaO1mgiZH5wbhmW51pEJo9dnlZt69lGoDoJKtkaS0bGGj566nSXPwc5tc3DlzyCZ5c2HqWJ" type="video/mp4"/>
            Your browser does not support video
          </video> */}

          <div className="z-10 relative">
            <Image
              src={DashboardImage}
              alt="screenshot of dashboard"
              className="z-10"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-transparent flex justify-center items-center z-20">
            <div className="w-[72px] h-[72px] rounded-full bg-[#6936F5] flex items-center justify-center">
              <ArrowRight2 size="48" color="#FFF" variant="Bold" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex gap-[70px] justify-center items-center my-10">
        <TC />
        <Forbes />
        <Ent />
        <Tt />
        <Twsj />
      </section>
    </main>
  )
}
