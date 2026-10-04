import ContactInfo from "@/components/shadcn-space/blocks/contact-01/contact-info";
import ContactForm from "@/components/shadcn-space/blocks/contact-01/contact-form";

const Contact = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="w-full lg:col-span-7">
            <ContactInfo />
          </div>
          <div className="w-full lg:col-span-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
