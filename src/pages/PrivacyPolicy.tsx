import { ShieldCheck } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
        <ShieldCheck className="size-5 shrink-0 text-primary" />
        <p>
          Your privacy and data security matter to us. This page explains how we
          collect, use, and protect your information.
        </p>
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold tracking-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We value your trust in us, which is why we prioritize rigorous
          quality for safe transactions and the protection of consumer
          information.
        </p>

        <div className="rounded-lg border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 p-4 my-6">
          <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
            Note:
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            Please bear in mind that our privacy laws may change at any time and
            without warning. Please review this policy on a frequent basis to
            ensure that you are aware of any changes.
          </p>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            By accessing this website, you expressly accept the rules and
            conditions of this Privacy Policy. If you do not agree, please do not
            use or access our website.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            You agree and acknowledge our use and dissemination of your personal
            information in line with this Privacy Policy by simply using the
            website.
          </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">
          Collection of Personally Identifiable Information and other
          Information
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We gather and retain your personal information submitted by you
          periodically when you visit our website. We have a primary aim of
          providing you with an unobtrusive, efficient, pleasurable and personal
          experience. This will allow us to provide you with the services and
          features that are likely to suit your needs, as well as adapting our
          website in order to make it easier for you to interact. Moreover, for
          that purpose we will obtain personal data from you which we consider
          to be necessary.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Generally, you are free to visit the website without revealing your
          identity or other personal data. After you provide us with your
          private information, you are not anonymous anymore. We&apos;ll explain
          to you which fields are necessary and, if this is possible, whether
          they can be used for free. If you refuse to use a service or feature
          on your website, you may not always be able to make public
          information. Depending on the use of your website, we may be able to
          monitor some information about you for automatic purposes.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In acquiring our service, the customer is required to fill forms for
          delivery of the requested service. The customer is supposed to
          furnish valid contact information, such as name, mailing address and
          email address. This information is used in the best interest of the
          customer and the associated service provided. A valid user&apos;s
          I.D/ Passport / Drivers Permit Number is required to verify the
          credentials of the information submitted. DreamX Origin
          prioritizes on the confidentiality of the customer&apos;s
          information.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          DreamX Origin&apos;s Privacy Policy does not apply to other
          advertisers or websites. Thus, we are advising you to consult the
          respective Privacy Policies of these third-party ad servers for more
          detailed information. It may include their practices and instructions
          about how to opt-out of certain options.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Questions?</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you have any questions about this statement, please contact —{" "}
          <a
            href="mailto:info@dreamxorigin.com"
            className="text-primary hover:underline font-medium"
          >
            info@dreamxorigin.com
          </a>
        </p>
      </article>
    </div>
  );
}
