function FeeSplit() {
    const feeData = [
      {
        percentage: 72,
        title: "Top 25 Contributors",
        description: "Weekly rewards for bold hoots",
        icon: "🏆",
        color: "from-pink-400 to-purple-500",
        bgColor: "from-pink-400/20 to-purple-500/20"
      },
      {
        percentage: 18,
        title: "Kaito Stakers",
        description: "sKAITO token holders earn yield",
        icon: "🔥",
        color: "from-purple-400 to-pink-500",
        bgColor: "from-purple-400/20 to-pink-500/20"
      },
      {
        percentage: 10,
        title: "Creator Fund",
        description: "Supporting platform development",
        icon: "⚡",
        color: "from-pink-500 to-purple-400",
        bgColor: "from-pink-500/20 to-purple-400/20"
      }
    ];
  
    return (
      <section className="relative py-12 overflow-hidden mt-[50px]">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 backdrop-blur-sm rounded-3xl mx-4 sm:mx-6 lg:mx-8"
            style={{ 
              background: 'rgba(17, 17, 17, 0.4)',
              border: '1px solid rgba(160, 32, 240, 0.3)'
            }}
          ></div>
        </div>
  
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Fee Split{" "}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Distribution
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Every swap generates a{" "}
              <span 
                className="font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                4% fee
              </span>{" "}
              distributed weekly
            </p>
          </div>
  
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            
            {/* Left - Compact Circle */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 relative">
                  {/* Background Circle */}
                  <div 
                    className="absolute inset-0 rounded-full border-2"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.9) 100%)',
                      borderColor: 'rgba(160, 32, 240, 0.3)'
                    }}
                  ></div>
                  
                  {/* Progress Ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                    {/* 72% segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="6"
                      strokeDasharray="172 240"
                      strokeDashoffset="0"
                      className="transition-all duration-1000 ease-out"
                    />
                    {/* 18% segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="url(#gradient2)"
                      strokeWidth="6"
                      strokeDasharray="43 369"
                      strokeDashoffset="-172"
                      className="transition-all duration-1000 ease-out"
                    />
                    {/* 10% segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="url(#gradient3)"
                      strokeWidth="6"
                      strokeDasharray="24 388"
                      strokeDashoffset="-215"
                      className="transition-all duration-1000 ease-out"
                    />
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF2E92" />
                        <stop offset="100%" stopColor="#A020F0" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A020F0" />
                        <stop offset="100%" stopColor="#FF2E92" />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF2E92" />
                        <stop offset="100%" stopColor="#A020F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div 
                        className="text-3xl font-black mb-1"
                        style={{
                          background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        4%
                      </div>
                      <div className="text-gray-300 text-sm font-semibold">Swap Fee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Middle - Compact Cards */}
            <div className="lg:col-span-2 space-y-3">
              {feeData.map((item, index) => (
                <div 
                  key={index}
                  className="group relative backdrop-blur-sm rounded-xl p-4 transition-all duration-300"
                  style={{ 
                    background: 'rgba(17, 17, 17, 0.6)',
                    border: '1px solid rgba(160, 32, 240, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 46, 146, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(160, 32, 240, 0.3)';
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {/* Compact Icon */}
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg border"
                        style={{ 
                          background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.9) 100%)',
                          borderColor: 'rgba(160, 32, 240, 0.3)'
                        }}
                      >
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                          <div 
                            className="text-2xl font-black"
                            style={{
                              background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            {item.percentage}%
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
  
                  {/* Compact Progress Bar */}
                  <div 
                    className="mt-3 rounded-full h-1.5 overflow-hidden"
                    style={{ background: 'rgba(17, 17, 17, 0.5)' }}
                  >
                    <div 
                      className="h-full transition-all duration-1000 ease-out"
                      style={{ 
                        background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
                        width: `${item.percentage}%`,
                        animationDelay: `${index * 0.3}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Enhanced Note Section */}
          <div 
            className="backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.8) 100%)',
              border: '1px solid rgba(255, 46, 146, 0.2)'
            }}
          >
            {/* Background glow effect */}
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(255, 46, 146, 0.05) 0%, transparent 50%, rgba(160, 32, 240, 0.05) 100%)' }}
            ></div>
            
            <div className="relative z-10">
              <div className="flex items-start space-x-4">
                {/* Warning Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255, 46, 146, 0.2) 0%, rgba(160, 32, 240, 0.2) 100%)',
                    borderColor: 'rgba(255, 46, 146, 0.3)'
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="#FF2E92" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2">Important Notice</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Fee distribution mechanics are{" "}
                    <span 
                      className="font-semibold"
                      style={{
                        background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      experimental
                    </span>{" "}
                    and may be adjusted based on community feedback and system performance. All participants should be aware of the evolving nature of this reward system.
                  </p>
                  
                  {/* Additional Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: '#FF2E92' }}></div>
                      <span className="text-gray-400 text-xs">Weekly distribution cycles</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: '#A020F0' }}></div>
                      <span className="text-gray-400 text-xs">Rewards paid in MNT</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: '#FF2E92' }}></div>
                      <span className="text-gray-400 text-xs">Top 25 contributors eligible</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: '#A020F0' }}></div>
                      <span className="text-gray-400 text-xs">Real-time mindshare tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default FeeSplit;