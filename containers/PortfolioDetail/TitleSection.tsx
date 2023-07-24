import { AdornButton, Heading } from '@/components';
import { UploadSvg } from '@/components/@svg';
import { Box, Typography } from '@mui/material';

interface TitleSectionProps{
    title: string;
    description: string;
}
export default function TitleSection({title, description}: TitleSectionProps) {
  return (
    <Box marginTop={'80px'}>
      <Box display={'flex'} alignItems={'flex-start'} gap={'10px'} marginBottom={'20px'} data-aos="fade-up">
        <Heading t="h2" lineHeight="68px">
          {title}
        </Heading>
        <AdornButton startIcon={<UploadSvg />}>공유하기</AdornButton>
      </Box>
      <Typography data-aos="fade-up">{description}</Typography>
    </Box>
  );
}
