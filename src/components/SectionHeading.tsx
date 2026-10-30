import { TrailMark, DIFFICULTY_LABEL, type Difficulty } from './TrailMark'

type Props = { run: string; mark: Difficulty; title: string; trailName: string }

// Section titles styled like a trail sign at the top of a run
export default function SectionHeading({ run, mark, title, trailName }: Props) {
  return (
    <div className="section-heading">
      <div className="trail-sign">
        <TrailMark kind={mark} size={22} />
        <div>
          <span className="sign-run">{run} · {DIFFICULTY_LABEL[mark]}</span>
          <span className="sign-name">{trailName}</span>
        </div>
      </div>
      <h2>{title}</h2>
    </div>
  )
}
