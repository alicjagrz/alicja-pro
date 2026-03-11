export default function HomePage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
                <p className="mb-4 text-sm font-medium tracking-[0.2em] text-zinc-500">
                    alicja
                </p>

                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">
                    Tworzę nowoczesną stronę internetową w Next.js krok po kroku.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                    To jest moja pierwsza wersja portfolio. Buduję ją od zera, ucząc się
                    Reacta, Next.js i dobrych praktyk frontendowych.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a
                        href="#projekty"
                        className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
                    >
                        Zobacz projekty
                    </a>

                    <a
                        href="#kontakt"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                    >
                        Kontakt
                    </a>
                </div>
            </section>
        </main>
    );
}