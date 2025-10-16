import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900/50 border border-gray-700 rounded-2xl p-2 sm:p-4 shadow-2xl shadow-blue-900/20">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/LKM7cD3_aq0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            {/* Laptop mockup base */}
            <div className="absolute -bottom-2 left-[10%] w-[80%] h-2 sm:h-4 bg-gray-800 rounded-b-lg border-x border-b border-gray-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
