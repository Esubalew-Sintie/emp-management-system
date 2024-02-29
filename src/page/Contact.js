import React from 'react';

const ContactUs = () => {
  return (
    <div className=" mx-auto px-4 py-8 flex  flex-col ">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-lg mb-8">
        If you have any questions or need assistance, please don't hesitate to contact us:
      </p>
      <div className=" flex flex-wrap">
        <div className=" rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">General Inquiries</h3>
          <p className="mb-4">
            For general inquiries about the Employee Management System, please email us at{' '}
            <a href="mailto:info@huletejuenese.com" className="text-blue-600">info@huletejuenese.com</a>.
          </p>
          <p>
            You can also reach us by phone at <span className="font-bold">+251 9 1234 5678</span>.
          </p>
        </div>
        <div className=" rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">Technical Support</h3>
          <p className="mb-4">
            If you require technical support or have any issues with the Employee Management System, please email our support team at{' '}
            <a href="mailto:support@huletejuenese.com" className="text-blue-600">support@huletejuenese.com</a>.
          </p>
          <p>
            You can also contact our technical support team at <span className="font-bold">+251 9 9876 5432</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;