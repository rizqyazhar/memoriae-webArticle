const ContactPage = () => {
  return (
    <div className='min-h-dvh px-3 pt-10 bg-slate-100 font-inter flex flex-col items-center gap-10'>
      <h1 className='text-2xl font-medium'>Contact Us!</h1>
      <div className='flex justify-center gap-10'>
        <a href='https://www.instagram.com/' target='_blank'>
          <img
            src='/contact/instagram-logo.svg'
            alt='instagram'
            className='w-12'
          />
        </a>
        <a href='https://mail.google.com/mail/u/0/' target='_blank'>
          <img src='/contact/gmail-logo.svg' alt='gmail' className='w-12' />
        </a>
        <a href='https://id.linkedin.com/' target='_blank'>
          <img
            src='/contact/linkedin-logo.svg'
            alt='linkedin'
            className='w-12'
          />
        </a>
        <a href='https://www.whatsapp.com/?lang=id_ID' target='_blank'>
          <img
            src='/public/contact/whatsapp-logo.svg'
            alt='whatsapp'
            className='w-12'
          />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
