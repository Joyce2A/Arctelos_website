import { Card } from "@/components/ui/card";
import {
  Activity,
  Bluetooth,
  MapPin,
  Shield,
  Zap,
  Wifi,
  CheckCircle,
  Star
} from "lucide-react";

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
        "Real-time analysis capabilities"
      ],
      applications: "Vibration Analysis, Acoustics, Structural Testing",
      featured: true
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
        "Cloud platform integration"
      ],
      applications: "Patient Monitoring, Asset Tracking, Wellness Devices"
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
        "Custom firmware solutions"
      ],
      applications: "Fleet Management, Survey Equipment, Autonomous Vehicles"
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
        "Remote management capabilities"
      ],
      applications: "Industrial IoT, Remote Monitoring, Network Infrastructure"
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
        "Custom security protocols"
      ],
      applications: "Military Communications, Surveillance, Tactical Systems"
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
        "Comprehensive data logging"
      ],
      applications: "Motor Validation, Quality Control, R&D Testing"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Our Product Portfolio
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Advanced digital devices and electronic systems engineered for
            healthcare, defense, and industrial innovation
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`relative p-7 rounded-2xl border bg-white shadow-md transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
              ${product.featured ? "ring-2 ring-primary/50" : ""}`}
            >
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute -top-4 right-4 flex items-center gap-1 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
                  <Star className="h-3 w-3" />
                  Featured
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5">
                <product.icon className="h-7 w-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {product.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Applications */}
              <div className="mt-auto pt-4 border-t border-slate-200">
                <span className="text-xs font-semibold text-primary uppercase">
                  Applications
                </span>
                <p className="text-sm text-slate-800 mt-1">
                  {product.applications}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { 
//   Activity, 
//   Bluetooth, 
//   MapPin, 
//   Shield, 
//   Zap, 
//   Wifi,
//   ArrowRight,
//   CheckCircle 
// } from "lucide-react";

// const ProductsSection = () => {
//   const products = [
//     {
//       icon: Activity,
//       title: "High-Speed DAQ Systems",
//       description: "Multi-channel high-speed data acquisition systems with sampling rates greater than 50 kSPS for demanding applications.",
//       features: [
//         "8-Channel simultaneous sampling",
//         "Accelerometer & microphone interfaces", 
//         "MATLAB & LabVIEW compatibility",
//         "Real-time analysis capabilities"
//       ],
//       applications: "Vibration Analysis, Acoustics, Structural Testing"
//     },
//     {
//       icon: Bluetooth,
//       title: "BLE Healthcare Devices",
//       description: "Advanced Bluetooth Low Energy devices designed specifically for healthcare monitoring and patient tracking applications.",
//       features: [
//         "Low power consumption",
//         "Real-time health monitoring",
//         "Secure data transmission",
//         "Cloud platform integration"
//       ],
//       applications: "Patient Monitoring, Asset Tracking, Wellness Devices"
//     },
//     {
//       icon: MapPin,
//       title: "GPS & Navigation Systems",
//       description: "Precision GPS systems and navigation solutions for various industrial and commercial applications.",
//       features: [
//         "High-accuracy positioning",
//         "Multi-constellation support",
//         "Ruggedized design",
//         "Custom firmware solutions"
//       ],
//       applications: "Fleet Management, Survey Equipment, Autonomous Vehicles"
//     },
//     {
//       icon: Wifi,
//       title: "Industrial Routers",
//       description: "Robust networking solutions designed for industrial environments with advanced connectivity features.",
//       features: [
//         "Industrial-grade reliability",
//         "Multiple connectivity options",
//         "Advanced security protocols",
//         "Remote management capabilities"
//       ],
//       applications: "Industrial IoT, Remote Monitoring, Network Infrastructure"
//     },
//     {
//       icon: Shield,
//       title: "Defense Electronics",
//       description: "Specialized electronic systems engineered to meet stringent defense and security requirements.",
//       features: [
//         "Military-grade specifications",
//         "Encrypted communications",
//         "Extreme environment operation",
//         "Custom security protocols"
//       ],
//       applications: "Military Communications, Surveillance, Tactical Systems"
//     },
//     {
//       icon: Zap,
//       title: "Motor Test Systems",
//       description: "Comprehensive motor characterization test benches with real-time analysis and automated testing capabilities.",
//       features: [
//         "Bidirectional motor control",
//         "Real-time FFT analysis",
//         "Automated test cycles",
//         "Comprehensive data logging"
//       ],
//       applications: "Motor Validation, Quality Control, R&D Testing"
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-background to-muted/50 relative">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 right-10 w-64 h-64 border border-primary/20 rounded-full"></div>
//         <div className="absolute bottom-20 left-10 w-48 h-48 border border-primary/10 rounded-full"></div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Our Product Portfolio
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Cutting-edge digital devices and electronic systems designed for healthcare, 
//             defense, and industrial applications
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product, index) => (
//             <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-xl transition-smooth border border-border/50 group">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-spring">
//                   <product.icon className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground">{product.title}</h3>
//               </div>

//               <p className="text-muted-foreground mb-4 leading-relaxed">
//                 {product.description}
//               </p>

//               <div className="mb-4">
//                 <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
//                 <ul className="space-y-1">
//                   {product.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
//                       <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
//                 <h4 className="font-semibold text-primary text-sm mb-1">Applications:</h4>
//                 <p className="text-sm text-foreground">{product.applications}</p>
//               </div>

//               {/* <Button variant="outline" className="w-full group">
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button> */}
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           {/* <Button variant="hero" size="lg" className="group">
//             View All Products
//             <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//           </Button> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;