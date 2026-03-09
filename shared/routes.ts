import { z } from 'zod';
import { programs } from './schema';

export const errorSchemas = {
  notFound: z.object({ message: z.string() }),
  internal: z.object({ message: z.string() }),
};

export const api = {
  programs: {
    list: {
      method: 'GET' as const,
      path: '/api/programs' as const,
      responses: {
        200: z.array(z.custom<typeof programs.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/programs/:id' as const,
      responses: {
        200: z.custom<typeof programs.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type ProgramResponse = z.infer<typeof api.programs.get.responses[200]>;
export type ProgramsListResponse = z.infer<typeof api.programs.list.responses[200]>;
