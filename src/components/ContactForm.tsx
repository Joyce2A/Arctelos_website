"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const showForm = false;

  return (
    <section className="min-h-screen bg-white dark:bg-slate-900 transition-colors">

      {/* HERO SECTION */}
      <div className="py-16 sm:py-20 border-b border-blue-200 dark:border-blue-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
            Feel free to reach out to us for any queries, collaborations, or business discussions.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">

          {/* INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {/* Email */}
            <Card className="group bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <Mail className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition" />
                <h4 className="font-semibold text-gray-800 dark:text-white">Email Us</h4>
                <a
                  href="mailto:info@arctelos.com"
                  className="text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600"
                >
                  info@arctelos.com
                </a>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="group bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <Phone className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition" />
                <h4 className="font-semibold text-gray-800 dark:text-white">Call Us</h4>
                <a
                  href="tel:+919876543210"
                  className="text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600"
                >
                  +91 98765 43210
                </a>
              </CardContent>
            </Card>

            {/* Visit */}
            <Card className="group bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <MapPin className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition" />
                <h4 className="font-semibold text-gray-800 dark:text-white">Visit Us</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Chennai & Salem<br />
                  Tamil Nadu, India
                </p>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="group bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <Clock className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition" />
                <h4 className="font-semibold text-gray-800 dark:text-white">Business Hours</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Mon – Fri<br />
                  9:00 PM – 5:00 PM
                </p>
              </CardContent>
            </Card>

          </div>

          {/* ADDRESS + FORM */}
          <div className={`grid ${showForm ? "lg:grid-cols-2" : "grid-cols-1"} gap-8 sm:gap-12`}>

            {/* Address Card with Map on Right */}
            <Card className="bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row gap-6">

                  {/* Addresses */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-primary w-6 h-6 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Office Address</p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Plot #9, Karpagam Nagar<br />
                          Thirumudivakkam<br />
                          Chennai - 600044<br />
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="text-primary w-6 h-6 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Factory Address</p>
                        <p className="text-gray-600 dark:text-gray-300">
                          #21, SIDCO Industrial Area<br />
                          Karuppur<br />
                          Salem - 636011<br />
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  {/* <div className="w-full lg:w-64 h-48 rounded-xl overflow-hidden border border-blue-200 dark:border-blue-700 self-start">
                    <iframe
                      title="Arctelos Location"
                      src="https://www.google.com/maps?q=Thirumudivakkam,Chennai&output=embed"
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div> */}
                  {/* Map */}
<div className="w-full md:w-80 lg:w-64 h-48 md:h-56 rounded-xl overflow-hidden border border-blue-200 dark:border-blue-700 self-start">
  <iframe
    title="Arctelos Location"
    src="https://www.google.com/maps?q=Thirumudivakkam,Chennai&output=embed"
    className="w-full h-full"
    loading="lazy"
  />
</div>

                </div>
              </CardContent>
            </Card>

            {/* Optional Form */}
            {showForm && (
              <Card className="bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  {/* Form unchanged */}
                </CardContent>
              </Card>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Mail, Phone, MapPin, Clock } from "lucide-react";

// export default function ContactPage() {
//   const showForm = false;

//   return (
//     <section className="min-h-screen bg-white dark:bg-slate-900 transition-colors">

//       {/* HERO SECTION */}
//       <div className="py-16 sm:py-20 border-b border-blue-200 dark:border-blue-800">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
//             Feel free to reach out to us for any queries, collaborations, or business discussions.
//           </p>
//         </div>
//       </div>

//       {/* CONTENT SECTION */}
//       <div className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-slate-800">
//         <div className="max-w-6xl mx-auto">

//           {/* INFO GRID */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

//             {/* Email */}
//             <Card className="group bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
//               <CardContent className="p-6 text-center space-y-3">
//                 <Mail className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition" />
//                 <h4 className="font-semibold text-gray-800 dark:text-white">Email Us</h4>
//                 <a
//                   href="mailto:info@arctelos.com"
//                   className="text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600"
//                 >
//                   info@arctelos.com
//                 </a>
//               </CardContent>
//             </Card>

//             {/* Phone */}
//             <Card className="group bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
//               <CardContent className="p-6 text-center space-y-3">
//                 <Phone className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition" />
//                 <h4 className="font-semibold text-gray-800 dark:text-white">Call Us</h4>
//                 <a
//                   href="tel:+919876543210"
//                   className="text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600"
//                 >
//                   +91 98765 43210
//                 </a>
//               </CardContent>
//             </Card>

//             {/* Visit */}
//             <Card className="group bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
//               <CardContent className="p-6 text-center space-y-3">
//                 <MapPin className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition" />
//                 <h4 className="font-semibold text-gray-800 dark:text-white">Visit Us</h4>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm">
//                   Chennai & Salem<br />
//                   Tamil Nadu, India
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Business Hours */}
//             <Card className="group bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
//               <CardContent className="p-6 text-center space-y-3">
//                 <Clock className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition" />
//                 <h4 className="font-semibold text-gray-800 dark:text-white">Business Hours</h4>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm">
//                   Mon – Fri<br />
//                   9:00 PM – 5:00 PM
//                 </p>
//               </CardContent>
//             </Card>

//           </div>

//           {/* ADDRESS + FORM */}
//           <div className={`grid ${showForm ? "lg:grid-cols-2" : "grid-cols-1"} gap-8 sm:gap-12`}>

//             {/* Address Card */}
//             <Card className="bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
//               <CardContent className="p-6 sm:p-8 space-y-6">

//                 <div className="flex items-start space-x-4">
//                   <MapPin className="text-primary w-6 h-6 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-800 dark:text-white">Office Address</p>
//                     <p className="text-gray-600 dark:text-gray-300">
//                       Plot #9, Karpagam Nagar<br />
//                       Thirumudivakkam<br />
//                       Chennai - 600044<br />
//                       Tamil Nadu, India
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <MapPin className="text-primary w-6 h-6 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-800 dark:text-white">Factory Address</p>
//                     <p className="text-gray-600 dark:text-gray-300">
//                       #21, SIDCO Industrial Area<br />
//                       Karuppur<br />
//                       Salem - 636011<br />
//                       Tamil Nadu, India
//                     </p>
//                   </div>
//                 </div>

//                 {/* MAP */}
//                 {/* <div className="rounded-s overflow-hidden border border-blue-200 dark:border-blue-700">
//                   <iframe
//                     title="Arctelos Location"
//                     src="https://www.google.com/maps?q=Thirumudivakkam,Chennai&output=embed"
//                     className="w-full h-64"
//                     loading="lazy"
//                   />
//                 </div> */}

//                 <div className="flex justify-end">
//   <div className="w-64 h-48 rounded-xl overflow-hidden border border-blue-200 dark:border-blue-700">
//     <iframe
//       title="Arctelos Location"
//       src="https://www.google.com/maps?q=Thirumudivakkam,Chennai&output=embed"
//       className="w-full h-full"
//       loading="lazy"
//     />
//   </div>
// </div>

//               </CardContent>
//             </Card>

//             {/* Optional Form */}
//             {showForm && (
//               <Card className="bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
//                 <CardContent className="p-6 sm:p-8">
//                   {/* Form unchanged */}
//                 </CardContent>
//               </Card>
//             )}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Mail, Phone, MapPin, Clock } from "lucide-react";

// export default function ContactPage() {
//   // Toggle this to true later when backend and email integration are ready
//   const showForm = false;

//   return (
//     <section className="min-h-screen bg-white">

//       {/* HERO SECTION */}
//       <div className="py-16 sm:py-20 border-b border-blue-200">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
//             Feel free to reach out to us for any queries, collaborations, or business discussions.
//           </p>
//         </div>
//       </div>

//       {/* CONTENT SECTION */}
//       <div className="py-12 sm:py-16 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">

//           {/* CONTACT INFO GRID */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

//             {/* Email */}
//             <Card className="bg-white border border-blue-300 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300">
//               <CardContent className="p-6 text-center space-y-3">
//                 <Mail className="w-8 h-8 text-primary mx-auto" />
//                 <h4 className="font-semibold text-gray-800">Email Us</h4>
//                 <p className="text-gray-600 text-sm">info@arctelos.com</p>
//               </CardContent>
//             </Card>

//             {/* Phone */}
//             <Card className="bg-white border border-blue-300 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300">
//               <CardContent className="p-6 text-center space-y-3">
//                 <Phone className="w-8 h-8 text-primary mx-auto" />
//                 <h4 className="font-semibold text-gray-800">Call Us</h4>
//                 <p className="text-gray-600 text-sm">+91 98765 43210</p>
//               </CardContent>
//             </Card>

//             {/* Visit Us */}
//             <Card className="bg-white border border-blue-300 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300">
//               <CardContent className="p-6 text-center space-y-3">
//                 <MapPin className="w-8 h-8 text-primary mx-auto" />
//                 <h4 className="font-semibold text-gray-800">Visit Us</h4>
//                 <p className="text-gray-600 text-sm">
//                   Chennai & Salem<br />
//                   Tamil Nadu, India
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Business Hours */}
//             <Card className="bg-white border border-blue-300 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300">
//               <CardContent className="p-6 text-center space-y-3">
//                 <Clock className="w-8 h-8 text-primary mx-auto" />
//                 <h4 className="font-semibold text-gray-800">Business Hours</h4>
//                 <p className="text-gray-600 text-sm">
//                   Mon – Fri<br />
//                   9:00 PM – 5:00 PM
//                 </p>
//               </CardContent>
//             </Card>

//           </div>

//           {/* DETAILED INFO + FORM */}
//           <div className={`grid ${showForm ? "lg:grid-cols-2" : "grid-cols-1"} gap-8 sm:gap-12`}>

//             {/* Address Details */}
//             <Card className="p-6 sm:p-8 bg-white border border-blue-300 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300">
//               <CardContent className="space-y-6">

//                 {/* Office */}
//                 <div className="flex items-start space-x-4">
//                   <MapPin className="text-primary w-6 h-6 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-800">Office Address</p>
//                     <p className="text-gray-600">
//                       Plot #9, Karpagam Nagar<br />
//                       Thirumudivakkam<br />
//                       Chennai - 600044<br />
//                       Tamil Nadu, India
//                     </p>
//                   </div>
//                 </div>

//                 {/* Factory */}
//                 <div className="flex items-start space-x-4">
//                   <MapPin className="text-primary w-6 h-6 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-800">Factory Address</p>
//                     <p className="text-gray-600">
//                       #21, SIDCO Industrial Area<br />
//                       Karuppur<br />
//                       Salem - 636011<br />
//                       Tamil Nadu, India
//                     </p>
//                   </div>
//                 </div>

//               </CardContent>
//             </Card>

//             {/* Optional Form */}
//             {showForm && (
//               <Card className="p-6 sm:p-8 bg-white border border-blue-300 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300">
//                 <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       rows={4}
//                       className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </Card>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
