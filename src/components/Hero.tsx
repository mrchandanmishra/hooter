import Leaderboard from "./Leaderboard";
import FeeSplit from "./FeeSplit";

function Hero() {
  return (
    
    <section className="relative min-h-screen bg-black pt-4 overflow-hidden flex items-center w-full">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/20"></div>

        {/* Animated orbs */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse"
          style={{ background: 'radial-gradient(circle, #FF2E92, transparent)' }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-24 h-24 rounded-full blur-xl animate-bounce"
          style={{ 
            background: 'radial-gradient(circle, #A020F0, transparent)',
            animationDuration: '6s'
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-20 w-40 h-40 rounded-full blur-2xl animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, #FF2E92, transparent)',
            opacity: 0.3
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-32 w-28 h-28 rounded-full blur-xl animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, #A020F0, transparent)',
            animationDuration: '8s'
          }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-pink-400/20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full text-center px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="mb-8 mt-[100px] flex justify-center items-center gap-4 flex-wrap py-1">
          {/* STAY */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-8xl font-black text-white leading-none">
            HOOT &
          </h1>
        
          {/* LOUD with gradient and glow */}
          <div className="relative inline-block">
            <h1 
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-8xl font-black leading-none"
              style={{
                background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 50%, #FF2E92 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              EARN
            </h1>
            <div 
              className="absolute inset-0 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none blur-2xl animate-pulse"
              style={{ color: '#FF2E92', opacity: 0.3 }}
            >
              EARN
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-2xl text-gray-300 mb-12 w-full px-4 sm:px-12 lg:px-32 leading-relaxed font-medium">
          Rewards distributed to top mindshare contributors weekly,{" "}
          <span 
            className="font-bold"
            style={{
              background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            forever.
          </span>
        </p>

        {/* Top Badge */}
        <div 
          className="inline-flex items-center space-x-3 backdrop-blur-md rounded-full px-6 py-3 mb-8 transition-all duration-300"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255, 46, 146, 0.1) 0%, rgba(160, 32, 240, 0.1) 100%)',
            border: '1px solid rgba(255, 46, 146, 0.3)'
          }}
        >
          <div className="relative">
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: '#FF2E92' }}
            ></div>
            <div 
              className="absolute inset-0 w-3 h-3 rounded-full animate-ping"
              style={{ background: '#FF2E92' }}
            ></div>
          </div>
          <span style={{ color: '#FF2E92' }} className="font-medium">
          Earn by hooting bold.          </span>
          <div className="w-px h-4" style={{ background: 'rgba(255, 46, 146, 0.4)' }}></div>
          <span className="text-gray-300 text-sm">
            Next payout: June 22, 2025
          </span>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <StatsSection />
        </div>

        {/* Leaderboard Section */}
        <div className="mt-16">
          <Leaderboard />
        </div>

        {/* Fee Split Section */}
        <div className="mt-16">
          <FeeSplit />
        </div>
      </div>
    </section>
  );
}

// Stats Component
function StatsSection() {
  return (
    <section className="relative py-16 overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Weekly Fees */}
          <div 
            className="group relative backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
            style={{ 
              background: 'rgba(17, 17, 17, 0.6)',
              border: '1px solid rgba(160, 32, 240, 0.3)'
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255, 46, 146, 0.2)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="#FF2E92" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Weekly Fees</h3>
                </div>
              </div>
              <div 
                className="flex items-center space-x-1 rounded-lg px-2 py-1"
                style={{ background: 'rgba(17, 17, 17, 0.6)' }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: '#FF2E92' }}></div>
                <span className="text-gray-400 text-xs">15m</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span 
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  7.9 MNT
                </span>
              </div>
              <div className="text-gray-500 text-sm text-left">$1,097</div>
            </div>
          </div>

          {/* Market Cap */}
          <div 
            className="group relative backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
            style={{ 
              background: 'rgba(17, 17, 17, 0.6)',
              border: '1px solid rgba(160, 32, 240, 0.3)'
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(160, 32, 240, 0.2)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="#A020F0" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Market Cap</h3>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span 
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  $776,345
                </span>
              </div>
              <div className="text-gray-500 text-sm text-left">Fully Diluted</div>
            </div>
          </div>

          {/* Token Price */}
          <div 
            className="group relative backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
            style={{ 
              background: 'rgba(17, 17, 17, 0.6)',
              border: '1px solid rgba(160, 32, 240, 0.3)'
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255, 46, 146, 0.2)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="#FF2E92" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Token Price</h3>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span 
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  $0.000776
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {/* <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414L10 19.414l-4.707-5.707a1 1 0 011.414-1.414L10 15.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg> */}
                {/* <span className="text-red-400 text-sm font-medium">-15.2% 24h</span> */}
              </div>
            </div>
          </div>

          {/* Volume 24h */}
          <div 
            className="group relative backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
            style={{ 
              background: 'rgba(17, 17, 17, 0.6)',
              border: '1px solid rgba(160, 32, 240, 0.3)'
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(160, 32, 240, 0.2)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="#A020F0" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">Volume 24h</h3>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span 
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #FF2E92 0%, #A020F0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  $47,218
                </span>
              </div>
              <div className="text-gray-500 text-sm text-left">All POL Pools Combined</div>
            </div>
          </div>

        </div>
      </div>



    </section>
  );
}

// Placeholder for other sections


export default Hero;