import { Card } from "@/components/ui/card";
import {
  Activity,
  Bluetooth,
  MapPin,
  Shield,
  Zap,
  Wifi,
  Star,
} from "lucide-react";

/* ----------------------------------
   Reusable Product Card Component
-----------------------------------*/
const ProductCard = ({ product }: any) => {
  const Icon = product.icon;

  return (
    <Card
      className={`
        relative flex flex-col h-full rounded-2xl bg-white p-8
        border-2 transition-all duration-300
        ${
          product.featured
            ? "border-blue-400 shadow-lg"
            : "border-slate-200"
        }
        hover:border-blue-400 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">
            {product.title}
          </h3>
        </div>

        {/* {product.featured && (
          <span className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
            <Star className="h-3 w-3 fill-blue-600" />
            Featured
          </span>
        )} */}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed mb-6">
        {product.description}
      </p>

      {/* Key Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-900 mb-3">
          Key Features
        </h4>
        <ul className="space-y-2">
          {product.features.map((feature: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-slate-700"
            >
              <Star className="h-4 w-4 text-amber-500 fill-amber-400 mt-0.5 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer for equal height */}
      <div className="flex-grow" />

      {/* Applications */}
      <div className="pt-4 border-t border-slate-200 mb-6">
        <span className="text-xs font-semibold text-slate-500 uppercase">
          Applications
        </span>
        <p className="text-sm font-semibold text-slate-900 mt-1">
          {product.applications}
        </p>
      </div>

      {/* CTA */}
      {/* <button
        className="
          w-full rounded-xl border border-slate-900
          py-2.5 text-sm font-semibold text-slate-900
          transition-all duration-300
          hover:bg-slate-900 hover:text-white
        "
      >
        Learn More
      </button> */}
    </Card>
  );
};

/* ----------------------------------
   Products Section
-----------------------------------*/
const ProductsSection = () => {
  const products = [
    {
      icon: Activity,
      title: "High-Speed DAQ Systems",
      description:
        "Multi-channel high-speed data acquisition systems with sampling rates greater than 50 kSPS for demanding applications.",
      features: [
        "8-Channel simultaneous sampling",
        "Accelerometer & microphone interfaces",
        "MATLAB & LabVIEW compatibility",
        "Real-time analysis capabilities",
      ],
      applications: "Vibration Analysis, Acoustics, Structural Testing",
      featured: true,
    },
    {
      icon: Bluetooth,
      title: "BLE Healthcare Devices",
      description:
        "Advanced Bluetooth Low Energy devices designed specifically for healthcare monitoring and patient tracking applications.",
      features: [
        "Low power consumption",
        "Real-time health monitoring",
        "Secure data transmission",
        "Cloud platform integration",
      ],
      applications: "Patient Monitoring, Asset Tracking, Wellness Devices",
    },
    {
      icon: MapPin,
      title: "GPS & Navigation Systems",
      description:
        "Precision GPS systems and navigation solutions for various industrial and commercial applications.",
      features: [
        "High-accuracy positioning",
        "Multi-constellation support",
        "Ruggedized design",
        "Custom firmware solutions",
      ],
      applications: "Fleet Management, Survey Equipment, Autonomous Vehicles",
    },
    {
      icon: Wifi,
      title: "Industrial Routers",
      description:
        "Robust networking solutions designed for industrial environments with advanced connectivity features.",
      features: [
        "Industrial-grade reliability",
        "Multiple connectivity options",
        "Advanced security protocols",
        "Remote management capabilities",
      ],
      applications: "Industrial IoT, Remote Monitoring, Network Infrastructure",
    },
    {
      icon: Shield,
      title: "Defense Electronics",
      description:
        "Specialized electronic systems engineered to meet stringent defense and security requirements.",
      features: [
        "Military-grade specifications",
        "Encrypted communications",
        "Extreme environment operation",
        "Custom security protocols",
      ],
      applications: "Military Communications, Surveillance, Tactical Systems",
    },
    {
      icon: Zap,
      title: "Motor Test Systems",
      description:
        "Comprehensive motor characterization test benches with real-time analysis and automated testing capabilities.",
      features: [
        "Bidirectional motor control",
        "Real-time FFT analysis",
        "Automated test cycles",
        "Comprehensive data logging",
      ],
      applications: "Motor Validation, Quality Control, R&D Testing",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Product Portfolio
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Advanced digital devices and electronic systems engineered for
            healthcare, defense, and industrial innovation
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

// import { Card } from "@/components/ui/card";
// import {
//   Activity,
//   Bluetooth,
//   MapPin,
//   Shield,
//   Zap,
//   Wifi,
//   Star,
// } from "lucide-react";

// const ProductsSection = () => {
//   const products = [
//     {
//       icon: Activity,
//       title: "High-Speed DAQ Systems",
//       description:
//         "Multi-channel high-speed data acquisition systems with sampling rates greater than 50 kSPS for demanding applications.",
//       features: [
//         "8-Channel simultaneous sampling",
//         "Accelerometer & microphone interfaces",
//         "MATLAB & LabVIEW compatibility",
//         "Real-time analysis capabilities",
//       ],
//       applications: "Vibration Analysis, Acoustics, Structural Testing",
//       featured: true,
//     },
//     {
//       icon: Bluetooth,
//       title: "BLE Healthcare Devices",
//       description:
//         "Advanced Bluetooth Low Energy devices designed specifically for healthcare monitoring and patient tracking applications.",
//       features: [
//         "Low power consumption",
//         "Real-time health monitoring",
//         "Secure data transmission",
//         "Cloud platform integration",
//       ],
//       applications: "Patient Monitoring, Asset Tracking, Wellness Devices",
//     },
//     {
//       icon: MapPin,
//       title: "GPS & Navigation Systems",
//       description:
//         "Precision GPS systems and navigation solutions for various industrial and commercial applications.",
//       features: [
//         "High-accuracy positioning",
//         "Multi-constellation support",
//         "Ruggedized design",
//         "Custom firmware solutions",
//       ],
//       applications: "Fleet Management, Survey Equipment, Autonomous Vehicles",
//     },
//     {
//       icon: Wifi,
//       title: "Industrial Routers",
//       description:
//         "Robust networking solutions designed for industrial environments with advanced connectivity features.",
//       features: [
//         "Industrial-grade reliability",
//         "Multiple connectivity options",
//         "Advanced security protocols",
//         "Remote management capabilities",
//       ],
//       applications: "Industrial IoT, Remote Monitoring, Network Infrastructure",
//     },
//     {
//       icon: Shield,
//       title: "Defense Electronics",
//       description:
//         "Specialized electronic systems engineered to meet stringent defense and security requirements.",
//       features: [
//         "Military-grade specifications",
//         "Encrypted communications",
//         "Extreme environment operation",
//         "Custom security protocols",
//       ],
//       applications: "Military Communications, Surveillance, Tactical Systems",
//     },
//     {
//       icon: Zap,
//       title: "Motor Test Systems",
//       description:
//         "Comprehensive motor characterization test benches with real-time analysis and automated testing capabilities.",
//       features: [
//         "Bidirectional motor control",
//         "Real-time FFT analysis",
//         "Automated test cycles",
//         "Comprehensive data logging",
//       ],
//       applications: "Motor Validation, Quality Control, R&D Testing",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-slate-900 mb-4">
//             Our Product Portfolio
//           </h2>
//           <p className="text-lg text-slate-600 max-w-3xl mx-auto">
//             Advanced digital devices and electronic systems engineered for
//             healthcare, defense, and industrial innovation
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {products.map((product, index) => (
//             <Card
//               key={index}
//               className="rounded-2xl bg-white p-8 border-2 border-emerald-400
//               shadow-md hover:shadow-xl transition-all duration-300"
//             >
//               {/* Header */}
//               <div className="flex items-start justify-between mb-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
//                     <product.icon className="h-6 w-6 text-emerald-600" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-slate-900">
//                     {product.title}
//                   </h3>
//                 </div>

//                 {product.featured && (
//                   <span className="flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
//                     <Star className="h-3 w-3 fill-emerald-600" />
//                     Featured
//                   </span>
//                 )}
//               </div>

//               {/* Description */}
//               <p className="text-sm text-slate-600 leading-relaxed mb-6">
//                 {product.description}
//               </p>

//               {/* Key Features */}
//               <div className="mb-6">
//                 <h4 className="text-sm font-semibold text-slate-900 mb-3">
//                   Key Features
//                 </h4>
//                 <ul className="space-y-2">
//                   {product.features.map((feature, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-2 text-sm text-slate-700"
//                     >
//                       <Star className="h-4 w-4 text-amber-500 fill-amber-400 mt-0.5" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Applications */}
//               <div className="pt-4 border-t border-slate-200">
//                 <span className="text-xs font-semibold text-blue-600 uppercase">
//                   Applications
//                 </span>
//                 <p className="text-sm font-semibold text-slate-900 mt-1">
//                   {product.applications}
//                 </p>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;



