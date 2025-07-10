
import { Calculator, FileText, TrendingUp, Shield, Users, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Planning & Compliance',
      description: 'Expert tax planning strategies and compliance services for individuals and businesses.',
      features: ['Income Tax Returns', 'GST Registration & Filing', 'Tax Optimization', 'Advance Tax Planning']
    },
    {
      icon: FileText,
      title: 'Auditing Services',
      description: 'Comprehensive auditing services ensuring transparency and regulatory compliance.',
      features: ['Statutory Audits', 'Internal Audits', 'Tax Audits', 'Concurrent Audits']
    },
    {
      icon: TrendingUp,
      title: 'Financial Advisory',
      description: 'Strategic financial advice to help your business grow and prosper.',
      features: ['Business Valuation', 'Investment Advisory', 'Financial Planning', 'Risk Management']
    },
    {
      icon: Shield,
      title: 'Company Registration',
      description: 'Complete assistance for company formation and regulatory compliance.',
      features: ['Private Limited Company', 'LLP Registration', 'Partnership Firm', 'Sole Proprietorship']
    },
    {
      icon: Users,
      title: 'Payroll Management',
      description: 'End-to-end payroll solutions for businesses of all sizes.',
      features: ['Salary Processing', 'PF & ESI Compliance', 'TDS Management', 'Statutory Compliance']
    },
    {
      icon: BookOpen,
      title: 'Accounting Services',
      description: 'Professional bookkeeping and accounting services for accurate financial records.',
      features: ['Books of Accounts', 'Financial Statements', 'MIS Reports', 'Cash Flow Analysis']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive chartered accountancy services tailored to meet your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-800 group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;