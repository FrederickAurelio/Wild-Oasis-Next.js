"use client"
import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini";

export default function SubmitButton({ children, pendingLabel = "Upadating..." }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
      {pending ?
        <div className="flex gap-4 items-place-self-center">
          <div><SpinnerMini /></div>
          <p>{pendingLabel}</p>
        </div> : children}
    </button>
  )
}