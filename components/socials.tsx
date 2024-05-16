import SocialIcon from "./social-icon";
import GithubIcon from "./svg-icons/github-icon";
import LinkedinIcon from "./svg-icons/linkedin-icon";
import MailIcon from "./svg-icons/mail-icon";

export default function Socials() {
  return (
    <div className="flex gap-6 justify-center lg:justify-start">
      <SocialIcon href="https://github.com/ealpizr" icon={GithubIcon} />
      <SocialIcon
        href="https://www.linkedin.com/in/enrique-alpizar/"
        icon={LinkedinIcon}
      />
      <SocialIcon href="mailto:me@ealpizar.com" self icon={MailIcon} />
    </div>
  );
}
