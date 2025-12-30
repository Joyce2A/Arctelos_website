import { Target, Eye, Award, Users } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology solutions",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering excellence in every product and service",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to achieve their goals",
    },
    {
      icon: Eye,
      title: "Precision",
      description: "Attention to detail in every aspect of our work",
    },
  ];

  return (
    <>
      {/* HERO IMAGE SECTION */}
      <section
        className="relative h-[420px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Arctelos
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            Leading innovator in digital devices and electronic systems
          </p>
        </div>
      </section>

      {/* EXISTING CONTENT (UNCHANGED) */}
      <section
        id="about"
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: "url(/image.png)" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About Arctelos
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leading innovator in digital devices and electronic systems
            </p>
          </div> */}

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Who We Are
              </h3>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                Arctelos Systems is a pioneering technology company specializing
                in the design and development of advanced digital devices and
                electronic systems. We serve critical industries including
                healthcare, defense, automotive, and industrial sectors.
              </p>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                Our expertise spans high-speed data acquisition systems, GPS
                navigation solutions, Bluetooth Low Energy healthcare devices,
                industrial routers, defense electronics, and comprehensive motor
                test systems.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                With state-of-the-art facilities in Chennai and Salem, we combine
                cutting-edge technology with engineering excellence to deliver
                solutions that meet the most demanding specifications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                To empower industries with precision-engineered digital solutions
                that drive innovation, enhance operational efficiency, and
                create lasting value through smart technology integration.
              </p>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To be the global leader in smart digital innovation, recognized
                for our commitment to quality, technological excellence, and
                transformative solutions that shape the future of critical
                industries.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Users, Target, Award, ArrowRight } from "lucide-react";

// const About = () => {
//   const values = [
//     {
//       icon: Target,
//       title: "Innovation",
//       description: "We push the boundaries of technology to create cutting-edge solutions that address real-world challenges."
//     },
//     {
//       icon: Award,
//       title: "Excellence", 
//       description: "We maintain the highest standards of quality and performance in every project we undertake."
//     },
//     {
//       icon: Users,
//       title: "Collaboration",
//       description: "We work closely with our clients to understand their needs and deliver customized solutions."
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <div className="bg-gradient-hero py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
//             About Arctelos
//           </h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Leading the way in digital device innovation for healthcare and defense applications
//           </p>
//         </div>
//       </div>

//       {/* Company Story */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-foreground mb-6">
//                 Our Story
//               </h2>
//               <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//                 Arctelos was founded with a vision to revolutionize the digital device landscape 
//                 through innovative engineering and cutting-edge technology. We specialize in creating 
//                 sophisticated electronic solutions that serve critical applications in healthcare and defense.
//               </p>
//               <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//                 Our expertise spans from high-speed data acquisition systems and BLE healthcare devices 
//                 to GPS navigation systems and defense electronics. We pride ourselves on delivering 
//                 custom solutions that meet the most demanding requirements.
//               </p>
//               <Button variant="hero" className="group">
//                 Learn More About Our Work
//                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </div>
//             <div className="relative">
//               <div className="aspect-square bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card overflow-hidden">
//                 <div 
//                   className="w-full h-full rounded-xl flex items-center justify-center relative"
//                   style={{
//                     backgroundImage: `url('/src/assets/10-years-bg.ai')`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat'
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-primary/20 rounded-xl"></div>
//                   <div className="text-center relative z-10">
//                     <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">10+ Years</h3>
//                     <p className="text-white drop-shadow-md">Of Innovation Excellence</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-20 bg-muted/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//               Our Values
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               The principles that guide our approach to innovation and excellence
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <Card key={index} className="p-8 text-center bg-gradient-card shadow-card border border-border/50 hover:shadow-xl transition-smooth group">
//                 <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-spring">
//                   <value.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed">{value.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-gradient-hero">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
//             Ready to Work Together?
//           </h2>
//           <p className="text-xl text-white/90 mb-8">
//             Let's discuss how we can help bring your digital device vision to life.
//           </p>
//           <Button variant="professional" size="lg" className="group">
//             Start Your Project
//             <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;