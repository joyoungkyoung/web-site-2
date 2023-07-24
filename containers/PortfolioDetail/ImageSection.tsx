import Image from 'next/image';
import { RoundButton, TextSwitch } from '@/components';
import { breakpoints } from '@/styles/mixins';
import { Box, Grid, useMediaQuery } from '@mui/material';
import { ChangeEvent, useState } from 'react';

interface ImageSectionProps {
  group: { [key: string]: any[] };
}
export default function ImageSection({ group }: ImageSectionProps) {
  const [curKey, setCurKey] = useState<string>(group && Object.keys(group)[0]);
  const [isAfter, setAfter] = useState<boolean>(true);
  const matchLaptop = useMediaQuery(`(max-width:${breakpoints.laptop}px)`);

  const handleClickGroup = (key: string) => setCurKey(key);
  const handleChangeSwitch = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => setAfter(checked);

  return (
    <Box marginTop={'60px'}>
      {/* 상세 이미지 그룹 */}
      <Box display={'flex'} gap={'10px'}>
        {group &&
          Object.keys(group).map((key) => (
            <RoundButton
              key={key}
              color={curKey === key ? 'black' : 'gray'}
              onClick={() => handleClickGroup(key)}
            >{`${key}(${group[key].length})`}</RoundButton>
          ))}
      </Box>
      <Box marginTop={'60px'}>
        {/* 스와이퍼, Grid */}
        {matchLaptop ? (
          <Box></Box>
        ) : (
          curKey && (
            <Box display={'flex'} gap={'5px'}>
              <Grid container maxWidth={'calc(50% - 2.5px)'} width={'100%'}>
                <Grid item position={'relative'}>
                  <Image
                    src={isAfter ? group[curKey][0].afterImageUrl : group[curKey][0].beforeImageUrl}
                    alt="image-set"
                    style={{ objectFit: 'cover', width: '100%', height: 'fit-content', aspectRatio: '1 / 1' }}
                  />
                  <TextSwitch
                    checked={isAfter}
                    sx={{ position: 'absolute', left: 20, top: 20 }}
                    onChange={handleChangeSwitch}
                  />
                </Grid>
              </Grid>
              <Grid container columnSpacing={'5px'}>
                {group[curKey].map((image: any, index: number) => {
                  const isRange = index > 0 && index < 5;

                  return (
                    isRange && (
                      <Grid key={image.uuid} item xs={6}>
                        <Image
                          src={image.beforeImageUrl === '' ? image.afterImageUrl : image.beforeImageUrl}
                          alt="image-set"
                          style={{ objectFit: 'cover', width: '100%', height: 'fit-content', aspectRatio: '1 / 1' }}
                        />
                      </Grid>
                    )
                  );
                })}
              </Grid>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
