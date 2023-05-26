import { usePutTodo } from '../../hooks/useTodos';
import { ModifyType } from '../../utils/todoType';

export default function CheckIcon({
  todoId,
  content,
  handleModify,
}: ModifyType) {
  const { mutate, isSuccess } = usePutTodo();

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className='w-6 h-6 cursor-pointer hover:text-inputBg'
      onClick={() => {
        mutate({ todoId, content });
        if (isSuccess && handleModify) {
          handleModify(false);
        }
      }}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 12.75l6 6 9-13.5'
      />
    </svg>
  );
}
