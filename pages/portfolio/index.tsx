import { Wrapper } from '@/components';
import { BannerSection, CardSection, SearchSection } from '@/containers/Portfolio';

export default function Portfolio() {
  return (
    <Wrapper>
      {/* Banner */}
      <BannerSection />
      {/* Search Filter */}
      <SearchSection />
      {/* Card */}
      <CardSection />
    </Wrapper>
  );
}
