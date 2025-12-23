
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <div className="py-12 bg-background-dark">
      <div className="container px-4 mx-auto max-w-[1280px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex justify-center items-center">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined">diamond</span> AgencyOne
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined">bolt</span> FastMedia
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined">rocket_launch</span> ScaleUp
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined">auto_awesome</span> CreativeAI
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
