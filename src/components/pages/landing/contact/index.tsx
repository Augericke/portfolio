import React from 'react';
import ShowOnScroll from '../../../library/animations/showOnScroll';

type ContactSectionProps = {};

const ContactSection: React.FC<ContactSectionProps> = (
  props: ContactSectionProps
) => {
  return (
    <>
      <div
        className="mt-96 mb-16 flex w-full flex-col items-center justify-center"
        id="contact"
      >
        <ShowOnScroll customClass="mb-16 flex w-2/3 justify-center lg:w-1/2">
          <p className="w-full text-justify text-2xl font-light text-white md:mb-6 lg:mb-7 lg:w-2/3 lg:text-3xl">
            My inbox is always open - so if you want to work together on
            something don&apos;t be afraid to say hi.
          </p>
        </ShowOnScroll>
        <a
          href="mailto:austingericke.inquiries@gmail.com"
          className="w-2/3 md:w-1/2 xl:w-1/4"
        >
          <ShowOnScroll
            customClass="flex w-full cursor-pointer items-center justify-center rounded-full bg-primaryDark py-6 text-center
                      text-8xl font-extrabold leading-none text-white shadow-lg dark:bg-primary
                      "
          >
            <>hi</>
          </ShowOnScroll>
        </a>
      </div>
    </>
  );
};

export default ContactSection;
