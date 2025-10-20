import React from "react";
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery Call",
      desc: "We discuss your goals, target audience, and vision for your website.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      desc: "We create a customized plan tailored to your business needs.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Design & Development",
      desc: "Our team builds your stunning, responsive website with care.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Rocket,
      title: "Launch & Optimize",
      desc: "We launch your site, set up SEO, and ensure everything works perfectly.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "Ongoing Support",
      desc: "We're here to help you grow with updates and continuous optimization.",
      color: "from-indigo-500 to-purple-500"
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            From Idea to <span className="gradient-text">Launch in 7 Days</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our proven process ensures fast delivery without compromising quality
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={step.title}
              className="relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                    <step.icon className="w-12 h-12 text-white" />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center font-display font-bold text-blue-600">
                      {idx + 1}
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 glass rounded-2xl p-6 hover-lift">
                  <h3 className="font-display font-bold text-2xl mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-24 w-0.5 h-12 bg-gradient-to-b from-blue-300 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in-up">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-semibold"
          >
            Start Your 7-Day Journey
            <Rocket className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
