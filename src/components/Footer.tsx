import Image from "next/image";
import {
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          className="w-full"
          src="/beatles.png"
          width={10}
          height={10}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <strong className="font-normal">Here comes the Sun</strong>
          <span className="text-xs text-zinc-400">The Beatles</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <button>
            <Shuffle size={20} className="text-zinc-200" />
          </button>
          <button>
            <SkipBack size={20} className="text-zinc-200" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>
          <button>
            <SkipForward size={20} className="text-zinc-200" />
          </button>
          <button>
            <Repeat size={20} className="text-zinc-200" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">1:31</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="bg-zinc-200 w-32 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">3:06</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-1">
          <Volume size={20} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
