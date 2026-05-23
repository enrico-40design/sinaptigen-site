import { useState } from 'react';
import { ArrowRight, Check, Zap, Brain, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const productImageUrl = '/manus-storage/ChatGPTImage18demai.de2026,21_05_29_e328e853.png';

  return (
    <div className={`${isDark ? 'dark' : ''} transition-colors duration-300`}>
      <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-black' : 'bg-gradient-to-br from-white via-slate-50 to-slate-100'}`}>
        
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${isDark ? 'bg-slate-950/80 border-b border-slate-800' : 'bg-white/80 border-b border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className={`w-8 h-8 ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>SYNAPTIGEN</span>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-20 right-10 w-72 h-72 ${isDark ? 'bg-lime-400/10' : 'bg-lime-400/5'} rounded-full blur-3xl animate-pulse`}></div>
            <div className={`absolute bottom-20 left-10 w-96 h-96 ${isDark ? 'bg-cyan-400/10' : 'bg-cyan-400/5'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-lime-400/20 text-lime-300' : 'bg-lime-400/30 text-lime-700'}`}>
                    🧠 Advanced Brain Support
                  </div>
                  
                  <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Transform Your <span className={isDark ? 'text-lime-400' : 'text-lime-600'}>Mind</span>
                  </h1>
                  
                  <p className={`text-xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Experience crystal-clear memory, laser-focused attention, and sustained mental agility with our scientifically-formulated brain enhancement supplement.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {[
                    { icon: Zap, text: 'Boost Memory & Focus' },
                    { icon: Brain, text: 'Enhanced Cognitive Function' },
                    { icon: Shield, text: 'Natural & Safe Formula' }
                  ].map((feature, idx) => (
                    <div key={idx} className={`flex items-center gap-3 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                      <div className={`p-2 rounded-lg ${isDark ? 'bg-lime-400/20' : 'bg-lime-400/30'}`}>
                        <feature.icon className={`w-5 h-5 ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
                      </div>
                      <span className="font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden ${
                      isDark
                        ? 'bg-gradient-to-r from-lime-400 to-lime-500 text-slate-900 hover:shadow-2xl hover:shadow-lime-400/50'
                        : 'bg-gradient-to-r from-lime-500 to-lime-600 text-white hover:shadow-2xl hover:shadow-lime-500/50'
                    }`}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-lime-300/30' : 'bg-lime-400/30'} blur-xl`}></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <div className={`absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ${isDark ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'}`}></div>
                    </div>

                    <span className="relative flex items-center gap-2">
                      Get Started Now
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
                    </span>
                  </button>

                  <button className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border-2 ${
                    isDark
                      ? 'border-slate-600 text-slate-200 hover:border-lime-400 hover:text-lime-400 hover:bg-slate-900/50'
                      : 'border-slate-300 text-slate-700 hover:border-lime-600 hover:text-lime-600 hover:bg-slate-100'
                  }`}>
                    Learn More
                  </button>
                </div>

                {/* Trust Signals */}
                <div className={`flex items-center gap-6 pt-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <div className="flex items-center gap-2">
                    <Check className={`w-5 h-5 ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
                    <span>180-Day Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className={`w-5 h-5 ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
                    <span>100% Natural</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className={`absolute inset-0 rounded-2xl blur-3xl ${isDark ? 'bg-gradient-to-br from-lime-400/20 to-cyan-400/20' : 'bg-gradient-to-br from-lime-400/10 to-cyan-400/10'}`}></div>
                <div className="relative">
                  <img
                    src={productImageUrl}
                    alt="Synaptigen Product"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900/50 border-y border-slate-800' : 'bg-slate-100/50 border-y border-slate-200'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '12,643+', label: 'Satisfied Customers' },
                { number: '96%', label: 'Reorder Rate' },
                { number: '180', label: 'Day Guarantee' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className={`text-4xl font-black mb-2 ${isDark ? 'text-lime-400' : 'text-lime-600'}`}>
                    {stat.number}
                  </div>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl sm:text-5xl font-black mb-16 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Why Choose Synaptigen?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Brain, title: 'Sharp Memory', desc: 'Scientifically formulated to support cognitive clarity' },
                { icon: Zap, title: 'Laser Focus', desc: 'Eliminate brain fog and mental fatigue' },
                { icon: Sparkles, title: 'Mental Agility', desc: 'Process information faster and more efficiently' },
                { icon: Shield, title: 'Brain Health', desc: 'Long-term neuroprotection and cellular support' }
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'bg-slate-800/50 border border-slate-700 hover:border-lime-400/50 hover:bg-slate-800'
                      : 'bg-slate-100/50 border border-slate-200 hover:border-lime-400/50 hover:bg-slate-100'
                  }`}
                >
                  <benefit.icon className={`w-8 h-8 mb-4 ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
                  <h3 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {benefit.title}
                  </h3>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900/50' : 'bg-slate-100/50'}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl sm:text-5xl font-black mb-16 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Proprietary Formula
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Lactobacillus Paracasei', desc: 'Cognitive-specific probiotic for neural communication' },
                { name: 'Inulin + Prebiotics', desc: 'Nourishes brain microbiota and nutrient absorption' },
                { name: 'Natural Extracts', desc: 'Strawberry & mint: powerful antioxidants for brain protection' }
              ].map((ingredient, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-xl text-center border-l-4 ${
                    isDark
                      ? 'bg-slate-800/50 border-l-lime-400'
                      : 'bg-slate-100/50 border-l-lime-600'
                  }`}
                >
                  <h3 className={`font-bold text-lg mb-3 ${isDark ? 'text-lime-400' : 'text-lime-600'}`}>
                    {ingredient.name}
                  </h3>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    {ingredient.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl sm:text-5xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Ready to Transform Your Mind?
            </h2>
            <p className={`text-xl mb-10 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Join thousands of customers experiencing enhanced memory, focus, and cognitive clarity.
            </p>

            <button className={`group relative px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 overflow-hidden ${
              isDark
                ? 'bg-gradient-to-r from-lime-400 to-lime-500 text-slate-900 hover:shadow-2xl hover:shadow-lime-400/50'
                : 'bg-gradient-to-r from-lime-500 to-lime-600 text-white hover:shadow-2xl hover:shadow-lime-500/50'
            }`}>
              {/* Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-lime-300/30' : 'bg-lime-400/30'} blur-xl`}></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className={`absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ${isDark ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'}`}></div>
              </div>

              <span className="relative flex items-center justify-center gap-2">
                Order Now - 180 Day Money Back Guarantee
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="max-w-7xl mx-auto text-center">
            <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              © 2026 Synaptigen. All rights reserved. These statements have not been evaluated by the FDA.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
