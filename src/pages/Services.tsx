import ServicesSection from "@/components/ServicesSection";
import heroImage from "@/assets/services-hero.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section
        className="relative h-[420px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Comprehensive engineering services from concept to production,
            helping you bring innovative digital device solutions to reality.
          </p>

          {/* Breadcrumb */}
          {/* <div className="inline-flex items-center gap-2 bg-primary px-6 py-2 rounded-full text-white text-sm font-medium">
            <span className="opacity-90">Home</span>
            <span className="opacity-75">→</span>
            <span>Our Services</span>
          </div> */}
        </div>
      </section>

      {/* SERVICES CONTENT */}
      <ServicesSection />
    </div>
  );
};

export default Services;

// import ServicesSection from "@/components/ServicesSection";

// const Services = () => {
//   return (
//     <div className="min-h-screen">
//       <div className="bg-gradient-hero py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
//             Our Services
//           </h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Comprehensive engineering services from concept to production, 
//             helping you bring innovative digital device solutions to reality.
//           </p>
//         </div>
//       </div>
//       <ServicesSection />
//     </div>
//   );
// };

// export default Services;