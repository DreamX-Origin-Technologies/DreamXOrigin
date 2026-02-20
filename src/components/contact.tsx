import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const Contact = () => (
  <div className="flex items-center justify-center">
    <div className="text-center">
      <b className="text-muted-foreground uppercase font-semibold text-sm">
        Contact Us
      </b>
      <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
        Get In Touch
      </h2>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground">
        Our friendly team is always here to chat.
      </p>
      <div className="max-w-(--breakpoint-xl) mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Email</h3>
          <p className="mt-2 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <a
            className="mt-4 font-medium text-primary"
            href="mailto:dreamorigintech@gmail.com"
          >
            dreamorigintech@gmail.com
          </a>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Office</h3>
          <p className="mt-2 text-muted-foreground">
            Come say hello at our office HQ.
          </p>
          <a
            className="mt-4 font-medium text-primary"
            href="https://maps.app.goo.gl/bJf5VHGXecYgA8YW9"
            target="_blank"
          >
            RK Apartments, 7th Main Rd, <br /> Hoysala Nagar, Ramamurthy Nagar, <br /> Bengaluru, Karnataka 560016
          </a>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Phone</h3>
          <p className="mt-2 text-muted-foreground">Mon-Fri from 10am to 5pm.</p>
          <a
            className="mt-4 font-medium text-primary"
            href="tel:akashmoradiya3444@gmail.com"
          >
            +91 (989) 459 1650
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
