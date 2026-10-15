import { Router } from 'express';
import { articles } from '../data/articles';

const router = Router();

router.get('/', (_request, response) => {
    return response.json(articles);
});

router.get('/:id', (request, response) => {
    const { id } = request.params;

    const article = articles.find((article) => article.id === id);

    if (!article) {
        return response.status(404).json({
            error: 'Artigo não encontrado.',
        });
    }

    return response.json(article);
});

export default router;