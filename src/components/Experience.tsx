import { experience } from '../data'
import SectionHeading from './SectionHeading'
import { ExternalIcon } from './Icons'

// Roles hang off a chairlift cable; each card is a lift tower
export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading run="Run 02" mark="blue" title="Experience" trailName="The Long Traverse" />
      <ol className="lift">
        {experience.map((role, i) => (
          <li key={role.title} className="tower">
            <div className="chair" aria-hidden>
              <svg viewBox="0 0 28 36">
                <path d="M14 0 V10 M5 10 H23 M7 10 V26 H23 M7 26 Q7 32 13 32 H24" />
              </svg>
              <span className="tower-no">T{i + 1}</span>
            </div>
            <article className="card role">
              <header>
                <div className="role-title">
                  <h3>{role.title}</h3>
                  <span className="dates">{role.dates}</span>
                </div>
                <p className="org">
                  {role.link ? (
                    <a href={role.link} target="_blank" rel="noreferrer">{role.org} <ExternalIcon /></a>
                  ) : role.org}
                  <span className="loc"> · {role.location}</span>
                </p>
                {role.progression && (
                  <ul className="progression" aria-label="Earlier titles">
                    {role.progression.map((p) => (
                      <li key={p.title}><span>{p.title}</span> <span className="dates">{p.dates}</span></li>
                    ))}
                  </ul>
                )}
              </header>
              <ul>
                {role.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
