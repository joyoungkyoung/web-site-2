import { Heading } from '@/components';
import { Box, Typography } from '@mui/material';

interface ReviewCardProps {
  index: number;
  message: string;
  by: string;
}
export default function ReviewCard({ index, message, by }: ReviewCardProps) {
  return (
    <Box>
      <Typography variant="body2" fontWeight={'bold'}>{`${index < 10 ? '0' : ''}${index}`}</Typography>
      <Box height={'40px'} />
      <Heading t="h4">{message}</Heading>
      <Box height={'20px'} />
      <Typography>{by}</Typography>
    </Box>
  );
}
