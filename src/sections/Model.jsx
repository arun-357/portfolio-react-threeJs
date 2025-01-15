import { useEffect } from 'react';

export const Model = () => {
  useEffect(() => {
    const element = document.querySelector('.model_tag_1');
    if (element) {
      element.classList.add('animate-typing');
    }
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">            
        <p className="sm:text3xl text-2xl font-medium text-white text-center font-generalsans">
          I&apos;m Arunachalam <img src="/assets/cool.svg" alt="cool" className="w-6 h-6 cool-emoji" />
        </p>
        <p className="model_tag">Software Development Engineer</p>   
      </div>
      <div className='w-full h-full absolute inset-0'>
            
      </div>      
    </section>
  );
};
