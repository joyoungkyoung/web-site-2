import { Wrapper } from '@/components';
import { ApartSection, BannerSection, ReviewSection, VideoSection } from '@/containers/Home';
import { APART_ITEMS, APART_ITEMS2 } from '@/containers/Home/Home.constant';
import 'swiper/css';

export default function Home() {
  return (
    <Wrapper>
      {/* Swiper Section*/}
      <BannerSection />
      {/* Video Section */}
      <VideoSection />
      {/* Apart Section1 */}
      <ApartSection
        title="공간 활용도를 높인 30평대 아파트"
        btn={{ href: '', text: '30평대 아파트 더 보기' }}
        items={APART_ITEMS}
      />
      {/* Apart Section2 */}
      <ApartSection
        title="오래도록 아름다운 구축 아파트"
        btn={{ href: '', text: '구축 아파트 더 보기' }}
        items={APART_ITEMS2}
      />
      {/* Review Section */}
      <ReviewSection />
    </Wrapper>
  );
}
