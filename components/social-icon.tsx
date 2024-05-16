import { Icon } from "~/types/Icon";

type SocialIconProps = {
  href: string;
  icon: Icon;
  self?: boolean;
};

export default function SocialIcon({ href, icon, self }: SocialIconProps) {
  return (
    <a href={href} target={self ? "_self" : "_blank"} rel="noopener noreferrer">
      {icon({ className: "h-8 w-8 hover:stroke-[#4ac6ff] transition-all" })}
    </a>
  );
}
