import { resumeData } from '../data/resume'

export interface BootLine {
  command: string
  output: string[]
}

export const bootSequence: BootLine[] = [
  {
    command: 'whoami',
    output: [resumeData.contact.name],
  },
  {
    command: 'cat role.txt',
    output: [resumeData.contact.title, resumeData.profile.headline],
  },
]
