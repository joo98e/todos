import Typography from "@components/atom/Typography";
import { Color } from "@components/atom/Button";

interface ITitleProps {
  subject: string;
  desc: string;
  primaryColor?: Color;
  secondaryColor?: Color;
}

const CardHeader = ({ subject, desc, primaryColor, secondaryColor }: ITitleProps) => {
  return (
    <>
      <Typography fontSize={18} variant={"plain"}>
        {subject}
      </Typography>
      <Typography fontSize={14} variant={"sub"}>
        {desc}
      </Typography>
    </>
  );
};

export default CardHeader;
