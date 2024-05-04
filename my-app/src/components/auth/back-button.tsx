
import Link from "next/link"
import { Button } from "../ui/button"

interface backbuttonPtops{
    label: string
    href: string
}

const backbutton = ({label,href}: backbuttonPtops) => {
  return (
   <Button variant="link" className="font-normal w-full" size='sm' asChild>
    <Link href={href}>
      {label}
    </Link>

    
    
   </Button>
  )
}

export default backbutton
