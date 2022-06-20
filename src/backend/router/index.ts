import * as trpc from '@trpc/server';
import superjson from 'superjson';
import { newModelRouter } from './newModel';

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge('new.', newModelRouter)

// export type definition of API
export type AppRouter = typeof appRouter;