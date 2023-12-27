import { Button, Label, Textarea, TextInput } from "flowbite-react";

export default function ContactPage() {
  return (
    <>
      <h1>Contact Us</h1>

      <p>
        If you have any questions, concerns, or feedback regarding LexStorm
        Vault, feel free to reach out to us. We value your input and are here to
        assist you.
      </p>

      <h2>Get In Touch</h2>
      <p>
        You can contact us directly at{" "}
        <a href="mailto:support@lexstormvault.com">support@lexstormvault.com</a>{" "}
        or fill out the form below:
      </p>

      <form className="flex flex-col gap-4 max-w-xl mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput id="name" type="text" placeholder="John Doe" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
          />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </>
  );
}
