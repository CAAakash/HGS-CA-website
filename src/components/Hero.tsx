
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted 
              <span className="text-blue-800 block">Financial Partners</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              HGS & CO provides comprehensive chartered accountancy services in Chennai, 
              ensuring your financial success through expert guidance and personalized solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center group">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-800 hover:text-white transition-colors">
                View Services
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CA</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Excellence</h3>
                <p className="text-gray-600 mb-6">
                  Chartered Accountants with deep expertise in taxation, auditing, and financial advisory services.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-blue-800">99%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl text-blue-800">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;