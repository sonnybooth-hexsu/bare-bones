import React, { useState, SyntheticEvent } from "react"
import {
  duplicateCount,
  filterByKey,
  filterByKeyMatch,
} from "../../utils/functions"

type CheckboxProps = {
  title: string
  count: number
  isChecked: boolean
  id: number
}

type FieldsetProps = {
  items: []
  type: string
  title: string
  setItemsState: (newItemsState: {}[]) => []
}

type FilterProps = {
  items: []
  types: {
    uid: string
    title: string
  }[]
  setItemsState: (newItemsState: {}[]) => []
}

const Fieldset = ({ items, type, title, setItemsState }: FieldsetProps) => {
  const fieldsetTypes = filterByKey(items, type)
  const fieldsetTypesList = duplicateCount(fieldsetTypes)
  const checkboxes = fieldsetTypesList.map(
    ({ title, count }: CheckboxProps, i: number) => {
      return {
        title,
        count,
        id: i,
        isChecked: false,
      }
    }
  )

  const [checkboxesState, setCheckboxesState] = useState(checkboxes)

  const handleCheck = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    const value = target.name
    const checked = target.checked

    checkboxesState.forEach((checkbox: CheckboxProps) => {
      if (checkbox.title === value) checkbox.isChecked = checked
    })

    setCheckboxesState(checkboxesState)

    const checkedItems = checkboxesState
      .filter(({ isChecked }: CheckboxProps) => isChecked)
      .map(({ title }: CheckboxProps) => title)

    if (!checkedItems.length) {
      return setItemsState(items)
    }

    const newItemsState = filterByKeyMatch(items, type, checkedItems)

    setItemsState(newItemsState)
  }

  return (
    <fieldset className="mt-3">
      <legend>{title}</legend>
      {checkboxes.map(
        ({ id, title, count, isChecked }: CheckboxProps, i: number) => (
          <div key={`category-${i}`}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                id={`${title}-${id}`}
                name={title}
                onChange={e => handleCheck(e)}
                defaultChecked={isChecked}
              />
              <span className="ml-2">{`${title} (${count})`}</span>
            </label>
          </div>
        )
      )}
    </fieldset>
  )
}

export const Filter = ({ items, setItemsState, types }: FilterProps) => {
  return (
    <form>
      {types.map(({ uid, title }, i) => (
        <Fieldset
          key={`filter-fieldset${i}`}
          items={items}
          type={uid}
          setItemsState={setItemsState}
          title={title}
        />
      ))}
    </form>
  )
}
