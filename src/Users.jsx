import React, { use } from 'react'

export const Users = ({ fetchUsers, data }) => {
    // receiving the promise from the app component and using use hook to get the data and render it in the users component
    // const usersDetails = use(promise)
    // // receiving the promise from the app component and using use hook to get the data and render it in the users component
    // const usersDetails2 = use(data);
    // i can use only once use hook in a component so i have to choose one of them to use and render the data in the users component
      const usersDetails = fetchUsers ? use(fetchUsers) : use(data);

  return (
    <div>
        <h1>Users : {usersDetails.length}</h1>
        {/* <h1>Users: {usersDetails2.length}</h1> */}
        </div>
  )
}
