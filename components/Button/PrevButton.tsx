import { ArrowLeftSvg } from '../@svg';
import { CustomButtonProps } from './Button.type';
import IconButtonBase from './IconButtonBase';

export default function PrevButton({ onClick, hide }: CustomButtonProps) {
  return (
    <IconButtonBase onClick={onClick} hide={hide}>
      <ArrowLeftSvg />
    </IconButtonBase>
  );
}
