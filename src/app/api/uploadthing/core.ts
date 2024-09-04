import { db } from "@/db";
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import { z } from "zod";

const f = createUploadthing();

const createUploader = (type: string, maxFileSize: string) =>
  f({ [type]: { maxFileSize } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        const { configId } = metadata.input;
    
        if (!configId) {
          const evidence = await db.evidence.create({
            data: {
              name: file.name,
              path: file.url,
            },
          });
    
          return { configId: evidence.id };
        } else {
          const updatedEvidence = await db.evidence.update({
            where: {
              id: configId,
            },
            data: {
              path: file.url,
            },
          });
          return { configId: updatedEvidence.id };
        }
      } catch (error) {
        console.error("Failed to process onUploadComplete:", error);
        throw new Error("Failed to complete the upload process. Please try again later.");
      }
    });

export const ourFileRouter = {
  imageUploader: createUploader("image", "4MB"),
  pdfUploader: createUploader("application/pdf", "32MB"),
  csvUploader: createUploader("text/csv", "4MB"),
  JSONUploader: createUploader("application/json", "16MB"),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
