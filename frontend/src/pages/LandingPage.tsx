import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Layout, Terminal, Wand2, Sparkles, CheckCircle, ToggleRight, ToggleLeft } from 'lucide-react';
import { IoIosInformation } from "react-icons/io";

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const LandingPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedModel, setSelectedModel] = useState<'mistral' | 'gemini' | 'qwen3' | 'llama'>('qwen3');
  const [developerMode, setDeveloperMode] = useState(false); // Add developer mode state
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (developerMode) {
      if (inputValue.trim()) {
        navigate('/builder', { state: { inputValue, selectedModel } });
      }
    } else {
      if (inputValue.trim()) {
       navigate('/chatmode', { state: { inputValue } });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900 to-slate-950">
      <Header />

      {/* Hero section with enhanced visual elements */}
      <div className="absolute w-3/4 -translate-x-1/2 rounded-full pointer-events-none top-20 left-1/2 h-3/4 bg-blue-500/5 blur-3xl"></div>

      <main className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 py-16 mt-16">
        <section className="w-full max-w-5xl mb-16 text-center">
          <div className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-blue-300 bg-blue-500/10 border border-blue-500/20">
            <Sparkles size={12} className="mr-1.5 text-blue-300" style={{ animation: 'pulse 2s infinite' }} />
            Powered by Advanced AI
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl text-slate-100" style={{
            textShadow: '0 4px 30px rgba(59, 130, 246, 0.15)'
          }}>
            Create Websites with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400" style={{
              backgroundSize: '200% auto',
              animation: 'gradient 8s ease infinite'
            }}>
              Natural Language
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl leading-relaxed md:text-2xl text-slate-300/90">
            Describe your dream website and watch it come to life. No coding knowledge required.
          </p>

          <div className="flex flex-col items-center justify-center mt-8 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
            <span className="flex items-center px-3 py-1 text-sm border rounded-full text-slate-400 bg-slate-800/50 backdrop-blur-sm border-slate-700/30">
              <span className="w-2 h-2 mr-2 bg-green-400 rounded-full animate-pulse"></span>
              4,200+ websites generated
            </span>
            <span className="flex items-center px-3 py-1 text-sm border rounded-full text-slate-400 bg-slate-800/50 backdrop-blur-sm border-slate-700/30">
              <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full animate-pulse"></span>
              Used by 720+ developers
            </span>
          </div>
        </section>

        {/* Enhanced input section with more premium styling */}
        <section className="relative w-full max-w-3xl mb-20">
          <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-indigo-500/30 rounded-2xl blur-xl"></div>
          <div className="relative p-1 shadow-2xl rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20">
            <div className="p-6 border md:p-8 bg-slate-800/90 rounded-xl backdrop-blur-xl border-slate-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Redesigned header with better spacing and visual hierarchy */}
                <div className="flex flex-col space-y-5">
                  {/* Developer mode toggle - moved to top for better visibility */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700/30">
                    <h3 className="text-base font-medium text-slate-200">Mode Selection</h3>
                    <div
                      onClick={() => setDeveloperMode(!developerMode)}
                      className="flex items-center gap-3 px-3 py-1.5 rounded-lg cursor-pointer group hover:bg-slate-800/70 transition-all duration-300"
                    >
                      <span className={`text-sm font-medium transition-colors ${developerMode ? 'text-blue-400' : 'text-slate-400'
                        }`}>
                        {developerMode ? 'Developer Mode' : 'Chat Mode'}
                      </span>
                      <div className="relative flex items-center">
                        <div className={`w-11 h-6 transition-colors duration-300 rounded-full ${developerMode ? 'bg-blue-500/30' : 'bg-slate-700'
                          }`}></div>
                        <div className={`absolute w-5 h-5 transition-all duration-300 rounded-full shadow-md ${developerMode
                          ? 'transform translate-x-5 bg-blue-400 shadow-blue-500/20'
                          : 'transform translate-x-0.5 bg-slate-400'
                          }`}></div>
                        <div className="relative group">
                          <span>
                            <IoIosInformation className='m-3 text-2xl bg-blue-500 rounded-full' />
                          </span>
                          {/* Tooltip that appears on hover - positioned to the right */}
                          <div className="absolute right-0 z-50 invisible p-2 mb-2 text-xs text-white transition-opacity rounded shadow-lg opacity-0 bg-slate-800 group-hover:visible group-hover:opacity-100 w-60 bottom-full">
                            <strong className="block mb-1">Mode Information:</strong>
                            <p className="mb-1"><span className="font-semibold text-blue-400">Developer Mode:</span> Create websites directly from your description.</p>
                            <p><span className="font-semibold text-indigo-400">Chat Mode:</span> Ask questions and get AI assistance.</p>
                            {/* Arrow pointing down - adjusted position */}
                            <div className="absolute w-0 h-0 border-t-4 border-l-4 border-r-4 border-transparent border-t-slate-800 -bottom-1 right-4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Redesigned model selection with better spacing */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-slate-300">Select AI Model</p>
                      <div className="px-2 py-1 text-xs rounded-md bg-slate-800 text-slate-400">
                        Driving your {developerMode ? 'code' : 'query'}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                      {[
                        { id: 'qwen3', name: 'Qwen 3' },
                        { id: 'llama', name: 'Llama 3' },
                        { id: 'gemini', name: 'Gemini Pro' },
                        { id: 'mistral', name: 'Mistral' }
                        
                      ].map(model => (
                        <button
                          key={model.id}
                          type="button"
                          onClick={() => setSelectedModel(model.id as any)}
                          className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center ${selectedModel === model.id
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                            : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-300 border border-slate-700/50'
                            }`}
                        >
                          {model.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl transform group-hover:scale-[1.01] transition-transform duration-300 blur-sm"></div>

                  {/* Enhanced mode indicator */}
                  <div className={`absolute top-0 right-0 px-3 py-1.5 text-xs font-medium rounded-tr-xl rounded-bl-xl z-20 transition-all ${developerMode
                    ? 'bg-blue-500/90 text-white'
                    : 'bg-indigo-500/90 text-white'
                    }`}>
                    <span className="flex items-center">
                      {developerMode ? <Code size={14} className="mr-1.5" /> : <Wand2 size={14} className="mr-1.5" />}
                      {!developerMode ? 'Chat & Query Mode' : 'Website Description Mode'}
                    </span>
                  </div>

                  <textarea
                    className="relative z-10 w-full h-48 p-5 text-lg transition-all border-2 shadow-inner bg-slate-900/90 text-slate-200 rounded-xl border-slate-700 group-hover:border-blue-400/40 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-slate-500 shadow-slate-950/30"
                    placeholder={!developerMode ?
                      "Enter your code or technical query... (e.g., 'Explain me about linked list with its popular problems on leetcode')" :
                      "Describe your website... (e.g., 'Create a personal portfolio site with a dark theme, project showcase, and contact form')"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />

                  {/* Enhanced icon indicator */}
                  <div className={`absolute p-2.5 transition-all border rounded-full right-4 bottom-4 bg-slate-800/90 backdrop-blur-sm ${developerMode ? 'border-blue-500/30 text-blue-400' : 'border-indigo-500/30 text-indigo-400'
                    } shadow-lg shadow-slate-950/10`}>
                    {developerMode ?
                      <Code size={18} className="animate-pulse" /> :
                      <Wand2 size={18} className="animate-pulse" />}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className={`flex items-center gap-2 px-8 py-3.5 font-medium text-base rounded-xl transition-all duration-300 ${inputValue.trim()
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 border border-blue-400/20'
                      : 'bg-slate-700/70 text-slate-400 cursor-not-allowed border border-slate-600/20'
                      }`}
                    style={{
                      boxShadow: inputValue.trim() ? '0 10px 25px -5px rgba(59, 130, 246, 0.3)' : 'none'
                    }}
                  >
                    {developerMode ? 'Generate Code' : 'Send Message'} <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section >

        {/* Feature cards with improved visual styling */}
        < section className="grid w-full max-w-5xl grid-cols-1 gap-8 px-2 mb-16 md:grid-cols-3" >
          {
            [
              {
                icon: <Layout className="w-10 h-10" />,
                title: 'Intuitive Design',
                description: 'Beautiful, responsive websites created automatically from your description.',
                color: 'from-blue-500 to-blue-600',
                textColor: 'text-blue-400'
              },
              {
                icon: <Code className="w-10 h-10" />,
                title: 'Clean Code',
                description: 'Generate well-structured, maintainable code ready for production.',
                color: 'from-purple-500 to-purple-600',
                textColor: 'text-purple-400'
              },
              {
                icon: <Terminal className="w-10 h-10" />,
                title: 'Full Control',
                description: 'Examine and edit every file to customize your website exactly how you want it.',
                color: 'from-indigo-500 to-indigo-600',
                textColor: 'text-indigo-400'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 md:p-8 transition-all duration-300 border shadow-lg bg-slate-800/60 backdrop-blur-md rounded-2xl hover:shadow-xl border-slate-700/50 hover:border-slate-600/50 group hover:translate-y-[-2px]"
              >
                <div className={`flex items-center justify-center w-16 h-16 mb-6 border shadow-lg rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600/20 group-hover:border-${feature.color.split(' ')[0]}/30`}>
                  <div className={`${feature.textColor} group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-200 group-hover:text-white">{feature.title}</h3>
                <p className="leading-relaxed text-slate-400">{feature.description}</p>

                <div className="pt-4 mt-6 border-t border-slate-700/30">
                  <div className="flex items-center text-sm text-slate-500">
                    <CheckCircle size={14} className={feature.textColor} />
                    <span className="ml-2">Instant generation</span>
                  </div>
                </div>
              </div>
            ))
          }
        </section >

        {/* Testimonial section */}
        < section className="w-full max-w-5xl px-4 py-12 mt-8 mb-20 border rounded-2xl bg-slate-800/30 backdrop-blur-sm border-slate-700/30" >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-100">Trusted by Developers</h2>
            <p className="max-w-2xl mx-auto text-slate-400">See what others are creating with our AI-powered website builder</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-5 transition-all duration-300 border rounded-xl bg-slate-900/70 border-slate-800/80 hover:border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 font-bold text-blue-400 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      {String.fromCharCode(64 + i)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-slate-200">Developer {i}</h4>
                      <p className="text-xs text-slate-500">Frontend Engineer</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-400">
                  "This tool saved me hours of development time. I described what I wanted, and in minutes I had a fully functional website ready to customize."
                </p>
              </div>
            ))}
          </div>
        </section >
      </main >

      <Footer />

      {/* Decorative elements */}
      <div className="fixed w-64 h-64 rounded-full pointer-events-none top-1/4 left-10 bg-blue-500/5 blur-3xl"></div>
      <div className="fixed w-64 h-64 rounded-full pointer-events-none bottom-1/4 right-10 bg-purple-500/5 blur-3xl"></div>
    </div >
  );
};



export default LandingPage;