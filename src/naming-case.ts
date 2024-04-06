export enum NamingCase {
  camelCase = 'camelCase',
  snake_case = 'snake_case',
  PascalCase = 'PascalCase',
  kebabCase = 'kebab-case',
  none = 'none',
}

export function toCamelCase(str: string): string {
  const first = str[0].toLowerCase()
  const rest = str.slice(1).replace(/([-_][a-z])/gi, $1 => $1.toUpperCase().replace('-', '').replace('_', ''))
  return first + rest
}

export function toSnakeCase(str: string): string {
  const first = str[0].toLowerCase()
  const rest = str
    .slice(1)
    .replace(/([A-Z])/g, $1 => '_' + $1.toLowerCase())
    .replace(/[-]/g, '_')
  return first + rest
}

export function toPascalCase(str: string): string {
  const first = str[0].toUpperCase()
  const rest = str.slice(1).replace(/([-_][a-z])/gi, $1 => $1.toUpperCase().replace('-', '').replace('_', ''))
  return first + rest
}

export function toKebabCase(str: string): string {
  const first = str[0].toLowerCase()
  const rest = str
    .slice(1)
    .replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase())
    .replace(/[_]/g, '-')
  return first + rest
}

export function toNamingCase(str: string, namingCase: NamingCase): string {
  switch (namingCase) {
    case NamingCase.camelCase:
      return toCamelCase(str)
    case NamingCase.snake_case:
      return toSnakeCase(str)
    case NamingCase.PascalCase:
      return toPascalCase(str)
    case NamingCase.kebabCase:
      return toKebabCase(str)
    case NamingCase.none:
      return str
  }
}
