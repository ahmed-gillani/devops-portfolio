import { resumeData } from '../../data/resume'

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-content flex-col gap-2 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs">$ echo &quot;status: online&quot;</p>
        <p>
          {resumeData.contact.name} · {resumeData.contact.location}
        </p>
      </div>
    </footer>
  )
}
