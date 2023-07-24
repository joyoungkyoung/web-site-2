import { UploadSvg } from '../@svg';
import { CustomButtonProps } from './Button.type';
import IconButtonBase from './IconButtonBase';

export default function UploadButton({ onClick, hide }: CustomButtonProps) {
  return (
    <IconButtonBase onClick={onClick} hide={hide}>
      <UploadSvg />
    </IconButtonBase>
  );
}
