// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import aiImg from "@/assets/services/ai-analytics.jpg";
// import designImg from "@/assets/services/custom-design.jpg";
// import integrationImg from "@/assets/services/system-integration.jpg";
// import consultingImg from "@/assets/services/consulting.jpg";
// import supportImg from "@/assets/services/support.jpg";
// import trainingImg from "@/assets/services/training.jpg";
// import {
//   Brain,
//   Lightbulb,
//   Cog,
//   Wrench,
//   Users,
//   GraduationCap,
// } from "lucide-react";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: Brain,
//       title: "AI-Driven Data Analytics",
//       image: aiImg,
//       tags: [
//         "Smart Device Integration",
//         "Predictive & Preventive Solutions",
//         "Custom Electronics & IoT Development",
//         "Machine Learning Analytics",
//       ],
//       description:
//         "Transforming raw device data into actionable insights for healthcare, defence, automotive, and industrial applications.",
//     },
//     {
//       icon: Lightbulb,
//       title: "Custom Design & Development",
//       image: designImg,
//       tags: [
//         "Concept Development",
//         "Prototyping",
//         "Testing & Validation",
//         "Production Support",
//       ],
//       description:
//         "End-to-end custom electronic system design from concept to production, tailored to your specific requirements.",
//     },
//     {
//       icon: Cog,
//       title: "System Integration",
//       image: integrationImg,
//       tags: [
//         "Hardware Integration",
//         "Software Development",
//         "IoT Solutions",
//         "Cloud Connectivity",
//       ],
//       description:
//         "Seamless integration of hardware and software components to create comprehensive solutions.",
//     },
//     {
//       icon: Wrench,
//       title: "Technical Consulting",
//       image: consultingImg,
//       tags: [
//         "Technical Analysis",
//         "System Architecture",
//         "Performance Optimization",
//         "Best Practices",
//       ],
//       description:
//         "Expert consulting services to help you optimize and scale your systems.",
//     },
//     {
//       icon: Users,
//       title: "Support & Maintenance",
//       image: supportImg,
//       tags: [
//         "24/7 Technical Support",
//         "Preventive Maintenance",
//         "System Updates",
//         "Training Programs",
//       ],
//       description:
//         "Comprehensive support services to ensure peak performance.",
//     },
//     {
//       icon: GraduationCap,
//       title: "Training and Development",
//       image: trainingImg,
//       tags: [
//         "Technical Skills Development",
//         "Custom Training Programs",
//         "Workshops",
//         "Certification Support",
//       ],
//       description:
//         "Hands-on training programs for teams driving digital innovation.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-20"
//         >
//           <h2 className="text-4xl font-bold mb-4">Our Services</h2>
//           <p className="text-lg text-muted-foreground max-w-3xl">
//             Engineering excellence to transform ideas into intelligent devices
//           </p>
//         </motion.div>

//         {/* Portfolio Items */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-28"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
//                 index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Text */}
//               <div>
//                 <h3 className="text-3xl font-bold mb-4">
//                   {service.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-3 mb-6">
//                   {service.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="px-4 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <p className="text-muted-foreground text-lg mb-8">
//                   {service.description}
//                 </p>

//                 <Button className="rounded-full px-6 py-3">
//                   View Website
//                 </Button>
//               </div>

//               {/* Image */}
//               <div className="rounded-xl overflow-hidden shadow-lg">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import aiImg from "@/assets/services/ai-analytics.jpg";
// import designImg from "@/assets/services/custom-design.jpg";
// import integrationImg from "@/assets/services/system-integration.jpg";
// import consultingImg from "@/assets/services/consulting.jpg";
// import supportImg from "@/assets/services/support.jpg";
// import trainingImg from "@/assets/services/training.jpg";
// import {
//   Wrench,
//   Lightbulb,
//   Users,
//   Cog,
//   Target,
//   Clock,
//   Award,
//   Brain,
//   GraduationCap,
// } from "lucide-react";

