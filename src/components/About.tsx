
import { Award, Target, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About HGS & CO</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in Chennai, HGS & CO has been a trusted name in chartered accountancy services for over two decades. 
              Our commitment to excellence and client satisfaction has made us one of the leading CA firms in the region.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We pride ourselves on delivering personalized solutions that help our clients achieve their financial goals. 
              Our team of qualified chartered accountants combines traditional expertise with modern technology to provide 
              comprehensive financial services.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800 mb-2">20+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800 mb-2">500+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800 mb-2">15+</div>
                <div className="text-gray-600">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800 mb-2">24/7</div>
                <div className="text-gray-600">Client Support</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Excellence in Service</h3>
              </div>
              <p className="text-gray-600">
                Committed to delivering the highest quality of professional services with integrity and precision.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Client-Centric Approach</h3>
              </div>
              <p className="text-gray-600">
                Every solution is tailored to meet the unique needs and objectives of our clients.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Expert Team</h3>
              </div>
              <p className="text-gray-600">
                Our qualified professionals bring decades of combined experience across various industries.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-blue-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Modern Technology</h3>
              </div>
              <p className="text-gray-600">
                Leveraging cutting-edge technology to provide efficient and accurate financial solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;