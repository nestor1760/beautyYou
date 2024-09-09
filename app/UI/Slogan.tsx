import { FC } from "react"
import { ISlogan } from "../types/types"

const Slogan: FC<ISlogan> = ({ slogan, mb, mt }) => {
  return (
    <p
      className={`w-[886px] text-[36px] italic leading-tight tracking-tight uppercase text-center self-center`}
      style={{ marginBottom: mb, marginTop: mt }}
    >
      {slogan}
    </p>
  )
}

export default Slogan 