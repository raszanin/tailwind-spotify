import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 font-semibold text-3xl">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/beatles.png"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong className="text-sm">
                Sgt. Pepper´s Lonely Hearts Club Band
              </strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/ramones.jpeg"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong className="text-sm">Ramones</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/guns.jpg"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong className="text-sm">Appetite for Destruction</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/ironmaiden.jpg"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong className="text-sm">The Number of the Beast</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/nirvana.jpg"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong className="text-sm">Nervermind</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/pinkfloyd.png"
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong className="text-sm">The Dark Side of the Moon</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="mt-10 font-semibold text-2xl">
            Made for Roberto Zanin
          </h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/beatles.png"
                width={100}
                height={100}
                alt=""
              />
              <strong className="font-semibold">80s</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red adn more
              </span>
            </a>

            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/guns.jpg"
                width={80}
                height={80}
                alt=""
              />
              <strong className="font-semibold">Rock Classics 2</strong>
              <span className="text-sm text-zinc-500">
                Rock legends & epic songs
              </span>
            </a>

            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/ironmaiden.jpg"
                width={80}
                height={80}
                alt=""
              />
              <strong className="font-semibold">This is Iron Maiden</strong>
              <span className="text-sm text-zinc-500">This is Iron Maiden</span>
            </a>

            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/nirvana.jpg"
                width={80}
                height={80}
                alt=""
              />
              <strong className="font-semibold">This is Nirvana</strong>
              <span className="text-sm text-zinc-500">This is Nirvana</span>
            </a>

            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/pinkfloyd.png"
                width={80}
                height={80}
                alt=""
              />
              <strong className="font-semibold">Rock Classics</strong>
              <span className="text-sm text-zinc-500">
                Queen, ZZ Top, The Who and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
