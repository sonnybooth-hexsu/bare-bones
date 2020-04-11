import React, { useState, SyntheticEvent } from "react"
import { filterBySelected, createListOfTypes } from "../../utils/functions"

type FilterProps = {
  items: []
  setItemsState: () => []
  types: [
    {
      title: string
      uid: string
    }
  ]
}

type FieldsetsProps = {
  items: []
  setItemsState: () => []
  types: [
    {
      title: string
      uid: string
    }
  ]
}

type Checkbox = {
  title: string
  count: number
  id: number
  isChecked: boolean
}

type FieldsetTypeProps = {
  title: string
  uid: string
  checkboxes: [Checkbox]
}

type Fieldset = {
  title: string
  items: []
  checkboxes: [Checkbox]
  fieldsetsState: FieldsetTypeProps[]
  setFieldsetsState: (newFieldsetsState: []) => void
  setItemsState: () => []
}

const Fieldset = ({
  title,
  items,
  checkboxes,
  fieldsetsState,
  setFieldsetsState,
  setItemsState,
}: Fieldset) => {
  const handleCheck = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    const value = target.name
    const checked = target.checked

    fieldsetsState.map(({ checkboxes }) => {
      return checkboxes.forEach(checkbox => {
        if (checkbox.title === value) checkbox.isChecked = checked
      })
    })

    setFieldsetsState(fieldsetsState)

    const checkedItems = fieldsetsState
      .map(({ checkboxes }) => checkboxes)
      .flat()
      .filter(({ isChecked }) => isChecked)
      .map(({ title }) => title)

    const checkedTypes = fieldsetsState.map(({ uid }) => uid).flat()

    if (!checkedItems.length) {
      return setItemsState(items)
    }

    const newItemsState = filterBySelected(items, checkedTypes, checkedItems)

    setItemsState(newItemsState)
  }

  return (
    <fieldset className="mt-3">
      <legend>{title}</legend>
      {checkboxes.map(({ id, title, count, isChecked }, i) => (
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
      ))}
    </fieldset>
  )
}

const Fieldsets = ({ types, items, setItemsState }: FieldsetsProps) => {
  const fieldsetTypes = createListOfTypes(items, types)

  const fieldsets = fieldsetTypes.map(
    ({ title, uid, checkboxes }: FieldsetTypeProps) => {
      return {
        title,
        uid,
        checkboxes: checkboxes.map(({ title, count }, i) => {
          return {
            title,
            count,
            id: i,
            isChecked: false,
          }
        }),
      }
    }
  )

  const [fieldsetsState, setFieldsetsState] = useState<[] | []>(fieldsets)

  if (!fieldsets.length) return null

  return (
    <>
      {fieldsetsState.map(
        ({ title, checkboxes }: FieldsetTypeProps, i: number) => (
          <Fieldset
            key={`fieldset-${i}`}
            title={title}
            items={items}
            checkboxes={checkboxes}
            fieldsetsState={fieldsetsState}
            setFieldsetsState={setFieldsetsState}
            setItemsState={setItemsState}
          />
        )
      )}
    </>
  )
}

export const Filter = ({ items, setItemsState, types }: FilterProps) => {
  return (
    <form>
      <Fieldsets types={types} items={items} setItemsState={setItemsState} />
    </form>
  )
}
