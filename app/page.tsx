import Image from "next/image";

const EMAIL = "partnership@gamingreachout.com";

const PLATFORMS = [
  { name: "Twitch", color: "#9146ff", reach: "Global" },
  { name: "YouTube", color: "#ff0033", reach: "Global" },
  { name: "Kick", color: "#53fc18", reach: "Global" },
  { name: "SOOP", color: "#2f6bff", reach: "South Korea" },
  { name: "Chzzk", color: "#00ffa3", reach: "South Korea" },
  { name: "TikTok", color: "#25f4ee", reach: "Global" },
];

const STATS = [
  { value: "70,000+", label: "streamers in our database" },
  { value: "7", label: "platforms tracked" },
  { value: "15+", label: "countries reached" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#top" className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac">
          <Image src="/images/logo.svg" alt="" width={32} height={32} priority />
          <span className="font-display text-xl font-bold tracking-wide">Gaming Reachout</span>
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-purple hover:bg-purple/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac"
        >
          Contact us
        </a>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-2/3 bg-[radial-gradient(ellipse_at_center,rgb(124_58_237/0.28),transparent_65%)]"
          />
          <div className="mx-auto max-w-7xl">
            <h1 className="wordmark font-display font-black uppercase leading-[0.82] tracking-[-0.01em] text-[clamp(4.25rem,22vw,20rem)]">
              <span className="block">Gaming</span>
              <span className="block text-lilac">Reachout</span>
            </h1>
            <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="font-display text-3xl font-bold sm:text-4xl">Connect. Collaborate. Conquer.</p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                  We put your game in front of the streamers your players already watch.
                </p>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex w-fit items-center rounded-full bg-purple px-7 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgb(124_58_237/0.45)] transition hover:bg-[#8b4df5] hover:shadow-[0_0_56px_rgb(124_58_237/0.65)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac"
              >
                Start a campaign
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section aria-labelledby="about-heading" className="border-t border-line px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16">
            <h2 id="about-heading" className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              We connect game developers with top streamers worldwide
            </h2>
            <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Finding the right creator is the hard part. We track streamers across every major platform: their
                audience size, the language they stream in and the games they actually play.
              </p>
              <p>
                You tell us about your game. We shortlist creators who fit, handle the outreach, keys and follow-up,
                and report back on who covered it and how it landed.
              </p>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section aria-labelledby="platforms-heading" className="border-t border-line px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 id="platforms-heading" className="font-display text-4xl font-bold sm:text-5xl">
              Where your players watch
            </h2>
            <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
              {PLATFORMS.map((p) => (
                <li key={p.name} className="flex flex-col gap-6 bg-void p-6">
                  <span
                    aria-hidden
                    className="size-3 rounded-full"
                    style={{ backgroundColor: p.color, boxShadow: `0 0 16px ${p.color}` }}
                  />
                  <span>
                    <span className="block font-display text-3xl font-bold">{p.name}</span>
                    <span className="mt-1 block text-sm text-muted">{p.reach}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Gaming Reachout in numbers" className="border-t border-line bg-deep px-5 py-20 sm:px-8 sm:py-24">
          <dl className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-3 sm:gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-2 sm:border-l sm:border-line sm:pl-8 sm:first:border-l-0 sm:first:pl-0">
                <dt className="text-base text-muted">{s.label}</dt>
                <dd className="font-display text-7xl font-black leading-none text-ink sm:text-8xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-muted">Partnerships and campaigns</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 inline-block break-all font-display text-2xl font-bold text-lilac underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac sm:text-3xl"
            >
              {EMAIL}
            </a>
          </div>
          <p className="text-sm text-muted">© {new Date().getFullYear()} Gaming Reachout</p>
        </div>
      </footer>
    </div>
  );
}
