import ContactForm from "@/components/ContactForm";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      
      {/* HERO IMAGE SECTION */}
      <section
        className="relative h-[420px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to turn disruption into opportunity? Let's catalyze your potential
            and drive excellence together.
          </p>
        </div>
      </section>

      {/* CONTACT FORM (UNCHANGED) */}
      <ContactForm />
    </div>
  );
};

export default Contact;

// import ContactForm from "@/components/ContactForm";

// const Contact = () => {
//   return (
//     <div className="min-h-screen">
//       <div className="bg-gradient-hero py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
//             Contact Us
//           </h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Ready to turn disruption into opportunity? Let's catalyze your potential 
//             and drive excellence together.
//           </p>
//         </div>
//       </div>
//       <ContactForm />
//     </div>
//   );
// };

// export default Contact;