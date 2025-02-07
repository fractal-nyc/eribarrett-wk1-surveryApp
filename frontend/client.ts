import { treaty } from '@elysiajs/eden'
import type { ApiApp } from '../index.ts' //eventually ./server after compiling to binary

const apiClient = treaty<ApiApp>(import.meta.env.VITE_SERVER_URL)

export default apiClient