import Skeleton from 'react-loading-skeleton';

function Loading() {
  return (
    <div className="flex flex-col gap-y-8">
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
    </div>
  );
}

export default Loading;
