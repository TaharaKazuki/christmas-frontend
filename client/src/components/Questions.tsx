import { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../app/hook'
import { useFetchQuestion } from '../hooks/FetchQuestion'

type Props = {
  onChecked: (checked: number) => void
}

const Questions: FC<Props> = ({ onChecked }) => {
  const [checked, setChecked] = useState<string | undefined>(undefined)
  const [{ isLoading, apiData, serverError }] = useFetchQuestion()

  const questions = useAppSelector((state) => state.questions.queue[state.questions.trace])

  useEffect(() => {
    // console.info(questions)
  })

  const onSelect = (i: number) => onChecked(i)

  if (isLoading) return <h3 className="text-light">isLoading</h3>
  if (serverError) return <h3 className="text-light">{serverError || 'Unknown Error'}</h3>

  return (
    <>
      {questions && (
        <div className="questions">
          <h2 className="text-light">{questions.question}</h2>
          <ul key={questions.id}>
            {questions.options.map((q, i) => (
              <li key={i}>
                <input
                  type="radio"
                  value={checked}
                  name="options"
                  id={`q${i}-option`}
                  onChange={() => onSelect(i)}
                />
                <label className="text-primary" htmlFor={`q${i}-option`}>
                  {q}
                </label>
                <div className="check"></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Questions
