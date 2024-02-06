import { prop } from '../styled'

export const token = (path, defaultValue) => ({ theme }) => prop(path, defaultValue)(theme);