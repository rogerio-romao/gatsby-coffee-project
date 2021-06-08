import React from "react"
import { Link } from "gatsby"

import Title from "../globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              rem unde delectus quae, dolorum ipsum perferendis suscipit ratione
              magni ad numquam blanditiis. Veritatis provident praesentium nam?
              Recusandae minus aliquid incidunt rerum culpa possimus ipsam id.
              Odit reprehenderit provident quia voluptates ratione nisi odio
              itaque, fugit autem maiores optio. Omnis, aspernatur?
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
