import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../../db/client';

export const newModelRouter = trpc
  .router()
  .query('get-all', {
      async resolve() {
          return await prisma.newModel.findMany()
      }
  });