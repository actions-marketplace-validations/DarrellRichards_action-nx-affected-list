export interface GetNxAffectedProps {
  base?: string
  head?: string
  type: 'app' | 'libs'
  workspace: string
}

export interface ExecuteNxCommandProps {
  commands: string[]
  workspace: string
}
