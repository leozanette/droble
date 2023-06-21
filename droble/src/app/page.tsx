export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
      <aside className="w-64 bg-zinc-900">SideBar</aside>
      <main className="flex-1">Main</main>

      </div>
      <footer className="bg-zinc-800 border-zinc-700 p-6">Footer</footer>
    </div>
  )
}
