import { useState } from 'react'
import { categories, projects, type Category } from '../data'
import SectionHeading from './SectionHeading'
import { ExternalIcon, GithubIcon } from './Icons'

type Filter = 'Featured' | 'All' | Category

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('Featured')
  const filters: Filter[] = ['Featured', 'All', ...categories]

  const shown = projects.filter((p) =>
    filter === 'All' ? true : filter === 'Featured' ? p.featured : p.tags.includes(filter),
  )

  return (
    <section id="projects" className="section">
      <SectionHeading run="Run 03" mark="black" title="Projects" trailName="The Chutes" />

      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button key={f} className={filter === f ? 'on' : ''} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {shown.map((p) => (
          <article key={p.title} className="card project">
            <div className={`project-media ${p.image ? '' : 'project-media-empty'}`}>
              {p.image ? <img src={p.image} alt="" loading="lazy" /> : <MountainGlyph />}
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="project-sub">{p.subtitle}</p>
              <p>{p.description}</p>
              <div className="project-foot">
                <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <div className="links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} source on GitHub`}><GithubIcon /></a>
                  )}
                  {p.website && (
                    <a href={p.website} target="_blank" rel="noreferrer" aria-label={`${p.title} website`}><ExternalIcon /></a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const MountainGlyph = () => (
  <svg viewBox="0 0 120 60" aria-hidden>
    <path d="M0 60 L38 18 L56 38 L76 10 L120 60Z" />
    <path className="cap" d="M76 10 L68 22 L75 19 L80 24 L85 18Z" />
  </svg>
)
