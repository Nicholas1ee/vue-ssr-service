import { defineStore } from 'pinia'
import { RenderType } from '@/enums' 

export interface CommonState {
    renderType: RenderType
}

export const useCommonStore = defineStore({
    id: 'common',
    state: (): CommonState => ({
        renderType: 1
    }),
    actions: {
        setRenderType(payload: RenderType) {
            this.renderType = payload
        }
    }
})