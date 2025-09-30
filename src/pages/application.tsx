// JSX - JavaScript XML -> HTML
import { useQuery } from '@tanstack/react-query'

import { Dialog } from '../components/ui/dialog'
import { CreateGoal } from '../components/create-goal'
import { WeeklySummary } from '../components/weekly-summary'
import { EmptyGoals } from '../components/empty-goals'
import { useGetWeekSummary } from '../http/generated/api'

export function Application() {
  const { data } = useGetWeekSummary()

  if(isLoading || !data) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loader2 className='text-zinc-500 animate-spin size-10'/>
      </div>
    )
  }

  return (
    <Dialog>
      {data.summary.total > 0 ? <WeeklySummary summary={data.summary} /> : <EmptyGoals />}

      <CreateGoal/>
    </Dialog>
  )
}
