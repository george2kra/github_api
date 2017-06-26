import React from 'react'
import Repo from './Repo'

export default function RepoNames({
  items
}) {
  return (
    <div>
    {
      items.map((item) => (
        <Repo
          key={ item.id }
          { ...item }
        />
      ))
    }
    </div>
  )
}
