import React from "react";
import { getAllFiles } from "@/server/queries";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Uploader from "./uploader";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const files = await getAllFiles();

  return (
    <main className="px-2 md:px-20 py-12">
      <Uploader />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {files?.map((file) => {
          return (
            <Card key={file.user}>
              <CardHeader>
                <CardTitle>{file.file}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Link href={file.link || "#"} download>
                    View
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
