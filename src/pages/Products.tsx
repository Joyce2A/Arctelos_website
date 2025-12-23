import ProductsSection from "@/components/ProductsSection";
import heroImage from "@/assets/products-hero.jpg";

const Products = () => {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <div
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
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Discover our comprehensive range of digital devices and electronic
            solutions designed for healthcare, defense, and industrial
            applications.
          </p>

          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 bg-pink-500 text-white text-sm px-5 py-2 rounded-full shadow-lg">
            <span>🏠 Home</span>
            <span>→</span>
            <span>Our Products</span>
          </div>
        </div>
      </div>

      {/* Products Content */}
      <ProductsSection />
    </div>
  );
};

export default Products;

// import ProductsSection from "@/components/ProductsSection";

// const Products = () => {
//   return (
//     <div className="min-h-screen">
//       <div className="bg-gradient-hero py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
//             Our Products
//           </h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Discover our comprehensive range of digital devices and electronic solutions 
//             designed for healthcare, defense, and industrial applications.
//           </p>
//         </div>
//       </div>
//       <ProductsSection />
//     </div>
//   );
// };

// export default Products;