import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const Contact = () => (
  <div className="flex items-center justify-center" id="contact-us">
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
      <div className="max-w-(--breakpoint-xl) mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-2 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center justify-center">
          <div className="flex gap-3 items-center">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="font-semibold text-xl flex ">
            Email
          </h3>
          </div>
          
          <p className="mt-2 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <a
            className="mt-4 font-medium text-primary"
            href="mailto:support@dreamxorigin.com"
          >
            support@dreamxorigin.com
          </a>
          <br />
          <br />
          <div className="flex gap-3 items-center">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="font-semibold text-xl flex"> Phone</h3>
          </div>
          <p className="mt-2 text-muted-foreground">
            Mon-Fri from 10AM to 4PM.
          </p>
          <a
            className="mt-4 font-medium text-primary"
            href="tel:+91 (989) 459 1650"
          >
            +91 (989) 459 1650
          </a>
        </div>
        {/* <div className="text-center flex flex-col items-center">
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
            RK Apartments, 7th Main Rd, <br /> Hoysala Nagar, Ramamurthy Nagar,{" "}
            <br /> Bengaluru, Karnataka 560016
          </a>
        </div> */}
        {/* <div className="text-center flex flex-col items-center"></div> */}
        <div className="text-center flex flex-col items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835.7438644173537!2d77.67627304259284!3d12.85581775751603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d006c017e6b%3A0x13dc0fc5ce4eed2a!2sSilicon%20Town!5e0!3m2!1sen!2sin!4v1771771661902!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
