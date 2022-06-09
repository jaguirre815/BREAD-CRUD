const React = require('react')
const Default = require('./layouts/default')

function Show ({ bread }) {
  // console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
          and it 
          {
            bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
          }
          <span> have gluten.</span>
        </p>
        <img src = {bread.image} alt = {bread.name} />
        <p>{bread.getBakedBy()}</p>
        <li><a href="/breads">Go Home</a></li>

        <a href={`/breads/${bread._id}/edit`}><button>Edit</button></a>

        <form action={`/breads/${bread._id}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
        </form>

      </Default>
    )
}

module.exports = Show