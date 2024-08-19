import { useEffect } from "react";
import { WobbleCard } from "../aceternityUi/wobbleCard/WobbleCard";
import soccerFootAlert from "../../assets/SoccerFootAlert.jpg"
import zakichanTechRemoveBG from "../../assets/ZakichanTechRemoveBG.png"
import whenUJump from "../../assets/IMG_5472.jpg"
import bannerRMA from "../../assets/bannerRMA.png"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Blog() {


  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleFAlertClick = () => {
    document.querySelectorAll('.fade-element').forEach((element) => {
      element.classList.remove('fade-in-up');
      element.classList.add('fade-out');
    });
    setTimeout(() => {
      navigate('/blog/football-alert');
    }, 1500);
  };

  const handleApproachIotClick = () => {
    document.querySelectorAll('.fade-element').forEach((element) => {
      element.classList.remove('fade-in-up');
      element.classList.add('fade-out');
    });
    setTimeout(() => {
      navigate('/blog/approach-iot');
    }, 1500);
  };

  const handleBbyCtoClick = () => {
    document.querySelectorAll('.fade-element').forEach((element) => {
      element.classList.remove('fade-in-up');
      element.classList.add('fade-out');
    });
    setTimeout(() => {
      navigate('/blog/being-a-baby-cto');
    }, 1500);

  };

  const handleZakichanTechClick = () => {
    document.querySelectorAll('.fade-element').forEach((element) => {
      element.classList.remove('fade-in-up');
      element.classList.add('fade-out');
    });
    setTimeout(() => {
      navigate('/blog/zakichan-technologies');
    }, 1500);
  }

  const handleWhenYouJumpClick = () => {
    document.querySelectorAll('.fade-element').forEach((element) => {
      element.classList.remove('fade-in-up');
      element.classList.add('fade-out');
    });
    setTimeout(() => {
      navigate('/blog/when-you-jump');
    }, 1500);
  }

  const handlePrioritizeTasks = () => {
    document.querySelectorAll('.fade-element').forEach((element) => {
      element.classList.remove('fade-in-up');
      element.classList.add('fade-out');
    });
    setTimeout(() => {
      navigate('/blog/prioritize-tasks');
    }, 1500);
  }

  useEffect(() => {
    document.querySelectorAll('.fade-element').forEach((element) => {
      element.classList.add('fade-in-up');
    });

    const elements = document.querySelectorAll('.h-screen');
    elements.forEach((element) => {
      element.classList.remove('justify-center');
    });

    return () => {
      elements.forEach((element) => {
        element.classList.add('justify-center');
      });
    };

  }, []);
  return (
    <>
      <div style={{ fontFamily: "Bold" }} className="mx-auto mt-20">
        <p style={{ color: "#1f458c" }} className="fade-element text-xl md:text-3xl lg:text-5xl text-black inter-var text-center">
          {t('blog.title')}
        </p>
        <p style={{ color: "#11254c", fontFamily: "Bold" }} className="fade-element text-center md:text-3xl ml-4 mt-4 text-black inter-var ">
          {t('blog.subtitle')}
        </p>
      </div>
      <div className=" p-3 fade-element grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10">
        <WobbleCard onClick={handleBbyCtoClick} containerClassName="col-span-1 lg:col-span-3 bg-blue-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {t('blog.bento.0.title')}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              {t('blog.bento.0.description')}
            </p>
          </div>
          <img
            src={bannerRMA}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-[1%] lg:-right-[1%] filter -bottom-10 md:-bottom-5 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard onClick={handleFAlertClick}
          containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[400px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {t('blog.bento.1.title')}
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              {t('blog.bento.1.description')}
            </p>
          </div>
          <img
            src={soccerFootAlert}
            width={300}
            height={300}
            alt="linear demo image"
            className="absolute -right-[10%] lg:-right-[1%] filter -bottom-40 md:-bottom-20 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard onClick={handleApproachIotClick} containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           {t('blog.bento.2.title')}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            {t('blog.bento.2.description')}
          </p>
        </WobbleCard>
        <WobbleCard onClick={handleZakichanTechClick}
          containerClassName="col-span-1 lg:col-span-1 bg-purple-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {t('blog.bento.3.title')}
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              {t('blog.bento.3.description')}
            </p>
          </div>
          <img
            src={zakichanTechRemoveBG}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-[1%] lg:-right-[40%] filter -bottom-12 md:-bottom-40 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard onClick={handlePrioritizeTasks}
          containerClassName="col-span-1 lg:col-span-1 bg-green-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {t('blog.bento.5.title')}
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              {t('blog.bento.5.description')}
            </p>
          </div>
        </WobbleCard>
        <WobbleCard onClick={handleWhenYouJumpClick}
          containerClassName="col-span-1 lg:col-span-1 bg-yellow-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {t('blog.bento.4.title')}
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              {t('blog.bento.4.description')}
            </p>
          </div>
          <img
            src={whenUJump}
            width={400}
            height={400}
            alt="linear demo image"
            className="absolute -right-[1%] lg:-right-[1%] filter -bottom-12 md:-bottom-5 object-contain rounded-2xl"
          />
        </WobbleCard>

      </div>
    </>

  );
}
