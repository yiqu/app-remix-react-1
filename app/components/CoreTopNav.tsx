import { Link } from "@remix-run/react";

function CoolComp() {

  return (
    <div>
      Nav:
      <Link to="./level1">Level 1</Link>
    </div>
  )
}

export default CoolComp;