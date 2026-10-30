import { about, clearance, education, profile, skills } from '../data'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading run="Run 01" mark="green" title="About" trailName="Warm-Up Ridge" />
      <div className="about-grid">
        <div className="about-text">
          {about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <p className="clearance">
            <svg viewBox="0 0 24 24" aria-hidden className="icon"><path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5z M8.5 12l2.5 2.5 4.5-5" /></svg>
            {clearance}
          </p>

          <h3 className="subhead">Education</h3>
          <ul className="edu">
            {education.map((e) => (
              <li key={e.school}>
                <strong>{e.school} <small>{e.dates}</small></strong>
                <span>{e.detail}</span>
              </li>
            ))}
          </ul>

          <h3 className="subhead">Gear bag</h3>
          <dl className="skills">
            {skills.map(({ group, items }) => (
              <div key={group}>
                <dt>{group}</dt>
                <dd>
                  <ul className="chips">{items.map((s) => <li key={s}>{s}</li>)}</ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="portrait">
          <div className="portrait-frame">
            <img src={profile.portrait} alt="Illustrated portrait of Ian Green" width={480} height={480} />
          </div>
          <figcaption>
            Art by <a href={profile.portraitCredit.url} target="_blank" rel="noreferrer">{profile.portraitCredit.name}</a>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
