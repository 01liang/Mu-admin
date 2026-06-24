import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import loginMock from './login'
import menuMock from './login/menu'
import systemMock from './system'

const mockModules: any[] = []
const modules = [loginMock, menuMock, systemMock]
modules.forEach((mod) => {
    mockModules.push(...mod)
})

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
    createProdMockServer(mockModules)
}
