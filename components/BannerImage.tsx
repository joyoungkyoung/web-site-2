import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';

interface BannerImageProps {
  src: string | StaticImageData;
  alt: string;
  fill?: boolean;
}
export default function BannerImage(props: BannerImageProps) {
  return <CustomBanner {...props} />;
}

const CustomBanner = styled(Image)`
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 590px;
  object-fit: cover;
`;
