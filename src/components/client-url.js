import React, { useState } from "react"
import { singletonHook } from "react-singleton-hook"

let init = {
  productDomain: "",
  clientSlug: ""
}

let setClientUrlState;
const useClientUrlStateSingleton = singletonHook(init, () => {
  const [state, setState] = useState(init)
  setClientUrlState = (newState={}) => {
    setState({ ...state, ...newState })
  }
  return state
})

export const useClientUrlState = () => [
  useClientUrlStateSingleton(),
  setClientUrlState
]

export const ClientUrlDetailsForm = ({
  productDomainPlaceholder="<product-domain>",
  clientSlugPlaceholder="<client-slug>"
}) => {
  const [{ productDomain, clientSlug }, setClientUrlState] = useClientUrlState()

  const handleProductDomainChange = (e) => {
    setClientUrlState({ productDomain: e.target.value })
  }
  const handleClientSlugChange = (e) => {
    setClientUrlState({ clientSlug: e.target.value })
  }

  return (
    <form>
      <label htmlFor="product-domain">Product Domain</label>
      <input id="product-domain" type="text" value={productDomain} placeholder={productDomainPlaceholder} onChange={handleProductDomainChange} />
      <label htmlFor="client-slug">Client Slug</label>
      <input id="client-slug" type="text" value={clientSlug} placeholder={clientSlugPlaceholder} onChange={handleClientSlugChange} />
    </form>
  )
}

export const ClientUrl = ({ path }) => {
  const [{ productDomain, clientSlug }] = useClientUrlState()
  return <code>
    {path
      .replace("<product-domain>", productDomain || "<product-domain>")
      .replace("<client-slug>", clientSlug || "<client-slug>")}
  </code>
}
