import Link from "next/link";
import { Container, Heading, Text, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Container size="sm" className="py-24 text-center">
      <div className="space-y-6">
        <span className="text-sm font-bold uppercase tracking-widest text-sky-700">
          404 &bull; Page Not Found
        </span>
        <Heading level="h1">Medical Resource Not Located</Heading>
        <Text variant="lead">
          The requested page or document could not be found. It may have been relocated or updated.
        </Text>
        <div className="pt-4 flex justify-center gap-4">
          <Button href="/" variant="primary">
            Return to Overview
          </Button>
          <Button href="/contact" variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </Container>
  );
}
