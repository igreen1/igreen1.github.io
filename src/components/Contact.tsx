import { profile } from '../data'
import SectionHeading from './SectionHeading'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionHeading run="Base" mark="lodge" title="Contact" trailName="Après at the Lodge" />
      <div className="lodge card">
        <p className="lodge-lead">
          The best way to reach me is email. I'm happy to talk about jobs, projects, or skiing.
        </p>
        <p className="lodge-email">
          <MailIcon /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <div className="lodge-links">
          <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noreferrer">Download résumé</a>
          <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
          <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
