import { Router, Request, Response } from 'express';

const router = Router();

router.get('/page', (req: Request, res: Response) => {
    res.send('Account Page');
});

export default router;
