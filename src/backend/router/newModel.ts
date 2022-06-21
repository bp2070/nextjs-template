import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "../../db/client";

export const newModelRouter = trpc.router().query("get-all", {
  async resolve() {
    return await prisma.newModel.findMany();
  },
}).mutation("create", {
    input: z.object({
        name: z.string().min(3).max(500),
    }),
    async resolve({input}) {
        const n = await prisma.newModel.create({
            data: {
                name: input.name,
            }
        })
    }
});