// /* Animation Variants */
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: Brain,
//       title: "AI-Driven Data Analytics",
//       featured: true,
//       image: aiImg,
//       description:
//         "Transforming raw device data into actionable insights for healthcare, defence, automotive, and industrial applications.",
//       highlights: [
//         "Smart Device Integration",
//         "Predictive & Preventive Solutions",
//         "Custom Electronics & IoT Development",
//         "Machine Learning Analytics",
//       ],
//     },
//     {
//       icon: Lightbulb,
//       title: "Custom Design & Development",
//       image: designImg,
//       description:
//         "End-to-end custom electronic system design from concept to production, tailored to your specific requirements.",
//       highlights: [
//         "Concept Development",
//         "Prototyping",
//         "Testing & Validation",
//         "Production Support",
//       ],
//     },
//     {
//       icon: Cog,
//       title: "System Integration",
//       image: integrationImg,
//       description:
//         "Seamless integration of hardware and software components to create comprehensive solutions.",
//       highlights: [
//         "Hardware Integration",
//         "Software Development",
//         "IoT Solutions",
//         "Cloud Connectivity",
//       ],
//     },
//     {
//       icon: Wrench,
//       title: "Technical Consulting",
//       image: consultingImg,
//       description:
//         "Expert consulting services to help you optimize and scale your systems.",
//       highlights: [
//         "Technical Analysis",
//         "System Architecture",
//         "Performance Optimization",
//         "Best Practices",
//       ],
//     },
//     {
//       icon: Users,
//       title: "Support & Maintenance",
//       image: supportImg,
//       description:
//         "Comprehensive support services to ensure peak performance.",
//       highlights: [
//         "24/7 Technical Support",
//         "Preventive Maintenance",
//         "System Updates",
//         "Training Programs",
//       ],
//     },
//     {
//       icon: GraduationCap,
//       title: "Training and Development",
//       image: trainingImg,
//       description:
//         "Hands-on training programs for teams driving digital innovation.",
//       highlights: [
//         "Technical Skills Development",
//         "Custom Training Programs",
//         "Workshops",
//         "Certification Support",
//       ],
//     },
//   ];

//   const capabilities = [
//     {
//       icon: Target,
//       title: "Precision Engineering",
//       description:
//         "High-accuracy systems designed to meet exact specifications.",
//     },
//     {
//       icon: Clock,
//       title: "Fast Turnaround",
//       description:
//         "Efficient processes delivering quality solutions quickly.",
//     },
//     {
//       icon: Award,
//       title: "Quality Assurance",
//       description:
//         "Rigorous testing ensures reliable and durable products.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-br from-muted/40 via-muted/20 to-secondary/30 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Our Services
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Engineering excellence to transform ideas into intelligent devices
//           </p>
//         </motion.div>

//         {/* Services */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20"
//         >
//           {services.map((service, index) => (
//             <motion.div key={index} variants={cardVariants}>
//               <Card
//                 className={`p-8 relative transition-all duration-300 ${
//                   service.featured
//                     ? "border-2 border-primary shadow-xl scale-[1.02]"
//                     : "border border-border/50"
//                 }`}
//               >
//                 {service.featured && (
//                   <span className="absolute top-4 right-4 text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">
//                     FEATURED
//                   </span>
//                 )}

//                 <div className="flex items-start mb-6">
//                   <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mr-5">
//                     <service.icon className="h-7 w-7 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-3">
//                       {service.title}
//                     </h3>
//                     <p className="text-muted-foreground mb-4">
//                       {service.description}
//                     </p>
//                     <Button className="rounded-full px-6">
//                       View Details
//                     </Button>
//                   </div>
//                 </div>

