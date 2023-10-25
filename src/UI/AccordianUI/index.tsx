import Accordian from "../../Components/Accordian";

const mockData = [
  {
    id: "101",
    title: "Frequently Asked Questions",
    content:
      "Find answers to common questions about our product and services. Learn about our pricing, support options, and more. If you can't find the answer to your question here, please don't hesitate to contact our support team.",
  },
  {
    id: "202",
    title: "Getting Started Guide",
    content:
      "Our getting started guide provides step-by-step instructions on how to set up your account, configure your settings, and start using our platform effectively. It includes video tutorials, user manuals, and tips from our experts to help you get the most out of our services.",
  },
  {
    id: "303",
    title: "Customer Testimonials",
    content:
      "Read what our satisfied customers have to say about their experiences with us. We take pride in delivering exceptional products and services to our clients. These testimonials highlight the success stories, challenges overcome, and positive outcomes achieved with our solutions.",
  },
  {
    id: "404",
    title: "Contact Us",
    content:
      "Have questions or need assistance? Contact our support team for help. Our support team is available 24/7 via phone, email, and live chat. We are here to address your inquiries, resolve issues, and provide guidance to ensure a seamless experience with our products.",
  },
  {
    id: "505",
    title: "Latest News and Updates",
    content:
      "Stay informed about the latest news and updates related to our company and offerings. We regularly post articles, blogs, and announcements about new features, enhancements, and industry trends. Join our mailing list to receive these updates directly in your inbox.",
  },
];

const AccordianUI = () => {
  return <Accordian data={mockData} />;
};

export default AccordianUI;
