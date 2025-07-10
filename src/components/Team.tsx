import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'CA Sivakumar G',
      position: 'Partner',
      experience: '5+ Years',
      specialization: 'Tax Advisory & Corporate Finance',
      image: '/team/siva.jpg',
    },
    {
      name: 'CA Hema Kumaraswami',
      position: 'Partner',
      experience: '5+ Years',
      specialization: 'Auditing & Risk Management',
      image: '/team/hema.jpg',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team of chartered accountants is dedicated to providing exceptional service and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow max-w-sm mx-auto"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-800 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-3">{member.experience} Experience</p>
                <p className="text-gray-700 text-sm mb-4">{member.specialization}</p>

                <div className="flex space-x-3">
                  <span className="p-2 bg-blue-100 rounded-full hover:bg-blue-800 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <span className="p-2 bg-blue-100 rounded-full hover:bg-blue-800 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="p-2 bg-blue-100 rounded-full hover:bg-blue-800 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
