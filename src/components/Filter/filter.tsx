import React, { useState, useContext, SyntheticEvent } from "react"
import { Plus, X } from "react-feather"
import { filterBySelected, createListOfTypes } from "../../utils/functions"
import { ThemeContext } from "../../context/ThemeContext"
import buttons from "../../styles/buttons.module.css"

type Product = {
  id: number
  layout: string
  title: string
  category: string
  path: string
  excerpt: string
  image: string
  imageLarge: string
  productAttributeTitleOne: string
  productAttributeTitleTwo: string
  productAttributeTitleThree: string
  productAttributeTitleFour: string
  productAttributeValueOne: string
  productAttributeValueTwo: string
  productAttributeValueThree: string
  productAttributeValueFour: string
}

type FilterProps = {
  items: Array<Product>
  setItemsState: (newItemsState: Array<Product>) => void
  types: Array<{
    title: string
    uid: string
  }>
}

type FieldsetsProps = {
  items: Array<Product>
  setItemsState: (newItemsState: Array<Product>) => void
  setFiltersSelected: (newFiltersSelected: number) => void
  types: Array<{
    title: string
    uid: string
  }>
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
  items: Array<Product>
  checkboxes: [Checkbox]
  fieldsetsState: [FieldsetTypeProps]
  setFieldsetsState: (newFieldsetsState: [FieldsetTypeProps]) => void
  setItemsState: (newItemsState: Array<Product>) => void
  setFiltersSelected: (newFiltersSelected: number) => void
}

const Fieldset = ({
  title,
  items,
  checkboxes,
  fieldsetsState,
  setFieldsetsState,
  setItemsState,
  setFiltersSelected,
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
    setFiltersSelected(checkedItems.length)
  }

  return (
    <fieldset className="mt-3">
      <legend>{title}</legend>
      {checkboxes.map(({ id, title, count, isChecked }, i) => (
        <div key={`category-${i}`}>
          <label className="inline-flex items-center">
            <input
              data-testid="filterCheckbox"
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

const Fieldsets = ({
  types,
  items,
  setItemsState,
  setFiltersSelected,
}: FieldsetsProps) => {
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

  const [fieldsetsState, setFieldsetsState] = useState(fieldsets)

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
            setFiltersSelected={setFiltersSelected}
          />
        )
      )}
    </>
  )
}

export const Filter = ({ items, setItemsState, types }: FilterProps) => {
  const { filterLockToggle } = useContext(ThemeContext)
  const [filterOpen, setFilterOpen] = useState(false)
  const [filtersSelected, setFiltersSelected] = useState(0)

  return (
    <>
      <button
        className={`${buttons.btnSecondaryOutline} w-full mb-8 md:hidden`}
        onClick={() => {
          setFilterOpen(true)
          filterLockToggle(true)
        }}
      >
        <div className="flex align-center justify-between">
          Filters
          <Plus />
        </div>
      </button>
      <form
        className={`${
          filterOpen ? "inline-block" : "hidden"
        } absolute top-0 right-0 bg-white h-screen z-999 pt-4 pr-8 pl-8 pb-8 min-w-3/4 md:block md:static md:h-auto`}
      >
        <div className="flex justify-end cursor-pointer md:hidden">
          <X
            onClick={() => {
              setFilterOpen(false)
              filterLockToggle(false)
            }}
          />
        </div>
        <Fieldsets
          types={types}
          items={items}
          setItemsState={setItemsState}
          setFiltersSelected={setFiltersSelected}
        />
      </form>
      {filtersSelected > 0 && (
        <p className="mb-8">Filters selected: {filtersSelected}</p>
      )}
    </>
  )
}
