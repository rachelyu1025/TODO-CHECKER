export default function Progress() {
  const style = { '--value': '70', '--size': '7rem' } as React.CSSProperties;

  return (
    <>
      <div className='flex items-center justify-center mt-6 tablet:hidden'>
        <label htmlFor='todo-progress' className='mr-2 font-semibold'>
          70%
        </label>
        <progress
          id='todo-progress'
          max='100'
          value='70'
          className='w-56 progress progress-error'
        ></progress>
      </div>

      <div className={`hidden tablet:flex justify-center mt-6`}>
        <div className='font-semibold radial-progress text-error' style={style}>
          70%
        </div>
      </div>
    </>
  );
}
