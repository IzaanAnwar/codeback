"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Uploader() {
  const router = useRouter();
  return (
    <main className="px-2 md:px-20 py-12">
      <div className="w-full md:w-1/3 lg:w-1/4 mx-auto">
        <UploadDropzone
          endpoint="fileUploader"
          onClientUploadComplete={(res) => {
            toast.success("Upload complete", { description: 3000 });
            router.refresh();
          }}
          onUploadError={(error: Error) => {
            toast.error(`ERROR! ${error.message}`, { description: 3000 });
          }}
        />
      </div>
    </main>
  );
}
