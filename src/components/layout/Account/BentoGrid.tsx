import  { useTranslations } from "next-intl";
import Signature from "@/public/images/unterschrift.svg";
import SpringModal from "@/src/components/SpringModal";
import Portrait01 from "@/public/images/Portrait01.jpeg";
import ArchGrafik from "@/public/images/grafik70.png";
import Tools from "@/src/components/Tools";
import { transform } from "next/dist/build/swc";
import Projekt from "@/public/images/Hotel-SaoPaulo.png";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import LogoEZ from '@/public/images/LogoEZ990.svg'
export default function Dashboard() {
const t = useTranslations("Dashboard")

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/2 font-semibold text-orange-400">Galeria</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
          {t('Galery')}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-slate-100 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                
              </div>
              <div className="relative min-h-[33rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <Image
                    className="size-full object-contain object-center"
                    src={LogoEZ}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg mx-auto  bg-[url('/images/interiore13.jpg')] bg-cover bg-no-repeat max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h1 className="text-3xl font-semibold text-white sm:text-4xllg:">Project</h1>
              </div>

            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-neutral-700"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <Image alt="" src="/images/space02.svg"  width="300" height="300"/>
                
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
               
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-5xl font-bowlbySC tracking-tight text-slate-400 max-lg:text-center">
                  Desing
                </p>
               <Image alt="" src="/images/portrait01.jpeg"  width="300" height="300"/>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex  ring-1 h-full ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <h1 className="py-12 px-5 h-full bg-[#d3d355] text-stone-50 lg:text-[9rem]">Test</h1>
                      <div className="border-r border-gray-600/10 px-4 py-2"></div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">{/* Your code example */}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
        </div>
        </div>
  )

























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































  }