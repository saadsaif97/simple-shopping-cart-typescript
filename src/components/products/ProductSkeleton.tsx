import { Skeleton } from '@material-ui/lab'

const ProductSkeleton = () => {
  return (
    <div>
      <Skeleton variant='rect' width='100%' height={250} />
      <Skeleton variant='text' />
      <Skeleton
        variant='rect'
        width={120}
        height={20}
        style={{ margin: '20px 0' }}
      />
      <Skeleton variant='text' />
      <Skeleton variant='text' />
      <Skeleton variant='text' />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        <Skeleton variant='rect' width={120} height={20} />
        <Skeleton variant='rect' width={120} height={20} />
      </div>
    </div>
  )
}

export default ProductSkeleton
