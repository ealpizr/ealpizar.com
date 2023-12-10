import DeveloperAnimation from "~/components/developer-animation";
import Spotlight from "~/components/spotlight";

export default function PersonalSummary() {
  return (
    <section
      aria-label="Personal Summary"
      className="flex flex-col h-screen min-h-[667px]"
    >
      <div className="grow flex content-end lg:content-center flex-wrap-reverse items-center gap-y-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left lg:pl-6 lg:mt-[-7.5%] z-10">
          <div className="font-poppins font-bold">
            <hgroup>
              <div className="flex justify-center lg:justify-start">
                <h1 className="text-3xl md:text-4xl lg:text-5xl pb-12">
                  Enrique Alpízar
                </h1>
                <p
                  aria-hidden="true"
                  className="pb-3 text-3xl md:text-4xl lg:text-5xl inline-block animate-cursor"
                >
                  _
                </p>
              </div>
            </hgroup>
            <h2 className="font-medium text-xl md:text-2xl">
              Software Engineer & Security Enthusiast
            </h2>
          </div>
        </div>

        <div className="h-1/2 w-full lg:w-1/2 flex justify-center items-center mt-[10%] lg:mt-[-12%]">
          <figure
            className="absolute z-10 w-96 h-96 lg:w-[31.25rem] lg:h-[31.25rem]"
            aria-label="animated illustration of a software developer floating in the air"
          >
            <img id="fallback-developer-svg" src="/assets/developer.svg" />
            <DeveloperAnimation />
          </figure>

          <div className="hidden lg:block">
            <Spotlight
              top="10%"
              width="43.5rem"
              height="27.1rem"
              rotation="37deg"
            />
          </div>
          <div className="lg:hidden">
            <Spotlight
              top="-60%"
              width="23.5rem"
              height="30rem"
              rotation="129deg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
