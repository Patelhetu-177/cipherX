import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import { z } from "zod";

const f = createUploadthing();


const createUploader = (type: string, maxFileSize: string) =>
  f({ [type]: { maxFileSize } })

    .input(z.object({ configId: z.string().optional() }))

    .middleware(async ({ input }) => {
      return {input};
    })

    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input
      return {configId}
    });

export const ourFileRouter = {
  imageUploader: createUploader("image", "4MB"),
  pdfUploader: createUploader("application/pdf", "32MB"), // Specific for PDF files
  csvUploader: createUploader("text/csv", "4MB"),
  JSONUploader: createUploader("application/json", "16MB"),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
