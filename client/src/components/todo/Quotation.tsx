import { useGetQuotation } from '../../hooks/useQuotation';

export default function Quotation() {
  const { data: quotation } = useGetQuotation();

  return (
    <div className='flex justify-center mt-4'>
      <div className='flex flex-col justify-center items-center text-center w-[85%] p-4 rounded-sm bg-[#c0dcfe78]'>
        <div className='flex flex-row space-x-2'>
          <span>❛</span>
          <p className='font-bold text-center text-md tablet:text-xl'>
            {quotation?.data.content}
          </p>
          <span>❜</span>
        </div>

        <span className='self-end mt-2 font-semibold tablet:mt-3 tablet:self-center'>
          {quotation?.data.author}
        </span>
      </div>
    </div>
  );
}
