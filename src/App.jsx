import { motion } from "framer-motion";
import { cases, labs, stack, links } from "./data.js";

const ease = [0.2, 0.8, 0.2, 1];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-surface">M</span>
          <span className="font-display text-lg font-semibold">Moustapha</span>
        </a>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a href="#projets" className="hidden transition-colors hover:text-ink sm:block">Projets</a>
          <a href="#labs" className="hidden transition-colors hover:text-ink sm:block">Labs</a>
          <a href={links.gh} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">GitHub</a>
          <a href="#contact" className="rounded-full bg-ink px-4 py-2 font-medium text-paper transition-transform hover:-translate-y-0.5">Me contacter</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-5 pb-10 pt-16 sm:px-6 sm:pt-24">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent font-display text-2xl font-bold text-surface shadow-lg">
        M
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease }}
        className="font-display mt-7 text-[clamp(2.6rem,7vw,4.6rem)] font-semibold leading-[1.02]">
        Salut, moi c'est <span className="text-accent">Moustapha</span>.
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Développeur full-stack. Je conçois et je livre des produits web et des plateformes
        métier — du front au back — avec un faible pour les projets exigeants où la fiabilité
        compte vraiment. Je suis aussi le fondateur de{" "}
        <a href={links.studio} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">Governor&nbsp;Studio</a>.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}
        className="mt-8 flex flex-wrap gap-3">
        <a href="#projets" className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-surface transition-transform hover:-translate-y-0.5">Voir mes projets</a>
        <a href="#contact" className="rounded-full border border-ink/20 px-5 py-3 text-sm font-medium transition-colors hover:border-accent">Travaillons ensemble</a>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="mt-10 flex flex-wrap gap-x-4 gap-y-2">
        {stack.map((s) => <span key={s} className="font-mono text-xs text-faint">{s}</span>)}
      </motion.div>
    </section>
  );
}

function Cases() {
  return (
    <section id="projets" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16 sm:px-6 sm:py-24">
      <Reveal>
        <p className="label">Projets sélectionnés</p>
        <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">Ce que je construis</h2>
        <p className="mt-3 max-w-xl text-muted">Des livraisons clientes réelles (présentées de façon anonymisée, données de démonstration).</p>
      </Reveal>

      <div className="mt-14 flex flex-col gap-20">
        {cases.map((c, i) => (
          <motion.article key={c.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className={`grid items-center gap-7 lg:grid-cols-2 lg:gap-12 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_50px_-30px_rgba(42,36,32,0.5)]">
              <img src={c.img} alt={c.title} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
            </div>
            <div>
              <p className="label !text-faint">{c.sector}</p>
              <h3 className="font-display mt-2 text-2xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted"><span className="font-medium text-ink">L'enjeu — </span>{c.problem}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted"><span className="font-medium text-ink">Livré — </span>{c.result}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.stack.map((s) => <span key={s} className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">{s}</span>)}
              </div>
              <div className="mt-5 flex gap-6 border-t border-line pt-4">
                {c.metrics.map((m) => (
                  <div key={m.v}><p className="font-display text-lg font-semibold text-accent">{m.v}</p>{m.l && <p className="text-[11px] text-faint">{m.l}</p>}</div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Labs() {
  return (
    <section id="labs" className="border-y border-line bg-surface/50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Reveal>
          <p className="label">Labs</p>
          <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">Petits projets, en ligne</h2>
          <p className="mt-3 max-w-xl text-muted">Des mini-produits que je reconstruis pour le plaisir — démos cliquables, code ouvert.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labs.map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-line bg-surface p-5 transition-transform hover:-translate-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{p.tag}</span>
              <h3 className="font-display mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 flex-1 text-sm text-muted">{p.desc}</p>
              <div className="mt-4 flex gap-4 text-sm font-medium">
                <a href={`${links.demo}/${p.slug}/`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Démo →</a>
                <a href={`${links.gh}/${p.slug}`} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-ink">Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-20 sm:px-6">
      <Reveal>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-tight">Un projet en tête ?<br />Parlons-en.</h2>
        <p className="mt-4 max-w-md text-muted">Mission, produit à construire, ou idée à cadrer — écrivez-moi, je réponds vite.</p>
        <div className="mt-7 flex flex-wrap gap-3 text-sm">
          <a href={`mailto:${links.email}`} className="rounded-full bg-accent px-5 py-3 font-medium text-surface">{links.email}</a>
          <a href={links.gh} target="_blank" rel="noopener noreferrer" className="rounded-full border border-ink/20 px-5 py-3 font-medium hover:border-accent">GitHub</a>
          <a href={links.studio} target="_blank" rel="noopener noreferrer" className="rounded-full border border-ink/20 px-5 py-3 font-medium hover:border-accent">Governor Studio</a>
        </div>
      </Reveal>
      <p className="mt-16 border-t border-line pt-6 text-xs text-faint">© {new Date().getFullYear()} Moustapha Hayas · construit avec React, Tailwind &amp; Framer Motion.</p>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Cases />
        <Labs />
        <Contact />
      </main>
    </>
  );
}
