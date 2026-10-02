"use client";

import { useEffect } from "react";
import { Container, Heading, Text, Button } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service
    console.error(error);
  }, [error]);

  return (
    <Container size="sm" className="py-24 text-center">
      <div className="space-y-6">
        <span className="text-sm font-bold uppercase tracking-widest text-red-600">
          System Notice
        </span>
        <Heading level="h1">An Unexpected Error Occurred</Heading>
        <Text variant="body">
          We encountered an issue while loading this view. Our engineering team has been notified.
        </Text>
        <div className="pt-4 flex justify-center gap-4">
          <Button onClick={() => reset()} variant="primary">
            Try Again
          </Button>
          <Button href="/" variant="outline">
            Return Home
          </Button>
        </div>
      </div>
    </Container>
  );
}