//                 {/* Highlights */}
//                 <div className="grid grid-cols-2 gap-3">
//                   {service.highlights.map((item, i) => (
//                     <div key={i} className="flex items-center text-sm">
//                       <span className="w-2 h-2 bg-primary rounded-full mr-2" />
//                       {item}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Image */}
//                 <div className="mt-6 overflow-hidden rounded-xl">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
//                   />
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Capabilities */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {capabilities.map((cap, index) => (
//             <motion.div key={index} variants={cardVariants}>
//               <div className="text-center p-8 rounded-xl bg-white shadow-card border border-border/50">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <cap.icon className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="font-semibold text-lg mb-2">
//                   {cap.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground">
//                   {cap.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import aiImg from "@/assets/services/ai-analytics.jpg";
// import designImg from "@/assets/services/custom-design.jpg";
// import integrationImg from "@/assets/services/system-integration.jpg";
// import consultingImg from "@/assets/services/consulting.jpg";
// import supportImg from "@/assets/services/support.jpg";
// import trainingImg from "@/assets/services/training.jpg";
// import {
//   Wrench,
//   Lightbulb,
//   Users,
//   Cog,
//   Target,
//   Clock,
//   Award,
//   Brain,
//   GraduationCap,
// } from "lucide-react";

// /* Animation Variants */
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const services = [
//   {
//     icon: Brain,
//     title: "AI-Driven Data Analytics",
//     featured: true,
//     image: aiImg,
//     description:
//       "Transforming raw device data into actionable insights for healthcare, defence, automotive, and industrial applications.",
//     highlights: [
//       "Smart Device Integration",
//       "Predictive & Preventive Solutions",
//       "Custom Electronics & IoT Development",
//       "Machine Learning Analytics",
//     ],
//   },
//   {
//     icon: Lightbulb,
//     title: "Custom Design & Development",
//     image: designImg,
//     description: "...",
//     highlights: [], // Fixed syntax here
//   },
//   {
//     icon: Cog,
//     title: "System Integration",
//     image: integrationImg,
//     description: "...",
//     highlights: [], // Fixed syntax here
//   },
//   {
//     icon: Wrench,
//     title: "Technical Consulting",
//     image: consultingImg,
//     description: "...",
//     highlights: [], // Fixed syntax here
//   },
//   {
//     icon: Users,
//     title: "Support & Maintenance",
//     image: supportImg,
//     description: "...",
//     highlights: [], // Fixed syntax here
//   },
//   {
//     icon: GraduationCap,
//     title: "Training and Development",
//     image: trainingImg,
//     description: "...",
//     highlights: [], // Fixed syntax here
//   },
// ];


// const ServicesSection = () => {
//   const services = [
//     {
//       icon: Brain,
//       title: "AI-Driven Data Analytics",
//       featured: true,
//       description:
//         "Transforming raw device data into actionable insights for healthcare, defence, automotive, and industrial applications.",
//       highlights: [
//         "Smart Device Integration",
//         "Predictive & Preventive Solutions",
//         "Custom Electronics & IoT Development",
//         "Machine Learning Analytics",
//       ],
//     },
//     {
//       icon: Lightbulb,
//       title: "Custom Design & Development",
//       description:
//         "End-to-end custom electronic system design from concept to production, tailored to your specific requirements.",
//       highlights: [
//         "Concept Development",
//         "Prototyping",
//         "Testing & Validation",
//         "Production Support",
//       ],
//     },
//     {
//       icon: Cog,
//       title: "System Integration",
//       description:
//         "Seamless integration of hardware and software components to create comprehensive solutions.",
//       highlights: [
//         "Hardware Integration",
//         "Software Development",
//         "IoT Solutions",
//         "Cloud Connectivity",
//       ],
//     },
//     {
//       icon: Wrench,
//       title: "Technical Consulting",
//       description:
//         "Expert consulting services to help you optimize and scale your systems.",
//       highlights: [
//         "Technical Analysis",
//         "System Architecture",
//         "Performance Optimization",
//         "Best Practices",
//       ],
//     },
//     {
//       icon: Users,
//       title: "Support & Maintenance",
//       description:
//         "Comprehensive support services to ensure peak performance.",
//       highlights: [
//         "24/7 Technical Support",
//         "Preventive Maintenance",
//         "System Updates",
//         "Training Programs",
//       ],
//     },
//     {
//       icon: GraduationCap,
//       title: "Training and Development",
//       description:
//         "Hands-on training programs for teams driving digital innovation.",
//       highlights: [
//         "Technical Skills Development",
//         "Custom Training Programs",
//         "Workshops",
//         "Certification Support",
//       ],
//     },
//   ];

//   const capabilities = [
//     {
//       icon: Target,
//       title: "Precision Engineering",
//       description:
//         "High-accuracy systems designed to meet exact specifications.",
//     },
//     {
//       icon: Clock,
//       title: "Fast Turnaround",
//       description:
//         "Efficient processes delivering quality solutions quickly.",
//     },
//     {
//       icon: Award,
//       title: "Quality Assurance",
//       description:
//         "Rigorous testing ensures reliable and durable products.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-20"
//         >
//           <h2 className="text-4xl font-bold text-foreground mb-4">
//             Our Services
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl">
//             Engineering excellence to transform ideas into intelligent devices
//           </p>
//         </motion.div>

//         {/* Services List */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-28"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
//                 index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Text Content */}
//               <div>
//                 {service.featured && (
//                   <span className="inline-block mb-4 text-xs font-semibold bg-primary text-white px-4 py-1 rounded-full">
//                     FEATURED SERVICE
//                   </span>
//                 )}

//                 <h3 className="text-3xl font-bold mb-4">
//                   {service.title}
//                 </h3>

//                 <p className="text-muted-foreground text-lg mb-6">
//                   {service.description}
//                 </p>

//                 {/* Highlights */}
//                 <div className="flex flex-wrap gap-3 mb-8">
//                   {service.highlights.map((item, i) => (
//                     <span
//                       key={i}
//                       className="px-4 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>

//                 <Button className="rounded-full px-6">
//                   View Details
//                 </Button>
//               </div>

//               {/* Visual / Image Block */}
//               <Card
//                 className={`relative rounded-2xl p-10 shadow-lg border ${
//                   service.featured
//                     ? "border-primary shadow-primary/20"
//                     : "border-border"
//                 }`}
//               >
//                 <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
//                   <service.icon className="h-10 w-10 text-white" />
//                 </div>

//                 {/* Image Placeholder */}
//                 <div className="h-64 bg-muted/40 rounded-xl flex items-center justify-center text-muted-foreground text-sm">
//                   Service Image / Illustration
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Capabilities */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-28"
//         >
//           {capabilities.map((cap, index) => (
//             <motion.div key={index} variants={cardVariants}>
//               <div className="text-center p-10 rounded-xl bg-white shadow-md border">
//                 <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
//                   <cap.icon className="h-7 w-7 text-primary" />
//                 </div>
//                 <h3 className="font-semibold text-lg mb-2">
//                   {cap.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground">
//                   {cap.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aiImg from "@/assets/services/ai-analytics.jpg";
import designImg from "@/assets/services/custom-design.jpg";
import integrationImg from "@/assets/services/system-integration.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import supportImg from "@/assets/services/support.jpg";
import trainingImg from "@/assets/services/training.jpg";
import {
  Brain,
  Lightbulb,
  Cog,
  Wrench,
  Users,
  GraduationCap,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Driven Data Analytics",
      image: aiImg,
      tags: [
        "Smart Device Integration",
        "Predictive & Preventive Solutions",
        "Custom Electronics & IoT Development",
        "Machine Learning Analytics",
      ],
      description:
        "Transforming raw device data into actionable insights for healthcare, defence, automotive, and industrial applications.",
    },
    {
      icon: Lightbulb,
      title: "Custom Design & Development",
      image: designImg,
      tags: [
        "Concept Development",
        "Prototyping",
        "Testing & Validation",
        "Production Support",
      ],
      description:
        "End-to-end custom electronic system design from concept to production, tailored to your specific requirements.",
    },
    {
      icon: Cog,
      title: "System Integration",
      image: integrationImg,
      tags: [
        "Hardware Integration",
        "Software Development",
        "IoT Solutions",
        "Cloud Connectivity",
      ],
      description:
        "Seamless integration of hardware and software components to create comprehensive solutions.",
    },
    {
      icon: Wrench,
      title: "Technical Consulting",
      image: consultingImg,
      tags: [
        "Technical Analysis",
        "System Architecture",
        "Performance Optimization",
        "Best Practices",
      ],
      description:
        "Expert consulting services to help you optimize and scale your systems.",
    },
    {
      icon: Users,
      title: "Support & Maintenance",
      image: supportImg,
      tags: [
        "24/7 Technical Support",
        "Preventive Maintenance",
        "System Updates",
        "Training Programs",
      ],
      description:
        "Comprehensive support services to ensure peak performance.",
    },
    {
      icon: GraduationCap,
      title: "Training and Development",
      image: trainingImg,
      tags: [
        "Technical Skills Development",
        "Custom Training Programs",
        "Workshops",
        "Certification Support",
      ],
      description:
        "Hands-on training programs for teams driving digital innovation.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-3xl">
            Engineering excellence to transform ideas into intelligent devices
          </p>
        </motion.div>

        {/* Portfolio Style Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20 sm:space-y-28"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
            >
              {/* Image (Mobile First) */}
              <div
                className={`order-1 ${
                  index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[220px] sm:h-[300px] lg:h-[360px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`order-2 ${
                  index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">
                  {service.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 rounded-full text-sm bg-[#e6f0ff] text-[#2563eb] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[#475569] text-base sm:text-lg mb-8">
                  {service.description}
                </p>

                <Button className="rounded-full px-6 py-3 bg-[#2563eb] hover:bg-[#1e40af]">
                  View Website
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
