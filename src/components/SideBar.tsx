import { HomeIcon, Library, Search } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          80s Rock Anthems
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Classic Rock 70s 80s 90s
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Rock Acústico I Internacional
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Cervejada da Aline
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Solfeggio Healing Frequencies
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Medieval Folk and Sea Shanties
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Aline Dahoraaaaa
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          As mais tocadas no seu 2020
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Suave
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is U2
        </a>
      </nav>
    </aside>
  );
}
