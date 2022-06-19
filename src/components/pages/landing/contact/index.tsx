import React from 'react';
import { motion } from 'framer-motion';

type ContactSectionProps = {};

const ContactSection: React.FC<ContactSectionProps> = (
  props: ContactSectionProps
) => {
  return (
    <>
      <div
        className="mt-96 flex w-full flex-col items-center justify-center gap-32"
        id="contact"
      >
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [30, 0], opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="flex w-2/3 justify-center lg:w-1/2"
        >
          <p className="mb-5 w-full text-justify font-light text-white md:mb-6 md:text-2xl lg:mb-7 lg:w-2/3 lg:text-3xl">
            My inbox is always open - so if you want to work together on
            something don&apos;t be afraid to say hi.
          </p>
        </motion.div>
        <a
          href="mailto:austingericke.inquiries@gmail.com"
          className="w-2/3 md:w-1/2 xl:w-1/4"
        >
          <motion.span
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [30, 0], opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="flex w-full cursor-pointer items-center justify-center rounded-full bg-primaryDark py-6 text-center
                      text-8xl font-extrabold leading-none text-white shadow-lg dark:bg-primary
                      "
          >
            hi
          </motion.span>
        </a>
      </div>
    </>
  );
};

export default ContactSection;
