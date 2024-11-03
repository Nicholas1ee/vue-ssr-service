import { Request, Response } from "express";
import { renderService } from '../services'

export const renderController = async (req: Request, res: Response) => {
    const context = {
        title: 'vue-ssr-service',
        url: req.originalUrl,
    }
    console.log(req.originalUrl, 'req.originalUrl');
    try {
        const html = await renderService(context);
        res.header('Content-Type', 'text/html');
        res.send(html)
    } catch(err) {
        console.log('error', err)
        res.status(500).send(JSON.stringify(err));
    }
}