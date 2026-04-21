import { adminNavigation } from "@/lib/admin-nav";

export default function AdminPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl gap-8 px-6 py-10">
      <aside className="w-full max-w-xs rounded-xl bg-white p-5 shadow-sm">
        <h1 className="text-3xl font-bold">Stratena Admin</h1>
        <p className="mt-1 text-sm text-slate-600">Manage website content and settings.</p>
        <nav className="mt-6 space-y-2">
          {adminNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <section className="flex-1 rounded-xl bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="mt-2 text-sm text-slate-600">
          You can now start adding page blocks and CMS integrations here.
        </p>
      </section>
    </main>
  );
}
