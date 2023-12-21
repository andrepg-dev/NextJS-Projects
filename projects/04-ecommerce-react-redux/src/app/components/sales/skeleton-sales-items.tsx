import { SkeletonCard } from '../card-skeleton';

export const SkeletonSalesItems = () => {
  const items = Array.from({ length: 12 });
  return items.map((_, index) => <SkeletonCard key={index} />);
};
