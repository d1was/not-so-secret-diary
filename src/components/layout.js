import React from "react"
import { Link } from "gatsby"
import "./../css/globals.css"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="text-4xl uppercase font-black text-center font-sans mb-10 mt-0">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="text-lg uppercase text-red-400 font-sans font-black mt-0">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="site-container w-full">
      <div className="max-w-2xl bg-white mx-auto px-5 py-10 min-h-screen">
        <header>{header}</header>
        <main className="mt-24 p-4">{children}</main>

      </div>
      </div>
    )
  }
}

export default Layout
