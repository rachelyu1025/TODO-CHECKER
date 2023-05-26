import { usePostTodo } from '../../hooks/useTodos';
import { CreateType } from '../../utils/todoType';

const AddBtn = ({
  content,
  createdAt,
  labelTitle,
  labelColor,
  setLabel,
  setContent,
}: CreateType) => {
  const { mutate } = usePostTodo();

  const handleCreateTodo = () => {
    mutate({ content, createdAt, labelTitle, labelColor });
    if (setLabel && setContent) {
      setLabel('');
      setContent('');
    }
  };

  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === '13') {
      handleCreateTodo();
    }
  };

  return (
    <button
      onKeyDown={handleEnterKey}
      onClick={handleCreateTodo}
      className='bg-[#fff] px-2  tablet:px-5 py-1 font-medium tablet:font-semibold hover:bg-[#CCCDDE] hover:text-textBlue'
    >
      Add
    </button>
  );
};

export default AddBtn;
