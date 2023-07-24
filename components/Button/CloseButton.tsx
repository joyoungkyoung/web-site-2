import { CloseSvg } from '../@svg';
import { CustomButtonProps } from './Button.type';
import IconButtonBase from './IconButtonBase';

export default function CloseButton({ onClick, hide }: CustomButtonProps) {
  return (
    <IconButtonBase onClick={onClick} hide={hide}>
      <CloseSvg />
    </IconButtonBase>
  );
}
