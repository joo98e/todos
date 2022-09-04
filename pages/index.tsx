import { RootState } from '@store/index'
import MakeGrid from '@ui/grid/MakeGrid'
import { useSelector } from 'react-redux'

const Home = () => {
  const toDoList = useSelector((state: RootState) => state.todo)

  return (
    <div>
      <MakeGrid column={3} gap={24} items={toDoList.todo} />
    </div>
  )
}

export default Home
