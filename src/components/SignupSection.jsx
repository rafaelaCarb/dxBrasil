import React from "react";
import RegistrationForm from "../components/Forms/RegistrationForm";
import VerificationForm from "../components/Forms/VerificationForm";
import VerificatedForm from "../components/Forms/VerificatedForm";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { Cog, User, CheckCheck } from "lucide-react";

const SignupSection = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="flex flex-col items-center min-h-[90%] m-3 px-4 py-10 lg:m-0 sm:mx-12 rounded-md lg:bg-transparent">
      <div className="w-full px-2 sm:px-14 lg:px-0 lg:w-4/5 lg:max-w-3xl">
        <Stepper
          activeStep={activeStep}
        >
          <Step onClick={() => setActiveStep(0)}>
            <User className="h-6 w-6 ms-[7.5px] mt-[8px]" />
            <div className="absolute -bottom-[3rem] -left-[.6em] md:-left-[1.1em] w-max text-center">
              <Typography
                className="text-sm font-semibold sm:text-md md:text-lg"
                color={activeStep === 0 ? "black" : "gray"}
              >
                Passo 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "black" : "gray"}
                className="font-normal text-xs md:text-sm"
              >
                Registre-se
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <Cog className="h-6 w-6 ms-[8px] mt-[8px]" />
            <div className="absolute -bottom-[3rem] -left-[2.5em] md:-left-[3.2em] w-max text-center">
              <Typography
                className="text-sm font-semibold sm:text-md md:text-lg"
                color={activeStep === 1 ? "black" : "gray"}
              >
                Passo 2
              </Typography>
              <Typography
                color={activeStep === 1 ? "black" : "gray"}
                className="font-normal text-xs md:text-sm"
              >
                Verificação de código
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}          >
            <CheckCheck className="h-6 w-6 ms-[7.5px] mt-[6px]" />
            <div className="absolute -bottom-[3rem] -left-[.7em] md:-left-[1em] w-max text-center">
              <Typography
                className="text-sm font-semibold sm:text-md md:text-lg"
                color={activeStep === 2 ? "black" : "gray"}
              >
                Passo 3
              </Typography>
              <Typography
                color={activeStep === 2 ? "black" : "gray"}
                className="font-normal text-xs md:text-sm"
              >
                Verificado
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="mt-24 flex flex-col items-center w-full ">
          {activeStep === 0 && <RegistrationForm setActiveStep={setActiveStep}/>}
          {activeStep === 1 && <VerificationForm setActiveStep={setActiveStep} />}
          {activeStep === 2 && <VerificatedForm />}
          <div className="mt-8 flex justify-between w-full">
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupSection;
