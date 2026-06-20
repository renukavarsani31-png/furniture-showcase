import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Hira Sales
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Your Trusted Partner in Custom Furniture Manufacturing
          </p>
        </div>
      </div>

      {/* Owner Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated craftsmen with years of experience in creating beautiful, 
            high-quality furniture for homes and businesses.
          </p>
        </div>

        {/* Owner Photos Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Owner 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src="/team/owner-1.jpg"
                alt="Hira Sales Owner"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                [Owner Name]
              </h3>
              <p className="text-amber-600 font-semibold mb-3">
                Founder & Master Craftsman
              </p>
              <p className="text-gray-600">
                With over [X] years of experience in furniture manufacturing, 
                bringing traditional craftsmanship to modern designs.
              </p>
            </div>
          </div>

          {/* Owner 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src="/team/owner-2.jpg"
                alt="Hira Sales Team Member"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                [Team Member Name]
              </h3>
              <p className="text-amber-600 font-semibold mb-3">
                Co-Founder & Design Specialist
              </p>
              <p className="text-gray-600">
                Specializing in custom designs and client consultations, 
                ensuring every piece meets your exact specifications.
              </p>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-4">
              Hira Sales was established in Madhapar with a vision to provide 
              high-quality, custom-made furniture to homes and businesses across 
              the region. What started as a small workshop has grown into a trusted 
              name in furniture manufacturing.
            </p>
            <p className="mb-4">
              We specialize in:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom Wooden Doors & Windows</li>
              <li>Complete Bedroom Furniture Sets</li>
              <li>Modular Kitchen Solutions</li>
              <li>Living Room & Entertainment Units</li>
              <li>Dining Furniture</li>
              <li>Wardrobes & Storage Solutions</li>
              <li>Commercial Furniture</li>
            </ul>
            <p className="mb-4">
              Every piece we create is crafted with attention to detail, using 
              premium materials and traditional woodworking techniques combined 
              with modern design principles.
            </p>
            <p>
              Visit our showroom in Madhapar to see our work firsthand and discuss 
              your furniture needs with our team.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Craftsmanship</h3>
            <p className="text-gray-600">
              Every piece is handcrafted with precision and care by skilled artisans.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Designs</h3>
            <p className="text-gray-600">
              Tailored solutions to match your unique style and space requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority, from design to installation.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg shadow-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">
            Visit our showroom or contact us for a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
            <a 
              href="/projects" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
