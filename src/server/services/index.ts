import { createBundleRenderer } from 'vue-server-renderer'
import bundle from '../../../dist/vue-ssr-server-bundle.json'
import clientManifest from '../../../dist/vue-ssr-client-manifest.json'
import fs from 'fs'
import path from 'path'

const resolve = (dir:string) => path.resolve(__dirname, dir)

export const renderService = (context: Object):Promise<string> => {
    const template = fs.readFileSync(
        resolve('../../../dist/index.ssr.html'),
        'utf-8'
    );
    const renderer = createBundleRenderer(bundle, { template, clientManifest })

    return renderer.renderToString(context)
}