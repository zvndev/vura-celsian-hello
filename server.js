import { createApp, serve } from '@celsian/core';

const app = createApp({ clientIp: { header: 'x-vura-client-ip' } });
app.get('/', (req, reply) => reply.json({ ip: req.ip, xff: req.headers['x-forwarded-for'] ?? null }));
serve(app);
