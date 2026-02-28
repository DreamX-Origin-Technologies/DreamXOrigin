import { RotateCcw } from "lucide-react";

export function RefundAndCancellationPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
        <RotateCcw className="size-5 shrink-0 text-primary" />
        <p>
          Please read this policy before making a payment. We are committed to
          clear and fair refund and cancellation terms.
        </p>
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold tracking-tight mb-6">
          Refund and Cancellation Policy
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Only Services bought exclusively from the DreamX Origin site can be
          subject to exchange. We will certainly not accept returns of Services
          bought from any other third-party websites. To reach out to us in case
          of any changes, updates or clarifications, mail us at:{" "}
          <a
            href="mailto:info@dreamxorigin.com"
            className="text-primary hover:underline font-medium"
          >
            info@dreamxorigin.com
          </a>
          . Please allow 48-72 working hours to revert on the same. You will
          receive a telecall or an email once your return is processed.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Terms &amp; Conditions:
        </h2>
        <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-6 space-y-2">
          <li>
            All Services purchased have to be accompanied by a copy of the
            original invoice.
          </li>
          <li>
            The service is not eligible for refund once the project is approved
            and initiated.
          </li>
          <li>
            The service purchased can be cancelled only 24 hours prior to project
            initiation.
          </li>
          <li>
            We interact with our clients and do our best to solve all their
            queries and start work after their approval, therefore, there is no
            provision for any kind of refund after project initiation. We hence,
            clearly mention that the paid amount is non-refundable in any
            circumstance.
          </li>
        </ul>

        <div className="rounded-lg border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 p-4 my-6">
          <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
            Please note:
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Please read and make sure you fully understand our refund and
            cancellation policy prior to making a payment. Should you have
            other questions about our policies, feel free to mail us or call us.
            Although we have tried to precisely show the actual videos of the
            Services, there may be a minor variation based on the operating
            system you are using.
          </p>
        </div>
      </article>
    </div>
  );
}
