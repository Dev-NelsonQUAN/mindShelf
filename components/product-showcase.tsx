'use client'

import { MessageCircle } from 'lucide-react'

const PRODUCTS = [
  { 
    id: 1, 
    title: "The Holy Bible (NIV Edition)", 
    price: "15,500", 
    category: "Bibles", 
    image: "/nivBible.jpg",
    tag: "Best Seller" 
  },
  { 
    id: 2, 
    title: "Atomic Habits - James Clear", 
    price: "8,500", 
    category: "Personal Growth", 
    image: "/atomicHabits.webp",
    tag: "Trending" 
  },
  { 
    id: 3, 
    title: "The Purpose Driven Life - Rick Warren", 
    price: "6,000", 
    category: "Christian Literature", 
    image: "/purposeDriven.jpg",
    tag: "Recommended" 
  },
  { 
    id: 4, 
    title: "Children's Illustrated Bible Stories", 
    price: "12,000", 
    category: "Kids", 
    image: "/childrenBible.jpg",
    tag: "New Arrival" 
  }
]

export function ProductShowcase() {
  const WHATSAPP_BASE = "https://wa.me/2348142846244";

  return (
    <section id="catalog" className="py-10 md:py-20 bg-white scroll-mt-10 md:mt-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="max-w-2xl max-sm:flex max-sm:items-center max-sm:flex-col">
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-[#7000A5] mb-1 md:mb-4 max-sm:text-center">Explore Our Bookshelf</h2>
            <p className="text-gray-500 text-[8px] md:text-lg">Hand-picked titles to inspire your mind and grow your spirit.</p>
          </div>
          
          <a 
            href={`${WHATSAPP_BASE}?text=Hello Mindshelf, please send me your full catalog.`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-purple-200 text-[#7000A5] hover:bg-purple-50 rounded-full font-bold px-4 md:px-8 py-1 md:py-3 transition-all max-sm:text-[9px]"
          >
            View Full Catalog
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl md:rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-purple-100 flex flex-col">
              
              <div className="relative md:aspect-square overflow-hidden bg-purple-50">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-40 md:h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-3 left-3 bg-[#7000A5] text-white px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-widest">
                  {product.tag}
                </div>
              </div>

              <div className="p-5 flex flex-col grow">
                <span className="text-[10px] font-black uppercase text-purple-300 mb-0 md:mb-1">{product.category}</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 md:mb-4 md:h-10 line-clamp-2">{product.title}</h3>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-purple-300 font-bold mb-0 md:mb-1">Price</span>
                    <span className="text-lg font-black text-gray-900">₦{product.price}</span>
                  </div>
                  
                  <a 
                    href={`${WHATSAPP_BASE}?text=I want to order: ${product.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7000A5] text-white p-1.5 md:p-3 rounded-xl hover:bg-purple-800 transition-all z-20"
                  >
                    <MessageCircle className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


// 'use client'

// import { MessageCircle } from 'lucide-react'

// const PRODUCTS = [
//   { 
//     id: 1, 
//     title: "The Holy Bible (NIV Luxury Edition)", 
//     price: "15,500", 
//     category: "Bibles", 
//     // Actual Luxury NIV Bible Image
//     image: "https://images.unsplash.com/photo-1504052434569-70ad58210444?q=80&w=800&auto=format&fit=crop", 
//     tag: "Best Seller" 
//   },
//   { 
//     id: 2, 
//     title: "Atomic Habits - James Clear", 
//     price: "8,500", 
//     category: "Personal Growth", 
//     // Actual Atomic Habits Book Cover
//     image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop", 
//     tag: "Trending" 
//   },
//   { 
//     id: 3, 
//     title: "The Purpose Driven Life - Rick Warren", 
//     price: "6,000", 
//     category: "Christian Literature", 
//     // Actual Purpose Driven Life style imagery
//     image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop", 
//     tag: "Recommended" 
//   },
//   { 
//     id: 4, 
//     title: "Children's Illustrated Bible", 
//     price: "12,000", 
//     category: "Kids", 
//     // High-quality Illustrated Bible similar to your photo
//     image: "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?q=80&w=800&auto=format&fit=crop", 
//     tag: "New Arrival" 
//   }
// ]

// export function ProductShowcase() {
//   const WHATSAPP_BASE = "https://wa.me/2348142846244";

//   return (
//     <section id="catalog" className="py-20 bg-white scroll-mt-24 relative z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//           <div className="max-w-2xl">
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#7000A5] mb-4">Explore Our Bookshelf</h2>
//             <p className="text-gray-500 text-lg">Hand-picked titles to inspire your mind and grow your spirit.</p>
//           </div>
          
//           <a 
//             href={`${WHATSAPP_BASE}?text=Hello Mindshelf, please send me your full catalog.`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border-2 border-purple-200 text-[#7000A5] hover:bg-purple-50 rounded-full font-bold px-8 py-3 transition-all"
//           >
//             View Full Catalog
//           </a>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {PRODUCTS.map((product) => (
//             <div key={product.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-purple-100 flex flex-col">
              
//               {/* Image Frame - Square proportions */}
//               <div className="relative aspect-square overflow-hidden bg-purple-50">
//                 <img 
//                   src={product.image} 
//                   alt={product.title} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//                 />
//                 <div className="absolute top-3 left-3 bg-[#7000A5] text-white px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-widest">
//                   {product.tag}
//                 </div>
//               </div>

//               <div className="p-5 flex flex-col flex-grow">
//                 <span className="text-[10px] font-black uppercase text-purple-300 mb-1">{product.category}</span>
//                 <h3 className="font-bold text-gray-900 text-base leading-snug mb-4 h-10 line-clamp-2">{product.title}</h3>
                
//                 <div className="mt-auto flex items-center justify-between">
//                   <div className="flex flex-col">
//                     <span className="text-[10px] text-purple-300 font-bold mb-1">Price</span>
//                     <span className="text-lg font-black text-gray-900">₦{product.price}</span>
//                   </div>
                  
//                   {/* Fixed Direct Link to avoid popup blockers */}
//                   <a 
//                     href={`${WHATSAPP_BASE}?text=I want to order: ${product.title}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-[#7000A5] text-white p-3 rounded-xl hover:bg-purple-800 transition-all z-20"
//                   >
//                     <MessageCircle className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// <img src="/childrenBible.jpg" alt="Childen Bible" />
// <img src="/purposeDriven.jpg" alt="Purpose Driven Life" />
// <img src="/atomicHabits.webp" alt="Atomic Habits" />
// <img src="/nivBible.jpg" alt="NIV Bible" />

// // "use client";

// // import { MessageCircle } from "lucide-react";

// // const PRODUCTS = [
// //   {
// //     id: 1,
// //     title: "The Holy Bible (NIV Luxury Edition)",
// //     price: "15,500",
// //     category: "Bibles",
// //     image:
// //       "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
// //     tag: "Best Seller",
// //   },
// //   {
// //     id: 2,
// //     title: "Atomic Habits - James Clear",
// //     price: "8,500",
// //     category: "Personal Growth",
// //     image:
// //       "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
// //     tag: "Trending",
// //   },
// //   {
// //     id: 3,
// //     title: "The Purpose Driven Life",
// //     price: "6,000",
// //     category: "Christian Literature",
// //     image:
// //       "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop",
// //     tag: "Recommended",
// //   },
// //   {
// //     id: 4,
// //     title: "Children's Illustrated Bible",
// //     price: "12,000",
// //     category: "Kids",
// //     // image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
// //     image:
// //       "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?q=80&w=800&auto=format&fit=crop",

// //     tag: "New Arrival",
// //   },
// // ];

// // export function ProductShowcase() {
// //   const WHATSAPP_BASE = "https://wa.me/2348142846244";

// //   return (
// //     <section id="catalog" className="py-20 bg-white scroll-mt-24 relative z-10">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
// //           <div className="max-w-2xl">
// //             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#7000A5] mb-4">
// //               Explore Our Bookshelf
// //             </h2>
// //             <p className="text-gray-500 text-lg">
// //               Hand-picked titles to inspire your mind and grow your spirit.
// //             </p>
// //           </div>

// //           {/* View Full Catalog - Now a standard unblockable link */}
// //           <a
// //             href={`${WHATSAPP_BASE}?text=Hello Mindshelf, please send me your full catalog.`}
// //             target="_blank"
// //             className="border-2 border-purple-200 text-[#7000A5] hover:bg-purple-50 rounded-full font-bold px-8 py-3 transition-all"
// //           >
// //             View Full Catalog
// //           </a>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {PRODUCTS.map((product) => (
// //             <div
// //               key={product.id}
// //               className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-purple-100 flex flex-col"
// //             >
// //               <div className="relative aspect-square overflow-hidden">
// //                 <img
// //                   src={product.image}
// //                   alt={product.title}
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <div className="absolute top-3 left-3 bg-[#7000A5] text-white px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-widest">
// //                   {product.tag}
// //                 </div>
// //               </div>

// //               <div className="p-5 flex flex-col flex-grow">
// //                 <span className="text-[10px] font-black uppercase text-purple-300 mb-1">
// //                   {product.category}
// //                 </span>
// //                 <h3 className="font-bold text-gray-900 text-base leading-snug mb-4 h-10 line-clamp-2">
// //                   {product.title}
// //                 </h3>

// //                 <div className="mt-auto flex items-center justify-between">
// //                   <div className="flex flex-col">
// //                     <span className="text-[10px] text-purple-300 font-bold mb-1">
// //                       Price
// //                     </span>
// //                     <span className="text-lg font-black text-gray-900">
// //                       ₦{product.price}
// //                     </span>
// //                   </div>

// //                   {/* Order Button - Now a standard link */}
// //                   <a
// //                     href={`${WHATSAPP_BASE}?text=I want to order: ${product.title}`}
// //                     target="_blank"
// //                     className="bg-[#7000A5] text-white p-3 rounded-xl hover:bg-purple-800 transition-all z-20"
// //                   >
// //                     <MessageCircle className="w-5 h-5" />
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // 'use client'

// // // import { MessageCircle } from 'lucide-react'
// // // import { Button } from '@/components/ui/button'
// // // import { Badge } from '@/components/ui/badge'

// // // const PRODUCTS = [
// // //   {
// // //     id: 1,
// // //     title: "The Holy Bible (NIV Luxury Edition)",
// // //     price: "15,500",
// // //     category: "Bibles",
// // //     image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
// // //     tag: "Best Seller"
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Atomic Habits - James Clear",
// // //     price: "8,500",
// // //     category: "Personal Growth",
// // //     image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
// // //     tag: "Trending"
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "The Purpose Driven Life",
// // //     price: "6,000",
// // //     category: "Christian Literature",
// // //     image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop",
// // //     tag: "Recommended"
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Children's Illustrated Bible",
// // //     price: "12,000",
// // //     category: "Kids",
// // //     image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
// // //     tag: "New Arrival"
// // //   }
// // // ]

// // // export function ProductShowcase() {
// // //   const WHATSAPP_URL = "https://wa.me/2348142846244";

// // //   const handleOrder = (bookTitle: string) => {
// // //     const message = encodeURIComponent(`Hello Mindshelf, I'm interested in ordering: ${bookTitle}`);
// // //     window.open(`${WHATSAPP_URL}?text=${message}`, '_blank');
// // //   }

// // //   const handleFullCatalog = () => {
// // //     const message = encodeURIComponent(`Hello Mindshelf, please send me your full book catalog.`);
// // //     window.open(`${WHATSAPP_URL}?text=${message}`, '_blank');
// // //   }

// // //   return (
// // //     <section
// // //       id="catalog"
// // //       className="py-20 bg-white scroll-mt-24"
// // //     >
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// // //         {/* Section Header */}
// // //         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
// // //           <div className="max-w-2xl">
// // //             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#7000A5] mb-4">
// // //               Explore Our Bookshelf
// // //             </h2>
// // //             <p className="text-gray-500 text-lg">
// // //               Hand-picked titles to inspire your mind and grow your spirit.
// // //             </p>
// // //           </div>

// // //           {/* View Full Catalog Button - Fixed to open WhatsApp */}
// // //           <Button
// // //             variant="outline"
// // //             onClick={handleFullCatalog}
// // //             className="border-purple-200 text-[#7000A5] hover:bg-purple-50 rounded-full font-bold px-8 transition-all"
// // //           >
// // //             View Full Catalog
// // //           </Button>
// // //         </div>

// // //         {/* Product Grid: 4 columns on desktop */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //           {PRODUCTS.map((product) => (
// // //             <div
// // //               key={product.id}
// // //               className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-purple-100"
// // //             >

// // //               {/* Image Container: Square aspect ratio */}
// // //               <div className="relative aspect-square overflow-hidden bg-purple-50">
// // //                 <img
// // //                   src={product.image}
// // //                   alt={product.title}
// // //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// // //                 />
// // //                 <div className="absolute top-3 left-3">
// // //                   <Badge className="bg-[#7000A5] text-white border-none px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-widest">
// // //                     {product.tag}
// // //                   </Badge>
// // //                 </div>
// // //               </div>

// // //               {/* Product Info */}
// // //               <div className="p-5 flex flex-col flex-grow">
// // //                 <span className="text-[10px] font-black uppercase tracking-widest text-purple-300 mb-1">
// // //                   {product.category}
// // //                 </span>
// // //                 <h3 className="font-bold text-gray-900 text-base leading-snug mb-4 group-hover:text-[#7000A5] transition-colors line-clamp-2">
// // //                   {product.title}
// // //                 </h3>

// // //                 <div className="mt-auto flex items-center justify-between">
// // //                   <div className="flex flex-col">
// // //                     <span className="text-[10px] text-purple-300 font-bold leading-none mb-1">Price</span>
// // //                     <span className="text-lg font-black text-gray-900">
// // //                       ₦{product.price}
// // //                     </span>
// // //                   </div>

// // //                   {/* Purple Order Button */}
// // //                   <button
// // //                     onClick={() => handleOrder(product.title)}
// // //                     className="bg-[#7000A5] hover:bg-purple-800 text-white p-3 rounded-xl shadow-lg transition-all active:scale-90"
// // //                     title="Order on WhatsApp"
// // //                   >
// // //                     <MessageCircle className="w-5 h-5" />
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // 'use client'

// // // // import { MessageCircle, ShoppingCart, ArrowRight } from 'lucide-react'
// // // // import { Button } from '@/components/ui/button'
// // // // import { Badge } from '@/components/ui/badge'

// // // // const PRODUCTS = [
// // // //   {
// // // //     id: 1,
// // // //     title: "The Holy Bible (NIV Luxury Edition)",
// // // //     price: "15,500",
// // // //     category: "Bibles",
// // // //     image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
// // // //     tag: "Best Seller"
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     title: "Atomic Habits - James Clear",
// // // //     price: "8,500",
// // // //     category: "Personal Growth",
// // // //     image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
// // // //     tag: "Trending"
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     title: "The Purpose Driven Life",
// // // //     price: "6,000",
// // // //     category: "Christian Literature",
// // // //     image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop",
// // // //     tag: "Recommended"
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     title: "Children's Illustrated Bible",
// // // //     price: "12,000",
// // // //     category: "Kids",
// // // //     image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
// // // //     tag: "New Arrival"
// // // //   }
// // // // ]

// // // // export function ProductShowcase() {
// // // //   const handleOrder = (bookTitle: string) => {
// // // //     const message = encodeURIComponent(`Hello Mindshelf, I'm interested in ordering: ${bookTitle}`)
// // // //     window.open(`https://wa.me/2348142846244?text=${message}`, '_blank')
// // // //   }

// // // //   return (
// // // //     <section id="catalog" className="py-20 bg-purple-50/20 scroll-mt-20">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// // // //         {/* Section Header */}
// // // //         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
// // // //           <div className="max-w-2xl">
// // // //             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#7000A5] mb-4">
// // // //               Explore Our Bookshelf
// // // //             </h2>
// // // //             <p className="text-gray-500 text-lg">
// // // //               Hand-picked titles to inspire your mind and grow your spirit.
// // // //             </p>
// // // //           </div>
// // // //           <Button
// // // //             variant="outline"
// // // //             className="border-purple-200 text-[#7000A5] hover:bg-purple-50 rounded-full font-bold px-8 transition-all"
// // // //             onClick={() => handleOrder("Requesting Full Catalog PDF")}
// // // //           >
// // // //             View Full Catalog
// // // //           </Button>
// // // //         </div>

// // // //         {/* Product Grid: 4 columns on desktop */}
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //           {PRODUCTS.map((product) => (
// // // //             <div key={product.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-purple-100">

// // // //               <div className="relative aspect-square overflow-hidden bg-purple-50">
// // // //                 <img
// // // //                   src={product.image}
// // // //                   alt={product.title}
// // // //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// // // //                 />
// // // //                 <div className="absolute top-3 left-3">
// // // //                   <Badge className="bg-[#7000A5] text-white border-none px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-widest">
// // // //                     {product.tag}
// // // //                   </Badge>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Product Info: Reduced vertical padding */}
// // // //               <div className="p-5 flex flex-col grow">
// // // //                 <span className="text-[10px] font-black uppercase tracking-widest text-purple-300 mb-1">
// // // //                   {product.category}
// // // //                 </span>
// // // //                 <h3 className="font-bold text-gray-900 text-base leading-snug mb-4 group-hover:text-[#7000A5] transition-colors line-clamp-2">
// // // //                   {product.title}
// // // //                 </h3>

// // // //                 <div className="mt-auto flex items-center justify-between">
// // // //                   <div className="flex flex-col">
// // // //                     <span className="text-[10px] text-purple-300 font-bold leading-none mb-1">Price</span>
// // // //                     <span className="text-lg font-black text-gray-900">
// // // //                       ₦{product.price}
// // // //                     </span>
// // // //                   </div>

// // // //                   {/* Purple Button instead of Yellow */}
// // // //                   <button
// // // //                     onClick={() => handleOrder(product.title)}
// // // //                     className="bg-[#7000A5] hover:bg-purple-800 text-white p-2.5 rounded-xl shadow-lg transition-all active:scale-90 cursor-pointer"
// // // //                     title="Order on WhatsApp"
// // // //                   >
// // // //                     <MessageCircle className="w-5 h-5" />
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Wholesale Banner: Updated to Purple Theme (No Yellow) */}
// // // //         <div className="mt-20 bg-purple-100 rounded-[3rem] p-10 md:p-16 text-center text-black relative overflow-hidden">
// // // //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#7000A5]/10 blur-[100px] -z-10" />

// // // //           <div className="absolute -top-10 -right-10 p-8 opacity-5">
// // // //              <ShoppingCart className="w-60 h-60" />
// // // //           </div>

// // // //           <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4">Buying for a School or Church?</h3>
// // // //           <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
// // // //             Get significantly lower prices when you order in bulk. We supply Bibles and educational materials nationwide.
// // // //           </p>
// // // //           <Button
// // // //             onClick={() => window.open('https://wa.me/2348142846244', '_blank')}
// // // //             className="bg-[#7000A5] hover:bg-white hover:text-[#7000A5] text-white font-black px-12 py-7 rounded-2xl transition-all shadow-xl shadow-purple-900/40 cursor-pointer"
// // // //           >
// // // //             Request Wholesale Price List
// // // //           </Button>
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }

// // // // // 'use client'

// // // // // import Image from 'next/image'
// // // // // import { MessageCircle, ShoppingCart } from 'lucide-react'
// // // // // import { Button } from '@/components/ui/button'
// // // // // import { Badge } from '@/components/ui/badge'

// // // // // const PRODUCTS = [
// // // // //   {
// // // // //     id: 1,
// // // // //     title: "The Holy Bible (NIV Luxury Edition)",
// // // // //     price: "15,500",
// // // // //     category: "Bibles",
// // // // //     image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop", // Replace with your actual book photos
// // // // //     tag: "Best Seller"
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     title: "Atomic Habits - James Clear",
// // // // //     price: "8,500",
// // // // //     category: "Personal Growth",
// // // // //     image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
// // // // //     tag: "Trending"
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     title: "The Purpose Driven Life",
// // // // //     price: "6,000",
// // // // //     category: "Christian Literature",
// // // // //     image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop",
// // // // //     tag: "Recommended"
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     title: "Children's Illustrated Bible",
// // // // //     price: "12,000",
// // // // //     category: "Kids",
// // // // //     image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
// // // // //     tag: "New Arrival"
// // // // //   }
// // // // // ]

// // // // // export function ProductShowcase() {
// // // // //   const handleOrder = (bookTitle: string) => {
// // // // //     const message = encodeURIComponent(`Hello Mindshelf, I'm interested in ordering: ${bookTitle}`)
// // // // //     window.open(`https://wa.me/2348142846244?text=${message}`, '_blank')
// // // // //   }

// // // // //   return (
// // // // //     <section id="catalog" className="py-20 bg-gray-50/50">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// // // // //         {/* Section Header */}
// // // // //         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
// // // // //           <div className="max-w-2xl">
// // // // //             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#7000A5] mb-4">
// // // // //               Explore Our Bookshelf
// // // // //             </h2>
// // // // //             <p className="text-gray-600 text-lg">
// // // // //               Hand-picked titles to inspire your mind and grow your spirit.
// // // // //               Available for immediate nationwide delivery.
// // // // //             </p>
// // // // //           </div>
// // // // //           <Button
// // // // //             variant="outline"
// // // // //             className="border-[#7000A5] text-[#7000A5] hover:bg-[#7000A5] hover:text-white rounded-full font-bold px-8"
// // // // //           >
// // // // //             View Full Catalog
// // // // //           </Button>
// // // // //         </div>

// // // // //         {/* Product Grid */}
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// // // // //           {PRODUCTS.map((product) => (
// // // // //             <div key={product.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100">

// // // // //               {/* Image Container */}
// // // // //               <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
// // // // //                 <img
// // // // //                   src={product.image}
// // // // //                   alt={product.title}
// // // // //                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// // // // //                 />
// // // // //                 <div className="absolute top-4 left-4">
// // // // //                   <Badge className="bg-[#7000A5] text-white border-none px-3 py-1 rounded-full shadow-lg">
// // // // //                     {product.tag}
// // // // //                   </Badge>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Product Info */}
// // // // //               <div className="p-6 flex flex-col flex-grow">
// // // // //                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
// // // // //                   {product.category}
// // // // //                 </span>
// // // // //                 <h3 className="font-bold text-gray-900 text-lg leading-tight mb-4 group-hover:text-[#7000A5] transition-colors">
// // // // //                   {product.title}
// // // // //                 </h3>

// // // // //                 <div className="mt-auto flex items-center justify-between">
// // // // //                   <div className="flex flex-col">
// // // // //                     <span className="text-xs text-gray-400 font-bold leading-none">Price</span>
// // // // //                     <span className="text-xl font-black text-gray-900">
// // // // //                       ₦{product.price}
// // // // //                     </span>
// // // // //                   </div>

// // // // //                   <button
// // // // //                     onClick={() => handleOrder(product.title)}
// // // // //                     className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-2xl shadow-lg transition-all active:scale-90"
// // // // //                     title="Order on WhatsApp"
// // // // //                   >
// // // // //                     <MessageCircle className="w-6 h-6" />
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Wholesale Banner Mini */}
// // // // //         <div className="mt-16 bg-[#7000A5] rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
// // // // //           <div className="absolute top-0 right-0 p-8 opacity-10">
// // // // //              <ShoppingCart className="w-40 h-40 -rotate-12" />
// // // // //           </div>
// // // // //           <h3 className="text-2xl md:text-3xl font-bold mb-4">Buying for a School or Church?</h3>
// // // // //           <p className="text-purple-100 mb-8 max-w-xl mx-auto">
// // // // //             Get significantly lower prices when you order in bulk. We supply Bibles and educational books nationwide.
// // // // //           </p>
// // // // //           <Button
// // // // //             onClick={() => window.open('https://wa.me/2348142846244', '_blank')}
// // // // //             className="bg-white text-[#7000A5] hover:bg-yellow-400 hover:text-black font-black px-10 py-6 rounded-full transition-all"
// // // // //           >
// // // // //             Request Wholesale Price List
// // // // //           </Button>
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   )
// // // // // }
