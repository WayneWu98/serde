import { NamingCase } from './naming-case'

interface TSSerdeConfig {
  namingCase: NamingCase
}

export const config: TSSerdeConfig = {
  namingCase: NamingCase.none,
}

export function getConfig(): TSSerdeConfig {
  return config
}

export function setConfig(newConfig: Partial<TSSerdeConfig>): void {
  Object.assign(config, newConfig)
}
