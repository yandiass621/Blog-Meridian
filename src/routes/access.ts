import { Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
import { users } from '../data/users';

declare module 'express-session' {
    interface SessionData {
        authorizedEmail?: string;
    }
}

const router = Router();

interface CheckAccessBody {
    email?: unknown;
    password?: unknown;
}

function normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
}

router.post(
    '/check',
    async (
        request: Request<{}, {}, CheckAccessBody>,
        response: Response,
    ) => {
        const { email, password } = request.body;

        if (
            typeof email !== 'string' ||
            email.trim() === '' ||
            typeof password !== 'string' ||
            password === ''
        ) {
            return response.status(400).json({
                error: 'E-mail e senha são obrigatórios.',
            });
        }

        const normalizedEmail = normalizeEmail(email);

        const user = users.find((user) => {
            return normalizeEmail(user.email) === normalizedEmail;
        });

        if (!user) {
            return response.status(401).json({
                error: 'E-mail ou senha inválidos.',
            });
        }

        const passwordIsCorrect = await bcrypt.compare(
            password,
            user.passwordHash,
        );

        if (!passwordIsCorrect) {
            return response.status(401).json({
                error: 'E-mail ou senha inválidos.',
            });
        }

        request.session.authorizedEmail = normalizedEmail;

        return response.json({
            email: normalizedEmail,
            hasAccess: true,
        });
    },
);

export default router;